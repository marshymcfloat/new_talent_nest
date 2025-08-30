import { z } from 'zod';
import { LicenceAndCertificateCreateManyInputObjectSchema } from './objects/LicenceAndCertificateCreateManyInput.schema';

export const LicenceAndCertificateCreateManySchema = z.object({ data: z.union([ LicenceAndCertificateCreateManyInputObjectSchema, z.array(LicenceAndCertificateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })