import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationScalarWhereInputObjectSchema } from './EducationScalarWhereInput.schema';
import { EducationUpdateManyMutationInputObjectSchema } from './EducationUpdateManyMutationInput.schema';
import { EducationUncheckedUpdateManyWithoutUserInputObjectSchema } from './EducationUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EducationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EducationUpdateManyMutationInputObjectSchema), z.lazy(() => EducationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const EducationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.EducationUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationUpdateManyWithWhereWithoutUserInput>;
export const EducationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
