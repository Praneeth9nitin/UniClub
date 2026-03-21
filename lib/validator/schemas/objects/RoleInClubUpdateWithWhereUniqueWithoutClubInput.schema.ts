import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './RoleInClubWhereUniqueInput.schema';
import { RoleInClubUpdateWithoutClubInputObjectSchema as RoleInClubUpdateWithoutClubInputObjectSchema } from './RoleInClubUpdateWithoutClubInput.schema';
import { RoleInClubUncheckedUpdateWithoutClubInputObjectSchema as RoleInClubUncheckedUpdateWithoutClubInputObjectSchema } from './RoleInClubUncheckedUpdateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoleInClubWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RoleInClubUpdateWithoutClubInputObjectSchema), z.lazy(() => RoleInClubUncheckedUpdateWithoutClubInputObjectSchema)])
}).strict();
export const RoleInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema: z.ZodType<Prisma.RoleInClubUpdateWithWhereUniqueWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUpdateWithWhereUniqueWithoutClubInput>;
export const RoleInClubUpdateWithWhereUniqueWithoutClubInputObjectZodSchema = makeSchema();
