import * as z from 'zod';

export const VerificationStatusSchema = z.enum(['PENDING', 'UNDER_REVIEW', 'VERIFIED', 'REJECTED'])

export type VerificationStatus = z.infer<typeof VerificationStatusSchema>;