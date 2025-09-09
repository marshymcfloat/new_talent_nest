import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CompanyUpdateverifiedDomainsInputObjectSchema } from './CompanyUpdateverifiedDomainsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { JobUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema } from './JobUncheckedUpdateManyWithoutCompanyNestedInput.schema';
import { CompanyMemberUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema } from './CompanyMemberUncheckedUpdateManyWithoutCompanyNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  websiteUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  logoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  verifiedDomains: z.union([z.lazy(() => CompanyUpdateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobs: z.lazy(() => JobUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema).optional(),
  members: z.lazy(() => CompanyMemberUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema).optional()
}).strict();
export const CompanyUncheckedUpdateWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUncheckedUpdateWithoutQuestionsInput>;
export const CompanyUncheckedUpdateWithoutQuestionsInputObjectZodSchema = makeSchema();
