import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CompanyUpdateverifiedDomainsInputObjectSchema } from './CompanyUpdateverifiedDomainsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { JobUpdateManyWithoutCompanyNestedInputObjectSchema } from './JobUpdateManyWithoutCompanyNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  websiteUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  logoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  verifiedDomains: z.union([z.lazy(() => CompanyUpdateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobs: z.lazy(() => JobUpdateManyWithoutCompanyNestedInputObjectSchema).optional()
}).strict();
export const CompanyUpdateWithoutMembersInputObjectSchema: z.ZodType<Prisma.CompanyUpdateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateWithoutMembersInput>;
export const CompanyUpdateWithoutMembersInputObjectZodSchema = makeSchema();
