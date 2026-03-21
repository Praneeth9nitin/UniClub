import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  clubId: z.string()
}).strict();
export const RoleInClubUncheckedCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.RoleInClubUncheckedCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUncheckedCreateWithoutMembersInput>;
export const RoleInClubUncheckedCreateWithoutMembersInputObjectZodSchema = makeSchema();
