import * as z from 'zod';
// prettier-ignore
export const RoleInClubInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    clubId: z.string(),
    club: z.unknown(),
    members: z.array(z.unknown())
}).strict();

export type RoleInClubInputType = z.infer<typeof RoleInClubInputSchema>;
