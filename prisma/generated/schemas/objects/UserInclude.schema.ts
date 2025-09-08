import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberFindManySchema } from '../findManyCompanyMember.schema';
import { ResumeFindManySchema } from '../findManyResume.schema';
import { JobApplicationFindManySchema } from '../findManyJobApplication.schema';
import { CareerHistoryFindManySchema } from '../findManyCareerHistory.schema';
import { EducationFindManySchema } from '../findManyEducation.schema';
import { SkillFindManySchema } from '../findManySkill.schema';
import { LanguageFindManySchema } from '../findManyLanguage.schema';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  companies: z.union([z.boolean(), z.lazy(() => CompanyMemberFindManySchema)]).optional(),
  resumes: z.union([z.boolean(), z.lazy(() => ResumeFindManySchema)]).optional(),
  JobApplication: z.union([z.boolean(), z.lazy(() => JobApplicationFindManySchema)]).optional(),
  previousCareers: z.union([z.boolean(), z.lazy(() => CareerHistoryFindManySchema)]).optional(),
  education: z.union([z.boolean(), z.lazy(() => EducationFindManySchema)]).optional(),
  skills: z.union([z.boolean(), z.lazy(() => SkillFindManySchema)]).optional(),
  languages: z.union([z.boolean(), z.lazy(() => LanguageFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
