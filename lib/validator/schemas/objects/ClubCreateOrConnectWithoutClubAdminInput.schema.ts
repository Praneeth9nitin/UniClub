import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubCreateWithoutClubAdminInputObjectSchema as ClubCreateWithoutClubAdminInputObjectSchema } from './ClubCreateWithoutClubAdminInput.schema';
import { ClubUncheckedCreateWithoutClubAdminInputObjectSchema as ClubUncheckedCreateWithoutClubAdminInputObjectSchema } from './ClubUncheckedCreateWithoutClubAdminInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClubCreateWithoutClubAdminInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutClubAdminInputObjectSchema)])
}).strict();
export const ClubCreateOrConnectWithoutClubAdminInputObjectSchema: z.ZodType<Prisma.ClubCreateOrConnectWithoutClubAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateOrConnectWithoutClubAdminInput>;
export const ClubCreateOrConnectWithoutClubAdminInputObjectZodSchema = makeSchema();
