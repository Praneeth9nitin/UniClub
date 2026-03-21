import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubUpdateWithoutClubAdminInputObjectSchema as ClubUpdateWithoutClubAdminInputObjectSchema } from './ClubUpdateWithoutClubAdminInput.schema';
import { ClubUncheckedUpdateWithoutClubAdminInputObjectSchema as ClubUncheckedUpdateWithoutClubAdminInputObjectSchema } from './ClubUncheckedUpdateWithoutClubAdminInput.schema';
import { ClubCreateWithoutClubAdminInputObjectSchema as ClubCreateWithoutClubAdminInputObjectSchema } from './ClubCreateWithoutClubAdminInput.schema';
import { ClubUncheckedCreateWithoutClubAdminInputObjectSchema as ClubUncheckedCreateWithoutClubAdminInputObjectSchema } from './ClubUncheckedCreateWithoutClubAdminInput.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClubUpdateWithoutClubAdminInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutClubAdminInputObjectSchema)]),
  create: z.union([z.lazy(() => ClubCreateWithoutClubAdminInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutClubAdminInputObjectSchema)]),
  where: z.lazy(() => ClubWhereInputObjectSchema).optional()
}).strict();
export const ClubUpsertWithoutClubAdminInputObjectSchema: z.ZodType<Prisma.ClubUpsertWithoutClubAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpsertWithoutClubAdminInput>;
export const ClubUpsertWithoutClubAdminInputObjectZodSchema = makeSchema();
