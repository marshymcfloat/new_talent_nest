import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  userId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().nullish()
}).strict();
export const ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema: z.ZodType<Prisma.ResumeUncheckedCreateWithoutJobApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUncheckedCreateWithoutJobApplicationsInput>;
export const ResumeUncheckedCreateWithoutJobApplicationsInputObjectZodSchema = makeSchema();
