import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobFindManySchema } from '../findManyJob.schema';
import { CompanyQuestionFindManySchema } from '../findManyCompanyQuestion.schema';
import { CompanyMemberFindManySchema } from '../findManyCompanyMember.schema';
import { CompanyCountOutputTypeArgsObjectSchema } from './CompanyCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  jobs: z.union([z.boolean(), z.lazy(() => JobFindManySchema)]).optional(),
  questions: z.union([z.boolean(), z.lazy(() => CompanyQuestionFindManySchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => CompanyMemberFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CompanyCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CompanyIncludeObjectSchema: z.ZodType<Prisma.CompanyInclude> = makeSchema() as unknown as z.ZodType<Prisma.CompanyInclude>;
export const CompanyIncludeObjectZodSchema = makeSchema();
