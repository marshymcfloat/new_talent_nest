import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JobApplicationScalarRelationFilterObjectSchema } from './JobApplicationScalarRelationFilter.schema';
import { JobApplicationWhereInputObjectSchema } from './JobApplicationWhereInput.schema';
import { EmployerQuestionScalarRelationFilterObjectSchema } from './EmployerQuestionScalarRelationFilter.schema';
import { EmployerQuestionWhereInputObjectSchema } from './EmployerQuestionWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobApplicationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  questionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  JobApplication: z.union([z.lazy(() => JobApplicationScalarRelationFilterObjectSchema), z.lazy(() => JobApplicationWhereInputObjectSchema)]).optional(),
  Question: z.union([z.lazy(() => EmployerQuestionScalarRelationFilterObjectSchema), z.lazy(() => EmployerQuestionWhereInputObjectSchema)]).optional()
}).strict();
export const AnswerWhereInputObjectSchema: z.ZodType<Prisma.AnswerWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerWhereInput>;
export const AnswerWhereInputObjectZodSchema = makeSchema();
