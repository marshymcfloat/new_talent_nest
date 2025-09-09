import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateWithoutQuestionsInputObjectSchema } from './CompanyCreateWithoutQuestionsInput.schema';
import { CompanyUncheckedCreateWithoutQuestionsInputObjectSchema } from './CompanyUncheckedCreateWithoutQuestionsInput.schema';
import { CompanyCreateOrConnectWithoutQuestionsInputObjectSchema } from './CompanyCreateOrConnectWithoutQuestionsInput.schema';
import { CompanyUpsertWithoutQuestionsInputObjectSchema } from './CompanyUpsertWithoutQuestionsInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateToOneWithWhereWithoutQuestionsInputObjectSchema } from './CompanyUpdateToOneWithWhereWithoutQuestionsInput.schema';
import { CompanyUpdateWithoutQuestionsInputObjectSchema } from './CompanyUpdateWithoutQuestionsInput.schema';
import { CompanyUncheckedUpdateWithoutQuestionsInputObjectSchema } from './CompanyUncheckedUpdateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyCreateWithoutQuestionsInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutQuestionsInputObjectSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompanyUpdateToOneWithWhereWithoutQuestionsInputObjectSchema), z.lazy(() => CompanyUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutQuestionsInputObjectSchema)]).optional()
}).strict();
export const CompanyUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutQuestionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutQuestionsNestedInput>;
export const CompanyUpdateOneRequiredWithoutQuestionsNestedInputObjectZodSchema = makeSchema();
