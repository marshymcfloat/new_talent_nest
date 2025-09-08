import { z } from 'zod';

export const LicenceAndCertificateScalarFieldEnumSchema = z.enum(['id', 'name', 'organization', 'dateIssed', 'expiryDate', 'description', 'createdAt', 'updatedAt'])

export type LicenceAndCertificateScalarFieldEnum = z.infer<typeof LicenceAndCertificateScalarFieldEnumSchema>;