import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema';
import { EducationCreateWithoutUserInputObjectSchema } from './EducationCreateWithoutUserInput.schema';
import { EducationUncheckedCreateWithoutUserInputObjectSchema } from './EducationUncheckedCreateWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => EducationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EducationCreateWithoutUserInputObjectSchema), z.lazy(() => EducationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const EducationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.EducationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationCreateOrConnectWithoutUserInput>;
export const EducationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
