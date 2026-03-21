import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './RoleInClubWhereInput.schema';
import { RoleInClubUpdateWithoutMembersInputObjectSchema as RoleInClubUpdateWithoutMembersInputObjectSchema } from './RoleInClubUpdateWithoutMembersInput.schema';
import { RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema as RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema } from './RoleInClubUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoleInClubWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoleInClubUpdateWithoutMembersInputObjectSchema), z.lazy(() => RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema)])
}).strict();
export const RoleInClubUpdateToOneWithWhereWithoutMembersInputObjectSchema: z.ZodType<Prisma.RoleInClubUpdateToOneWithWhereWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUpdateToOneWithWhereWithoutMembersInput>;
export const RoleInClubUpdateToOneWithWhereWithoutMembersInputObjectZodSchema = makeSchema();
