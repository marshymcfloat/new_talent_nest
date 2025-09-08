import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => SkillScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SkillScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SkillScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SkillScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SkillScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const SkillScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SkillScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.SkillScalarWhereWithAggregatesInput>;
export const SkillScalarWhereWithAggregatesInputObjectZodSchema = schema;
