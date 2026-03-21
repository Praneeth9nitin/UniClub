import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubUpdateWithoutMembersInputObjectSchema as RoleInClubUpdateWithoutMembersInputObjectSchema } from './RoleInClubUpdateWithoutMembersInput.schema';
import { RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema as RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema } from './RoleInClubUncheckedUpdateWithoutMembersInput.schema';
import { RoleInClubCreateWithoutMembersInputObjectSchema as RoleInClubCreateWithoutMembersInputObjectSchema } from './RoleInClubCreateWithoutMembersInput.schema';
import { RoleInClubUncheckedCreateWithoutMembersInputObjectSchema as RoleInClubUncheckedCreateWithoutMembersInputObjectSchema } from './RoleInClubUncheckedCreateWithoutMembersInput.schema';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './RoleInClubWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RoleInClubUpdateWithoutMembersInputObjectSchema), z.lazy(() => RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => RoleInClubCreateWithoutMembersInputObjectSchema), z.lazy(() => RoleInClubUncheckedCreateWithoutMembersInputObjectSchema)]),
  where: z.lazy(() => RoleInClubWhereInputObjectSchema).optional()
}).strict();
export const RoleInClubUpsertWithoutMembersInputObjectSchema: z.ZodType<Prisma.RoleInClubUpsertWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUpsertWithoutMembersInput>;
export const RoleInClubUpsertWithoutMembersInputObjectZodSchema = makeSchema();
