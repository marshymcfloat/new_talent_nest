import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SkillUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.SkillUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUpdateManyMutationInput>;
export const SkillUpdateManyMutationInputObjectZodSchema = makeSchema();
