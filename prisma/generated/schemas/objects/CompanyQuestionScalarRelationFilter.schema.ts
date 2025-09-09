import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionWhereInputObjectSchema } from './CompanyQuestionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CompanyQuestionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CompanyQuestionWhereInputObjectSchema).optional()
}).strict();
export const CompanyQuestionScalarRelationFilterObjectSchema: z.ZodType<Prisma.CompanyQuestionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionScalarRelationFilter>;
export const CompanyQuestionScalarRelationFilterObjectZodSchema = makeSchema();
