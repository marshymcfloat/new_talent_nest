import { z } from 'zod';
import { CompanyMemberSelectObjectSchema } from './objects/CompanyMemberSelect.schema';
import { CompanyMemberIncludeObjectSchema } from './objects/CompanyMemberInclude.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './objects/CompanyMemberWhereUniqueInput.schema';

export const CompanyMemberFindUniqueSchema = z.object({ select: CompanyMemberSelectObjectSchema.optional(), include: CompanyMemberIncludeObjectSchema.optional(), where: CompanyMemberWhereUniqueInputObjectSchema })