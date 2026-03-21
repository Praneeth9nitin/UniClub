import * as z from 'zod';
// prettier-ignore
export const CollegeAdminInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string().optional().nullable(),
    collegeId: z.string(),
    college: z.unknown()
}).strict();

export type CollegeAdminInputType = z.infer<typeof CollegeAdminInputSchema>;
