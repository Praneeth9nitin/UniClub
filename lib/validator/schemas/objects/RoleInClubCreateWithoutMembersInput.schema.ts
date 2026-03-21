import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateNestedOneWithoutRoleInputObjectSchema as ClubCreateNestedOneWithoutRoleInputObjectSchema } from './ClubCreateNestedOneWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  club: z.lazy(() => ClubCreateNestedOneWithoutRoleInputObjectSchema)
}).strict();
export const RoleInClubCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.RoleInClubCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateWithoutMembersInput>;
export const RoleInClubCreateWithoutMembersInputObjectZodSchema = makeSchema();
