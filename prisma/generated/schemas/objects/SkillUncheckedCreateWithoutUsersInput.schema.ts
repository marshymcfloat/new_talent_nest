import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();
export const SkillUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.SkillUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUncheckedCreateWithoutUsersInput>;
export const SkillUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
