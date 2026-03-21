import * as z from 'zod';

export const eventStatusSchema = z.enum(['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED'])

export type eventStatus = z.infer<typeof eventStatusSchema>;