import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubCreateWithoutClubInputObjectSchema as RoleInClubCreateWithoutClubInputObjectSchema } from './RoleInClubCreateWithoutClubInput.schema';
import { RoleInClubUncheckedCreateWithoutClubInputObjectSchema as RoleInClubUncheckedCreateWithoutClubInputObjectSchema } from './RoleInClubUncheckedCreateWithoutClubInput.schema';
import { RoleInClubCreateOrConnectWithoutClubInputObjectSchema as RoleInClubCreateOrConnectWithoutClubInputObjectSchema } from './RoleInClubCreateOrConnectWithoutClubInput.schema';
import { RoleInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema as RoleInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema } from './RoleInClubUpsertWithWhereUniqueWithoutClubInput.schema';
import { RoleInClubCreateManyClubInputEnvelopeObjectSchema as RoleInClubCreateManyClubInputEnvelopeObjectSchema } from './RoleInClubCreateManyClubInputEnvelope.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './RoleInClubWhereUniqueInput.schema';
import { RoleInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema as RoleInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema } from './RoleInClubUpdateWithWhereUniqueWithoutClubInput.schema';
import { RoleInClubUpdateManyWithWhereWithoutClubInputObjectSchema as RoleInClubUpdateManyWithWhereWithoutClubInputObjectSchema } from './RoleInClubUpdateManyWithWhereWithoutClubInput.schema';
import { RoleInClubScalarWhereInputObjectSchema as RoleInClubScalarWhereInputObjectSchema } from './RoleInClubScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoleInClubCreateWithoutClubInputObjectSchema), z.lazy(() => RoleInClubCreateWithoutClubInputObjectSchema).array(), z.lazy(() => RoleInClubUncheckedCreateWithoutClubInputObjectSchema), z.lazy(() => RoleInClubUncheckedCreateWithoutClubInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoleInClubCreateOrConnectWithoutClubInputObjectSchema), z.lazy(() => RoleInClubCreateOrConnectWithoutClubInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RoleInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema), z.lazy(() => RoleInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoleInClubCreateManyClubInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RoleInClubWhereUniqueInputObjectSchema), z.lazy(() => RoleInClubWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RoleInClubWhereUniqueInputObjectSchema), z.lazy(() => RoleInClubWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RoleInClubWhereUniqueInputObjectSchema), z.lazy(() => RoleInClubWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RoleInClubWhereUniqueInputObjectSchema), z.lazy(() => RoleInClubWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RoleInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema), z.lazy(() => RoleInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RoleInClubUpdateManyWithWhereWithoutClubInputObjectSchema), z.lazy(() => RoleInClubUpdateManyWithWhereWithoutClubInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RoleInClubScalarWhereInputObjectSchema), z.lazy(() => RoleInClubScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RoleInClubUncheckedUpdateManyWithoutClubNestedInputObjectSchema: z.ZodType<Prisma.RoleInClubUncheckedUpdateManyWithoutClubNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUncheckedUpdateManyWithoutClubNestedInput>;
export const RoleInClubUncheckedUpdateManyWithoutClubNestedInputObjectZodSchema = makeSchema();
