import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyArgsObjectSchema } from './CompanyArgs.schema';
import { QuestionsOnJobsFindManySchema } from '../findManyQuestionsOnJobs.schema';
import { AnswerFindManySchema } from '../findManyAnswer.schema';
import { CompanyQuestionCountOutputTypeArgsObjectSchema } from './CompanyQuestionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  company: z.union([z.boolean(), z.lazy(() => CompanyArgsObjectSchema)]).optional(),
  jobs: z.union([z.boolean(), z.lazy(() => QuestionsOnJobsFindManySchema)]).optional(),
  answers: z.union([z.boolean(), z.lazy(() => AnswerFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CompanyQuestionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CompanyQuestionIncludeObjectSchema: z.ZodType<Prisma.CompanyQuestionInclude> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionInclude>;
export const CompanyQuestionIncludeObjectZodSchema = makeSchema();
