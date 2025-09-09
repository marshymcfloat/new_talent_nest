import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JobApplicationScalarRelationFilterObjectSchema } from './JobApplicationScalarRelationFilter.schema';
import { JobApplicationWhereInputObjectSchema } from './JobApplicationWhereInput.schema';
import { CompanyQuestionScalarRelationFilterObjectSchema } from './CompanyQuestionScalarRelationFilter.schema';
import { CompanyQuestionWhereInputObjectSchema } from './CompanyQuestionWhereInput.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => AnswerWhereInputObjectSchema), z.lazy(() => AnswerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnswerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnswerWhereInputObjectSchema), z.lazy(() => AnswerWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobApplicationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  questionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  JobApplication: z.union([z.lazy(() => JobApplicationScalarRelationFilterObjectSchema), z.lazy(() => JobApplicationWhereInputObjectSchema)]).optional(),
  Question: z.union([z.lazy(() => CompanyQuestionScalarRelationFilterObjectSchema), z.lazy(() => CompanyQuestionWhereInputObjectSchema)]).optional()
}).strict();
export const AnswerWhereInputObjectSchema: z.ZodType<Prisma.AnswerWhereInput> = schema as unknown as z.ZodType<Prisma.AnswerWhereInput>;
export const AnswerWhereInputObjectZodSchema = schema;
