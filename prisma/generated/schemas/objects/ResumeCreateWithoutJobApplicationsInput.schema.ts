import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutResumesInputObjectSchema } from './UserCreateNestedOneWithoutResumesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  User: z.lazy(() => UserCreateNestedOneWithoutResumesInputObjectSchema)
}).strict();
export const ResumeCreateWithoutJobApplicationsInputObjectSchema: z.ZodType<Prisma.ResumeCreateWithoutJobApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateWithoutJobApplicationsInput>;
export const ResumeCreateWithoutJobApplicationsInputObjectZodSchema = makeSchema();
