import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutClubAdminInputObjectSchema as ClubCreateWithoutClubAdminInputObjectSchema } from './ClubCreateWithoutClubAdminInput.schema';
import { ClubUncheckedCreateWithoutClubAdminInputObjectSchema as ClubUncheckedCreateWithoutClubAdminInputObjectSchema } from './ClubUncheckedCreateWithoutClubAdminInput.schema';
import { ClubCreateOrConnectWithoutClubAdminInputObjectSchema as ClubCreateOrConnectWithoutClubAdminInputObjectSchema } from './ClubCreateOrConnectWithoutClubAdminInput.schema';
import { ClubUpsertWithoutClubAdminInputObjectSchema as ClubUpsertWithoutClubAdminInputObjectSchema } from './ClubUpsertWithoutClubAdminInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateToOneWithWhereWithoutClubAdminInputObjectSchema as ClubUpdateToOneWithWhereWithoutClubAdminInputObjectSchema } from './ClubUpdateToOneWithWhereWithoutClubAdminInput.schema';
import { ClubUpdateWithoutClubAdminInputObjectSchema as ClubUpdateWithoutClubAdminInputObjectSchema } from './ClubUpdateWithoutClubAdminInput.schema';
import { ClubUncheckedUpdateWithoutClubAdminInputObjectSchema as ClubUncheckedUpdateWithoutClubAdminInputObjectSchema } from './ClubUncheckedUpdateWithoutClubAdminInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutClubAdminInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutClubAdminInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClubCreateOrConnectWithoutClubAdminInputObjectSchema).optional(),
  upsert: z.lazy(() => ClubUpsertWithoutClubAdminInputObjectSchema).optional(),
  connect: z.lazy(() => ClubWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClubUpdateToOneWithWhereWithoutClubAdminInputObjectSchema), z.lazy(() => ClubUpdateWithoutClubAdminInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutClubAdminInputObjectSchema)]).optional()
}).strict();
export const ClubUpdateOneRequiredWithoutClubAdminNestedInputObjectSchema: z.ZodType<Prisma.ClubUpdateOneRequiredWithoutClubAdminNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateOneRequiredWithoutClubAdminNestedInput>;
export const ClubUpdateOneRequiredWithoutClubAdminNestedInputObjectZodSchema = makeSchema();
