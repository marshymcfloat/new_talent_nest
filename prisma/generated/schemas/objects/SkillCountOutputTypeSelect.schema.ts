import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  users: z.boolean().optional()
}).strict();
export const SkillCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SkillCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SkillCountOutputTypeSelect>;
export const SkillCountOutputTypeSelectObjectZodSchema = makeSchema();
