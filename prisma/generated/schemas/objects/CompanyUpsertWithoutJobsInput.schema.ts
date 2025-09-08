import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyUpdateWithoutJobsInputObjectSchema } from './CompanyUpdateWithoutJobsInput.schema';
import { CompanyUncheckedUpdateWithoutJobsInputObjectSchema } from './CompanyUncheckedUpdateWithoutJobsInput.schema';
import { CompanyCreateWithoutJobsInputObjectSchema } from './CompanyCreateWithoutJobsInput.schema';
import { CompanyUncheckedCreateWithoutJobsInputObjectSchema } from './CompanyUncheckedCreateWithoutJobsInput.schema';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompanyUpdateWithoutJobsInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutJobsInputObjectSchema)]),
  create: z.union([z.lazy(() => CompanyCreateWithoutJobsInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutJobsInputObjectSchema)]),
  where: z.lazy(() => CompanyWhereInputObjectSchema).optional()
}).strict();
export const CompanyUpsertWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyUpsertWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpsertWithoutJobsInput>;
export const CompanyUpsertWithoutJobsInputObjectZodSchema = makeSchema();
