import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubCreateWithoutMembersInputObjectSchema as RoleInClubCreateWithoutMembersInputObjectSchema } from './RoleInClubCreateWithoutMembersInput.schema';
import { RoleInClubUncheckedCreateWithoutMembersInputObjectSchema as RoleInClubUncheckedCreateWithoutMembersInputObjectSchema } from './RoleInClubUncheckedCreateWithoutMembersInput.schema';
import { RoleInClubCreateOrConnectWithoutMembersInputObjectSchema as RoleInClubCreateOrConnectWithoutMembersInputObjectSchema } from './RoleInClubCreateOrConnectWithoutMembersInput.schema';
import { RoleInClubUpsertWithoutMembersInputObjectSchema as RoleInClubUpsertWithoutMembersInputObjectSchema } from './RoleInClubUpsertWithoutMembersInput.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './RoleInClubWhereUniqueInput.schema';
import { RoleInClubUpdateToOneWithWhereWithoutMembersInputObjectSchema as RoleInClubUpdateToOneWithWhereWithoutMembersInputObjectSchema } from './RoleInClubUpdateToOneWithWhereWithoutMembersInput.schema';
import { RoleInClubUpdateWithoutMembersInputObjectSchema as RoleInClubUpdateWithoutMembersInputObjectSchema } from './RoleInClubUpdateWithoutMembersInput.schema';
import { RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema as RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema } from './RoleInClubUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoleInClubCreateWithoutMembersInputObjectSchema), z.lazy(() => RoleInClubUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoleInClubCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => RoleInClubUpsertWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => RoleInClubWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoleInClubUpdateToOneWithWhereWithoutMembersInputObjectSchema), z.lazy(() => RoleInClubUpdateWithoutMembersInputObjectSchema), z.lazy(() => RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema)]).optional()
}).strict();
export const RoleInClubUpdateOneRequiredWithoutMembersNestedInputObjectSchema: z.ZodType<Prisma.RoleInClubUpdateOneRequiredWithoutMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUpdateOneRequiredWithoutMembersNestedInput>;
export const RoleInClubUpdateOneRequiredWithoutMembersNestedInputObjectZodSchema = makeSchema();
