import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ResumeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ResumeWhereInputObjectSchema).optional()
}).strict();
export const ResumeScalarRelationFilterObjectSchema: z.ZodType<Prisma.ResumeScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResumeScalarRelationFilter>;
export const ResumeScalarRelationFilterObjectZodSchema = makeSchema();
