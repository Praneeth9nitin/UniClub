import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubCreateWithoutMembersInputObjectSchema as RoleInClubCreateWithoutMembersInputObjectSchema } from './RoleInClubCreateWithoutMembersInput.schema';
import { RoleInClubUncheckedCreateWithoutMembersInputObjectSchema as RoleInClubUncheckedCreateWithoutMembersInputObjectSchema } from './RoleInClubUncheckedCreateWithoutMembersInput.schema';
import { RoleInClubCreateOrConnectWithoutMembersInputObjectSchema as RoleInClubCreateOrConnectWithoutMembersInputObjectSchema } from './RoleInClubCreateOrConnectWithoutMembersInput.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './RoleInClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoleInClubCreateWithoutMembersInputObjectSchema), z.lazy(() => RoleInClubUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoleInClubCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => RoleInClubWhereUniqueInputObjectSchema).optional()
}).strict();
export const RoleInClubCreateNestedOneWithoutMembersInputObjectSchema: z.ZodType<Prisma.RoleInClubCreateNestedOneWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateNestedOneWithoutMembersInput>;
export const RoleInClubCreateNestedOneWithoutMembersInputObjectZodSchema = makeSchema();
