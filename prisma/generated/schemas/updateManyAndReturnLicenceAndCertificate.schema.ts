import { z } from 'zod';
import { LicenceAndCertificateSelectObjectSchema } from './objects/LicenceAndCertificateSelect.schema';
import { LicenceAndCertificateUpdateManyMutationInputObjectSchema } from './objects/LicenceAndCertificateUpdateManyMutationInput.schema';
import { LicenceAndCertificateWhereInputObjectSchema } from './objects/LicenceAndCertificateWhereInput.schema';

export const LicenceAndCertificateUpdateManyAndReturnSchema = z.object({ select: LicenceAndCertificateSelectObjectSchema.optional(), data: LicenceAndCertificateUpdateManyMutationInputObjectSchema, where: LicenceAndCertificateWhereInputObjectSchema.optional()  }).strict()