import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { EnumJobTypeFieldUpdateOperationsInputObjectSchema } from './EnumJobTypeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { SalaryPeriodSchema } from '../enums/SalaryPeriod.schema';
import { NullableEnumSalaryPeriodFieldUpdateOperationsInputObjectSchema } from './NullableEnumSalaryPeriodFieldUpdateOperationsInput.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { EnumJobClassFieldUpdateOperationsInputObjectSchema } from './EnumJobClassFieldUpdateOperationsInput.schema';
import { JobStatusSchema } from '../enums/JobStatus.schema';
import { EnumJobStatusFieldUpdateOperationsInputObjectSchema } from './EnumJobStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { JobUpdatetagsInputObjectSchema } from './JobUpdatetagsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EmployerQuestionUncheckedUpdateManyWithoutJobNestedInputObjectSchema } from './EmployerQuestionUncheckedUpdateManyWithoutJobNestedInput.schema';
import { JobApplicationUncheckedUpdateManyWithoutJobNestedInputObjectSchema } from './JobApplicationUncheckedUpdateManyWithoutJobNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  companyId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([JobTypeSchema, z.lazy(() => EnumJobTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  minSalary: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  maxSalary: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  currency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  payPeriod: z.union([SalaryPeriodSchema, z.lazy(() => NullableEnumSalaryPeriodFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  jobClass: z.union([JobClassSchema, z.lazy(() => EnumJobClassFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([JobStatusSchema, z.lazy(() => EnumJobStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  summary: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  qualifications: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  responsibilities: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  benefits: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tags: z.union([z.lazy(() => JobUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  employerQuestions: z.lazy(() => EmployerQuestionUncheckedUpdateManyWithoutJobNestedInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationUncheckedUpdateManyWithoutJobNestedInputObjectSchema).optional()
}).strict();
export const JobUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.JobUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUncheckedUpdateInput>;
export const JobUncheckedUpdateInputObjectZodSchema = makeSchema();
