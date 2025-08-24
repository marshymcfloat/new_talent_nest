import { z } from 'zod';

export const JobTypeSchema = z.enum(['FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP'])