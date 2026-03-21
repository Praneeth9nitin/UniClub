import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './RoleInClubWhereUniqueInput.schema';
import { RoleInClubCreateWithoutClubInputObjectSchema as RoleInClubCreateWithoutClubInputObjectSchema } from './RoleInClubCreateWithoutClubInput.schema';
import { RoleInClubUncheckedCreateWithoutClubInputObjectSchema as RoleInClubUncheckedCreateWithoutClubInputObjectSchema } from './RoleInClubUncheckedCreateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoleInClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoleInClubCreateWithoutClubInputObjectSchema), z.lazy(() => RoleInClubUncheckedCreateWithoutClubInputObjectSchema)])
}).strict();
export const RoleInClubCreateOrConnectWithoutClubInputObjectSchema: z.ZodType<Prisma.RoleInClubCreateOrConnectWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateOrConnectWithoutClubInput>;
export const RoleInClubCreateOrConnectWithoutClubInputObjectZodSchema = makeSchema();
