import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyCreateWithoutJobsInputObjectSchema } from './CompanyCreateWithoutJobsInput.schema';
import { CompanyUncheckedCreateWithoutJobsInputObjectSchema } from './CompanyUncheckedCreateWithoutJobsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompanyCreateWithoutJobsInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutJobsInputObjectSchema)])
}).strict();
export const CompanyCreateOrConnectWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateOrConnectWithoutJobsInput>;
export const CompanyCreateOrConnectWithoutJobsInputObjectZodSchema = makeSchema();
