import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeFindManySchema } from '../findManyResume.schema';
import { JobApplicationFindManySchema } from '../findManyJobApplication.schema';
import { CareerHistoryFindManySchema } from '../findManyCareerHistory.schema';
import { EducationFindManySchema } from '../findManyEducation.schema';
import { SkillFindManySchema } from '../findManySkill.schema';
import { LanguageFindManySchema } from '../findManyLanguage.schema';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  resumes: z.union([z.boolean(), z.lazy(() => ResumeFindManySchema)]).optional(),
  JobApplication: z.union([z.boolean(), z.lazy(() => JobApplicationFindManySchema)]).optional(),
  summary: z.boolean().optional(),
  previousCareers: z.union([z.boolean(), z.lazy(() => CareerHistoryFindManySchema)]).optional(),
  education: z.union([z.boolean(), z.lazy(() => EducationFindManySchema)]).optional(),
  skills: z.union([z.boolean(), z.lazy(() => SkillFindManySchema)]).optional(),
  languages: z.union([z.boolean(), z.lazy(() => LanguageFindManySchema)]).optional(),
  availability: z.boolean().optional(),
  preferredWorkType: z.boolean().optional(),
  preferredLocation: z.boolean().optional(),
  rightToWork: z.boolean().optional(),
  expectedSalary: z.boolean().optional(),
  jobClassification: z.boolean().optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
