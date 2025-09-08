import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillWhereInputObjectSchema } from './SkillWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SkillWhereInputObjectSchema).optional(),
  some: z.lazy(() => SkillWhereInputObjectSchema).optional(),
  none: z.lazy(() => SkillWhereInputObjectSchema).optional()
}).strict();
export const SkillListRelationFilterObjectSchema: z.ZodType<Prisma.SkillListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SkillListRelationFilter>;
export const SkillListRelationFilterObjectZodSchema = makeSchema();
