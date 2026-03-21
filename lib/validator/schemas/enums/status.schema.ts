import * as z from 'zod';

export const statusSchema = z.enum(['PENDING', 'ACCEPTED', 'REJECTED'])

export type status = z.infer<typeof statusSchema>;