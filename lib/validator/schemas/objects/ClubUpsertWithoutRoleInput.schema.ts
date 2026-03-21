import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubUpdateWithoutRoleInputObjectSchema as ClubUpdateWithoutRoleInputObjectSchema } from './ClubUpdateWithoutRoleInput.schema';
import { ClubUncheckedUpdateWithoutRoleInputObjectSchema as ClubUncheckedUpdateWithoutRoleInputObjectSchema } from './ClubUncheckedUpdateWithoutRoleInput.schema';
import { ClubCreateWithoutRoleInputObjectSchema as ClubCreateWithoutRoleInputObjectSchema } from './ClubCreateWithoutRoleInput.schema';
import { ClubUncheckedCreateWithoutRoleInputObjectSchema as ClubUncheckedCreateWithoutRoleInputObjectSchema } from './ClubUncheckedCreateWithoutRoleInput.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClubUpdateWithoutRoleInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutRoleInputObjectSchema)]),
  create: z.union([z.lazy(() => ClubCreateWithoutRoleInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutRoleInputObjectSchema)]),
  where: z.lazy(() => ClubWhereInputObjectSchema).optional()
}).strict();
export const ClubUpsertWithoutRoleInputObjectSchema: z.ZodType<Prisma.ClubUpsertWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpsertWithoutRoleInput>;
export const ClubUpsertWithoutRoleInputObjectZodSchema = makeSchema();
