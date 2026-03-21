import * as z from 'zod';
// prettier-ignore
export const RoleInClubModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    clubId: z.string(),
    club: z.unknown(),
    members: z.array(z.unknown())
}).strict();

export type RoleInClubPureType = z.infer<typeof RoleInClubModelSchema>;
