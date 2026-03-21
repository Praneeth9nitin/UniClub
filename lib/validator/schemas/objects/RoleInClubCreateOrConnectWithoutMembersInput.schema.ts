import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './RoleInClubWhereUniqueInput.schema';
import { RoleInClubCreateWithoutMembersInputObjectSchema as RoleInClubCreateWithoutMembersInputObjectSchema } from './RoleInClubCreateWithoutMembersInput.schema';
import { RoleInClubUncheckedCreateWithoutMembersInputObjectSchema as RoleInClubUncheckedCreateWithoutMembersInputObjectSchema } from './RoleInClubUncheckedCreateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoleInClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoleInClubCreateWithoutMembersInputObjectSchema), z.lazy(() => RoleInClubUncheckedCreateWithoutMembersInputObjectSchema)])
}).strict();
export const RoleInClubCreateOrConnectWithoutMembersInputObjectSchema: z.ZodType<Prisma.RoleInClubCreateOrConnectWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateOrConnectWithoutMembersInput>;
export const RoleInClubCreateOrConnectWithoutMembersInputObjectZodSchema = makeSchema();
