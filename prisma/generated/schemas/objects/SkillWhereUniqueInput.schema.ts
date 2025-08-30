import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.number().int()
}).strict();
export const SkillWhereUniqueInputObjectSchema: z.ZodType<Prisma.SkillWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillWhereUniqueInput>;
export const SkillWhereUniqueInputObjectZodSchema = makeSchema();
