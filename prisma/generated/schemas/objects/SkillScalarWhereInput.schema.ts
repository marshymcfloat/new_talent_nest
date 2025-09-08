import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => SkillScalarWhereInputObjectSchema), z.lazy(() => SkillScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SkillScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SkillScalarWhereInputObjectSchema), z.lazy(() => SkillScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const SkillScalarWhereInputObjectSchema: z.ZodType<Prisma.SkillScalarWhereInput> = schema as unknown as z.ZodType<Prisma.SkillScalarWhereInput>;
export const SkillScalarWhereInputObjectZodSchema = schema;
