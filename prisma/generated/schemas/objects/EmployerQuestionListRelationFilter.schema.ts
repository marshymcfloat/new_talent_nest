import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionWhereInputObjectSchema } from './EmployerQuestionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => EmployerQuestionWhereInputObjectSchema).optional(),
  some: z.lazy(() => EmployerQuestionWhereInputObjectSchema).optional(),
  none: z.lazy(() => EmployerQuestionWhereInputObjectSchema).optional()
}).strict();
export const EmployerQuestionListRelationFilterObjectSchema: z.ZodType<Prisma.EmployerQuestionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionListRelationFilter>;
export const EmployerQuestionListRelationFilterObjectZodSchema = makeSchema();
