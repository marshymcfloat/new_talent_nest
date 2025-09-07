import { z } from 'zod';

export const JobStatusSchema = z.enum(['ACTIVE', 'PAUSED', 'CLOSED'])