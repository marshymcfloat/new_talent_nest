import { Suspense } from "react";
import ProfileSkeleton from "./ProfileSkeleton";
import ProfileDataWrapper from "./ProfileDataWrapper";

const ProfileModalPage = () => {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileDataWrapper />
    </Suspense>
  );
};

export default ProfileModalPage;
