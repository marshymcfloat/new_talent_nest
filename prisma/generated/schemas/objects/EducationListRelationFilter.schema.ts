import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationWhereInputObjectSchema } from './EducationWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  every: z.lazy(() => EducationWhereInputObjectSchema).optional(),
  some: z.lazy(() => EducationWhereInputObjectSchema).optional(),
  none: z.lazy(() => EducationWhereInputObjectSchema).optional()
}).strict();
export const EducationListRelationFilterObjectSchema: z.ZodType<Prisma.EducationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EducationListRelationFilter>;
export const EducationListRelationFilterObjectZodSchema = makeSchema();
