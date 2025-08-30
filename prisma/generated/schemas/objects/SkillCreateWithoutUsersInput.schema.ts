import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  name: z.string()
}).strict();
export const SkillCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.SkillCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillCreateWithoutUsersInput>;
export const SkillCreateWithoutUsersInputObjectZodSchema = makeSchema();
