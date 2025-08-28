import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  every: z.lazy(() => ResumeWhereInputObjectSchema).optional(),
  some: z.lazy(() => ResumeWhereInputObjectSchema).optional(),
  none: z.lazy(() => ResumeWhereInputObjectSchema).optional()
}).strict();
export const ResumeListRelationFilterObjectSchema: z.ZodType<Prisma.ResumeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResumeListRelationFilter>;
export const ResumeListRelationFilterObjectZodSchema = makeSchema();
