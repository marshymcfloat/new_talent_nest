import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CompanyUpdateverifiedDomainsInputObjectSchema } from './CompanyUpdateverifiedDomainsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { JobUpdateManyWithoutCompanyNestedInputObjectSchema } from './JobUpdateManyWithoutCompanyNestedInput.schema';
import { CompanyMemberUpdateManyWithoutCompanyNestedInputObjectSchema } from './CompanyMemberUpdateManyWithoutCompanyNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  websiteUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  logoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  verifiedDomains: z.union([z.lazy(() => CompanyUpdateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobs: z.lazy(() => JobUpdateManyWithoutCompanyNestedInputObjectSchema).optional(),
  members: z.lazy(() => CompanyMemberUpdateManyWithoutCompanyNestedInputObjectSchema).optional()
}).strict();
export const CompanyUpdateWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.CompanyUpdateWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateWithoutQuestionsInput>;
export const CompanyUpdateWithoutQuestionsInputObjectZodSchema = makeSchema();
