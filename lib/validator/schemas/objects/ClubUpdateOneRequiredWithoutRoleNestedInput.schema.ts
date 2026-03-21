import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutRoleInputObjectSchema as ClubCreateWithoutRoleInputObjectSchema } from './ClubCreateWithoutRoleInput.schema';
import { ClubUncheckedCreateWithoutRoleInputObjectSchema as ClubUncheckedCreateWithoutRoleInputObjectSchema } from './ClubUncheckedCreateWithoutRoleInput.schema';
import { ClubCreateOrConnectWithoutRoleInputObjectSchema as ClubCreateOrConnectWithoutRoleInputObjectSchema } from './ClubCreateOrConnectWithoutRoleInput.schema';
import { ClubUpsertWithoutRoleInputObjectSchema as ClubUpsertWithoutRoleInputObjectSchema } from './ClubUpsertWithoutRoleInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateToOneWithWhereWithoutRoleInputObjectSchema as ClubUpdateToOneWithWhereWithoutRoleInputObjectSchema } from './ClubUpdateToOneWithWhereWithoutRoleInput.schema';
import { ClubUpdateWithoutRoleInputObjectSchema as ClubUpdateWithoutRoleInputObjectSchema } from './ClubUpdateWithoutRoleInput.schema';
import { ClubUncheckedUpdateWithoutRoleInputObjectSchema as ClubUncheckedUpdateWithoutRoleInputObjectSchema } from './ClubUncheckedUpdateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutRoleInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutRoleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClubCreateOrConnectWithoutRoleInputObjectSchema).optional(),
  upsert: z.lazy(() => ClubUpsertWithoutRoleInputObjectSchema).optional(),
  connect: z.lazy(() => ClubWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClubUpdateToOneWithWhereWithoutRoleInputObjectSchema), z.lazy(() => ClubUpdateWithoutRoleInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutRoleInputObjectSchema)]).optional()
}).strict();
export const ClubUpdateOneRequiredWithoutRoleNestedInputObjectSchema: z.ZodType<Prisma.ClubUpdateOneRequiredWithoutRoleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateOneRequiredWithoutRoleNestedInput>;
export const ClubUpdateOneRequiredWithoutRoleNestedInputObjectZodSchema = makeSchema();
