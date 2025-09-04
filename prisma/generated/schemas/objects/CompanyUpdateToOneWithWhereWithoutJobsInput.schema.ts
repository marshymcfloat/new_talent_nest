import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema';
import { CompanyUpdateWithoutJobsInputObjectSchema } from './CompanyUpdateWithoutJobsInput.schema';
import { CompanyUncheckedUpdateWithoutJobsInputObjectSchema } from './CompanyUncheckedUpdateWithoutJobsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompanyUpdateWithoutJobsInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutJobsInputObjectSchema)])
}).strict();
export const CompanyUpdateToOneWithWhereWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutJobsInput>;
export const CompanyUpdateToOneWithWhereWithoutJobsInputObjectZodSchema = makeSchema();
