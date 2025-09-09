import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyArgsObjectSchema } from './CompanyArgs.schema';
import { QuestionsOnJobsFindManySchema } from '../findManyQuestionsOnJobs.schema';
import { AnswerFindManySchema } from '../findManyAnswer.schema';
import { CompanyQuestionCountOutputTypeArgsObjectSchema } from './CompanyQuestionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  type: z.boolean().optional(),
  options: z.boolean().optional(),
  companyId: z.boolean().optional(),
  company: z.union([z.boolean(), z.lazy(() => CompanyArgsObjectSchema)]).optional(),
  jobs: z.union([z.boolean(), z.lazy(() => QuestionsOnJobsFindManySchema)]).optional(),
  answers: z.union([z.boolean(), z.lazy(() => AnswerFindManySchema)]).optional(),
  isArchived: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => CompanyQuestionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CompanyQuestionSelectObjectSchema: z.ZodType<Prisma.CompanyQuestionSelect> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionSelect>;
export const CompanyQuestionSelectObjectZodSchema = makeSchema();
