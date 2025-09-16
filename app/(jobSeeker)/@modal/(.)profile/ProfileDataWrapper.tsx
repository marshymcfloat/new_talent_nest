import { redirect } from "next/navigation";
import ProfileClientPage from "./ProfileClientPage";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  JobClass,
  JobType,
  Skill,
  UserApproachability,
  Location,
  UserAvailabilityType,
} from "@prisma/client"; // Import Skill type

export type FullUserProfile = NonNullable<
  Awaited<ReturnType<typeof getProfileData>>
>["userProfile"];
export type AllLanguages = NonNullable<
  Awaited<ReturnType<typeof getProfileData>>
>["allLanguages"];
export type AllSkills = Skill[]; // Add a type for all skills
export type AllLocations = Location[];
export type PreferenceEnums = {
  jobTypes: JobType[];
  jobClasses: JobClass[];
  availabilityTypes: UserAvailabilityType[];
  approachabilityTypes: UserApproachability[];
};

async function getProfileData(userId: string) {
  const [userProfile, allLanguages, allSkills, allLocations] =
    await Promise.all([
      // Add allSkills
      prisma.user.findUnique({
        where: { id: userId },
        include: {
          previousCareers: {
            where: { deletedAt: null },
            orderBy: { dateStarted: "desc" },
          },
          education: {
            where: { deletedAt: null },
            orderBy: { finishedYear: "desc" },
          },
          resumes: {
            where: { deletedAt: null },
            orderBy: { createdAt: "desc" },
          },
          languages: true,
          skills: true, // Make sure to include skills
        },
      }),
      prisma.language.findMany({ orderBy: { name: "asc" } }),
      prisma.skill.findMany({ orderBy: { name: "asc" } }), // Add query to fetch all skills
      prisma.location.findMany({ orderBy: { name: "asc" } }),
    ]);

  if (!userProfile) return null;

  return { userProfile, allLanguages, allSkills, allLocations }; // Return allSkills
}

const ProfileDataWrapper = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect("/login");
  }

  const data = await getProfileData(session.user.id);

  if (!data) {
    return <div>User profile not found.</div>;
  }

  const preferenceEnums: PreferenceEnums = {
    jobTypes: Object.values(JobType),
    jobClasses: Object.values(JobClass),
    availabilityTypes: Object.values(UserAvailabilityType),
    approachabilityTypes: Object.values(UserApproachability),
  };
  return (
    <ProfileClientPage
      initialProfileData={data.userProfile}
      allLanguages={data.allLanguages}
      allSkills={data.allSkills}
      preferenceEnums={preferenceEnums}
      allLocations={data.allLocations}
    />
  );
};

export default ProfileDataWrapper;
