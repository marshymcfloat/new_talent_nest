import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionWhereInputObjectSchema } from './CompanyQuestionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CompanyQuestionWhereInputObjectSchema).optional(),
  some: z.lazy(() => CompanyQuestionWhereInputObjectSchema).optional(),
  none: z.lazy(() => CompanyQuestionWhereInputObjectSchema).optional()
}).strict();
export const CompanyQuestionListRelationFilterObjectSchema: z.ZodType<Prisma.CompanyQuestionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionListRelationFilter>;
export const CompanyQuestionListRelationFilterObjectZodSchema = makeSchema();
