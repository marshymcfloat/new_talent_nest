import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutResumesInputObjectSchema } from './UserCreateNestedOneWithoutResumesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  Title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutResumesInputObjectSchema)
}).strict();
export const ResumeCreateWithoutJobApplicationsInputObjectSchema: z.ZodType<Prisma.ResumeCreateWithoutJobApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateWithoutJobApplicationsInput>;
export const ResumeCreateWithoutJobApplicationsInputObjectZodSchema = makeSchema();
