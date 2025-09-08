import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();
export const SkillCreateManyInputObjectSchema: z.ZodType<Prisma.SkillCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillCreateManyInput>;
export const SkillCreateManyInputObjectZodSchema = makeSchema();
