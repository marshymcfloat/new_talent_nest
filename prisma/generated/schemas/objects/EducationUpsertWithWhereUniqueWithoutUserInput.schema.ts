import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema';
import { EducationUpdateWithoutUserInputObjectSchema } from './EducationUpdateWithoutUserInput.schema';
import { EducationUncheckedUpdateWithoutUserInputObjectSchema } from './EducationUncheckedUpdateWithoutUserInput.schema';
import { EducationCreateWithoutUserInputObjectSchema } from './EducationCreateWithoutUserInput.schema';
import { EducationUncheckedCreateWithoutUserInputObjectSchema } from './EducationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EducationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EducationUpdateWithoutUserInputObjectSchema), z.lazy(() => EducationUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => EducationCreateWithoutUserInputObjectSchema), z.lazy(() => EducationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const EducationUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.EducationUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationUpsertWithWhereUniqueWithoutUserInput>;
export const EducationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
