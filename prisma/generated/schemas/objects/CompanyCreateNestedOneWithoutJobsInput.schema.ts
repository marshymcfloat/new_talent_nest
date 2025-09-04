import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateWithoutJobsInputObjectSchema } from './CompanyCreateWithoutJobsInput.schema';
import { CompanyUncheckedCreateWithoutJobsInputObjectSchema } from './CompanyUncheckedCreateWithoutJobsInput.schema';
import { CompanyCreateOrConnectWithoutJobsInputObjectSchema } from './CompanyCreateOrConnectWithoutJobsInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => CompanyCreateWithoutJobsInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutJobsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutJobsInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompanyCreateNestedOneWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateNestedOneWithoutJobsInput>;
export const CompanyCreateNestedOneWithoutJobsInputObjectZodSchema = makeSchema();
