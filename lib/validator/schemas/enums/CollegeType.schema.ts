import * as z from 'zod';

export const CollegeTypeSchema = z.enum(['GOVERNMENT', 'PRIVATE', 'AUTONOMOUS', 'DEEMED'])

export type CollegeType = z.infer<typeof CollegeTypeSchema>;