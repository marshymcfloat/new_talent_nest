import { z } from 'zod';
import { CompanyMemberSelectObjectSchema } from './objects/CompanyMemberSelect.schema';
import { CompanyMemberUpdateManyMutationInputObjectSchema } from './objects/CompanyMemberUpdateManyMutationInput.schema';
import { CompanyMemberWhereInputObjectSchema } from './objects/CompanyMemberWhereInput.schema';

export const CompanyMemberUpdateManyAndReturnSchema = z.object({ select: CompanyMemberSelectObjectSchema.optional(), data: CompanyMemberUpdateManyMutationInputObjectSchema, where: CompanyMemberWhereInputObjectSchema.optional()  }).strict()