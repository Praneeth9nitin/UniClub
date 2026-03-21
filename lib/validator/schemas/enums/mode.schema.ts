import * as z from 'zod';

export const modeSchema = z.enum(['ONLINE', 'OFFLINE', 'HYBRID'])

export type mode = z.infer<typeof modeSchema>;