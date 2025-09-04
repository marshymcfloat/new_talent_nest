import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberScalarWhereInputObjectSchema } from './CompanyMemberScalarWhereInput.schema';
import { CompanyMemberUpdateManyMutationInputObjectSchema } from './CompanyMemberUpdateManyMutationInput.schema';
import { CompanyMemberUncheckedUpdateManyWithoutUserInputObjectSchema } from './CompanyMemberUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CompanyMemberUpdateManyMutationInputObjectSchema), z.lazy(() => CompanyMemberUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CompanyMemberUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpdateManyWithWhereWithoutUserInput>;
export const CompanyMemberUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
