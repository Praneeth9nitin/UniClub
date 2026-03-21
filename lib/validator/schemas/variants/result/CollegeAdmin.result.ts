import * as z from 'zod';
// prettier-ignore
export const CollegeAdminResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string().nullable(),
    collegeId: z.string(),
    college: z.unknown()
}).strict();

export type CollegeAdminResultType = z.infer<typeof CollegeAdminResultSchema>;
