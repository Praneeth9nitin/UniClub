import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema';
import { ClubUpdateWithoutClubAdminInputObjectSchema as ClubUpdateWithoutClubAdminInputObjectSchema } from './ClubUpdateWithoutClubAdminInput.schema';
import { ClubUncheckedUpdateWithoutClubAdminInputObjectSchema as ClubUncheckedUpdateWithoutClubAdminInputObjectSchema } from './ClubUncheckedUpdateWithoutClubAdminInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClubUpdateWithoutClubAdminInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutClubAdminInputObjectSchema)])
}).strict();
export const ClubUpdateToOneWithWhereWithoutClubAdminInputObjectSchema: z.ZodType<Prisma.ClubUpdateToOneWithWhereWithoutClubAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateToOneWithWhereWithoutClubAdminInput>;
export const ClubUpdateToOneWithWhereWithoutClubAdminInputObjectZodSchema = makeSchema();
