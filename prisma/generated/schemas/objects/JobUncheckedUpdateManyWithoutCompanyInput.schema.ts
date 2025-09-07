import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { EnumJobTypeFieldUpdateOperationsInputObjectSchema } from './EnumJobTypeFieldUpdateOperationsInput.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { EnumJobClassFieldUpdateOperationsInputObjectSchema } from './EnumJobClassFieldUpdateOperationsInput.schema';
import { JobStatusSchema } from '../enums/JobStatus.schema';
import { EnumJobStatusFieldUpdateOperationsInputObjectSchema } from './EnumJobStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { JobUpdatetagsInputObjectSchema } from './JobUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([JobTypeSchema, z.lazy(() => EnumJobTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  salary: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobClass: z.union([JobClassSchema, z.lazy(() => EnumJobClassFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([JobStatusSchema, z.lazy(() => EnumJobStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  summary: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  qualifications: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  responsibilities: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  benefits: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  tags: z.union([z.lazy(() => JobUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const JobUncheckedUpdateManyWithoutCompanyInputObjectSchema: z.ZodType<Prisma.JobUncheckedUpdateManyWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUncheckedUpdateManyWithoutCompanyInput>;
export const JobUncheckedUpdateManyWithoutCompanyInputObjectZodSchema = makeSchema();
