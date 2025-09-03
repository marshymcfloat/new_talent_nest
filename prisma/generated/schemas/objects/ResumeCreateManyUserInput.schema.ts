import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().nullish()
}).strict();
export const ResumeCreateManyUserInputObjectSchema: z.ZodType<Prisma.ResumeCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateManyUserInput>;
export const ResumeCreateManyUserInputObjectZodSchema = makeSchema();
