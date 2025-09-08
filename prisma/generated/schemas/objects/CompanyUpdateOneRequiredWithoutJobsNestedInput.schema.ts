import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateWithoutJobsInputObjectSchema } from './CompanyCreateWithoutJobsInput.schema';
import { CompanyUncheckedCreateWithoutJobsInputObjectSchema } from './CompanyUncheckedCreateWithoutJobsInput.schema';
import { CompanyCreateOrConnectWithoutJobsInputObjectSchema } from './CompanyCreateOrConnectWithoutJobsInput.schema';
import { CompanyUpsertWithoutJobsInputObjectSchema } from './CompanyUpsertWithoutJobsInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateToOneWithWhereWithoutJobsInputObjectSchema } from './CompanyUpdateToOneWithWhereWithoutJobsInput.schema';
import { CompanyUpdateWithoutJobsInputObjectSchema } from './CompanyUpdateWithoutJobsInput.schema';
import { CompanyUncheckedUpdateWithoutJobsInputObjectSchema } from './CompanyUncheckedUpdateWithoutJobsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyCreateWithoutJobsInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutJobsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutJobsInputObjectSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutJobsInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompanyUpdateToOneWithWhereWithoutJobsInputObjectSchema), z.lazy(() => CompanyUpdateWithoutJobsInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutJobsInputObjectSchema)]).optional()
}).strict();
export const CompanyUpdateOneRequiredWithoutJobsNestedInputObjectSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutJobsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutJobsNestedInput>;
export const CompanyUpdateOneRequiredWithoutJobsNestedInputObjectZodSchema = makeSchema();
