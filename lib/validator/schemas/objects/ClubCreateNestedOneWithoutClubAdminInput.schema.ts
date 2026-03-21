import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutClubAdminInputObjectSchema as ClubCreateWithoutClubAdminInputObjectSchema } from './ClubCreateWithoutClubAdminInput.schema';
import { ClubUncheckedCreateWithoutClubAdminInputObjectSchema as ClubUncheckedCreateWithoutClubAdminInputObjectSchema } from './ClubUncheckedCreateWithoutClubAdminInput.schema';
import { ClubCreateOrConnectWithoutClubAdminInputObjectSchema as ClubCreateOrConnectWithoutClubAdminInputObjectSchema } from './ClubCreateOrConnectWithoutClubAdminInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutClubAdminInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutClubAdminInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClubCreateOrConnectWithoutClubAdminInputObjectSchema).optional(),
  connect: z.lazy(() => ClubWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClubCreateNestedOneWithoutClubAdminInputObjectSchema: z.ZodType<Prisma.ClubCreateNestedOneWithoutClubAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateNestedOneWithoutClubAdminInput>;
export const ClubCreateNestedOneWithoutClubAdminInputObjectZodSchema = makeSchema();
