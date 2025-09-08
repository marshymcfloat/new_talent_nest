import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const ResumeCreateManyUserInputObjectSchema: z.ZodType<Prisma.ResumeCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateManyUserInput>;
export const ResumeCreateManyUserInputObjectZodSchema = makeSchema();
