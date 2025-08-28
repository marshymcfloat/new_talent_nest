import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string(),
  title: z.string()
}).strict();
export const ResumeWhereUniqueInputObjectSchema: z.ZodType<Prisma.ResumeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeWhereUniqueInput>;
export const ResumeWhereUniqueInputObjectZodSchema = makeSchema();
