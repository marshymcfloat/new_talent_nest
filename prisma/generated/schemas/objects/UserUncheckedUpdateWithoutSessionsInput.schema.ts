import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { JobApplicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './JobApplicationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).nullish(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  username: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  JobApplication: z.lazy(() => JobApplicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = makeSchema();
export const UserUncheckedUpdateWithoutSessionsInputObjectZodSchema = makeSchema();
