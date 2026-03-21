import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './RoleInClubWhereUniqueInput.schema';
import { RoleInClubUpdateWithoutClubInputObjectSchema as RoleInClubUpdateWithoutClubInputObjectSchema } from './RoleInClubUpdateWithoutClubInput.schema';
import { RoleInClubUncheckedUpdateWithoutClubInputObjectSchema as RoleInClubUncheckedUpdateWithoutClubInputObjectSchema } from './RoleInClubUncheckedUpdateWithoutClubInput.schema';
import { RoleInClubCreateWithoutClubInputObjectSchema as RoleInClubCreateWithoutClubInputObjectSchema } from './RoleInClubCreateWithoutClubInput.schema';
import { RoleInClubUncheckedCreateWithoutClubInputObjectSchema as RoleInClubUncheckedCreateWithoutClubInputObjectSchema } from './RoleInClubUncheckedCreateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoleInClubWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RoleInClubUpdateWithoutClubInputObjectSchema), z.lazy(() => RoleInClubUncheckedUpdateWithoutClubInputObjectSchema)]),
  create: z.union([z.lazy(() => RoleInClubCreateWithoutClubInputObjectSchema), z.lazy(() => RoleInClubUncheckedCreateWithoutClubInputObjectSchema)])
}).strict();
export const RoleInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema: z.ZodType<Prisma.RoleInClubUpsertWithWhereUniqueWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUpsertWithWhereUniqueWithoutClubInput>;
export const RoleInClubUpsertWithWhereUniqueWithoutClubInputObjectZodSchema = makeSchema();
