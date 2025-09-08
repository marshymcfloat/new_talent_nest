import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionWhereInputObjectSchema } from './EmployerQuestionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EmployerQuestionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => EmployerQuestionWhereInputObjectSchema).optional()
}).strict();
export const EmployerQuestionScalarRelationFilterObjectSchema: z.ZodType<Prisma.EmployerQuestionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionScalarRelationFilter>;
export const EmployerQuestionScalarRelationFilterObjectZodSchema = makeSchema();
