import { z } from 'zod';
import { LicenceAndCertificateSelectObjectSchema } from './objects/LicenceAndCertificateSelect.schema';
import { LicenceAndCertificateCreateManyInputObjectSchema } from './objects/LicenceAndCertificateCreateManyInput.schema';

export const LicenceAndCertificateCreateManyAndReturnSchema = z.object({ select: LicenceAndCertificateSelectObjectSchema.optional(), data: z.union([ LicenceAndCertificateCreateManyInputObjectSchema, z.array(LicenceAndCertificateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()