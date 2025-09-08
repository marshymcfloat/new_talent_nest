import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema: z.ZodType<Prisma.ResumeUncheckedCreateWithoutJobApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUncheckedCreateWithoutJobApplicationsInput>;
export const ResumeUncheckedCreateWithoutJobApplicationsInputObjectZodSchema = makeSchema();
