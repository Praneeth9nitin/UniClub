import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema';
import { ClubUpdateWithoutRoleInputObjectSchema as ClubUpdateWithoutRoleInputObjectSchema } from './ClubUpdateWithoutRoleInput.schema';
import { ClubUncheckedUpdateWithoutRoleInputObjectSchema as ClubUncheckedUpdateWithoutRoleInputObjectSchema } from './ClubUncheckedUpdateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClubUpdateWithoutRoleInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutRoleInputObjectSchema)])
}).strict();
export const ClubUpdateToOneWithWhereWithoutRoleInputObjectSchema: z.ZodType<Prisma.ClubUpdateToOneWithWhereWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateToOneWithWhereWithoutRoleInput>;
export const ClubUpdateToOneWithWhereWithoutRoleInputObjectZodSchema = makeSchema();
