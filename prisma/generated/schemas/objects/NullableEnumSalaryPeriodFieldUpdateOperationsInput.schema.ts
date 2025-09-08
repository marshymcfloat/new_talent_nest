import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SalaryPeriodSchema } from '../enums/SalaryPeriod.schema'

const makeSchema = () => z.object({
  set: SalaryPeriodSchema.optional()
}).strict();
export const NullableEnumSalaryPeriodFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumSalaryPeriodFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumSalaryPeriodFieldUpdateOperationsInput>;
export const NullableEnumSalaryPeriodFieldUpdateOperationsInputObjectZodSchema = makeSchema();
