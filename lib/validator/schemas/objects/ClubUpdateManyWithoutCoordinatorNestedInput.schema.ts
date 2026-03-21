import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutCoordinatorInputObjectSchema as ClubCreateWithoutCoordinatorInputObjectSchema } from './ClubCreateWithoutCoordinatorInput.schema';
import { ClubUncheckedCreateWithoutCoordinatorInputObjectSchema as ClubUncheckedCreateWithoutCoordinatorInputObjectSchema } from './ClubUncheckedCreateWithoutCoordinatorInput.schema';
import { ClubCreateOrConnectWithoutCoordinatorInputObjectSchema as ClubCreateOrConnectWithoutCoordinatorInputObjectSchema } from './ClubCreateOrConnectWithoutCoordinatorInput.schema';
import { ClubUpsertWithWhereUniqueWithoutCoordinatorInputObjectSchema as ClubUpsertWithWhereUniqueWithoutCoordinatorInputObjectSchema } from './ClubUpsertWithWhereUniqueWithoutCoordinatorInput.schema';
import { ClubCreateManyCoordinatorInputEnvelopeObjectSchema as ClubCreateManyCoordinatorInputEnvelopeObjectSchema } from './ClubCreateManyCoordinatorInputEnvelope.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateWithWhereUniqueWithoutCoordinatorInputObjectSchema as ClubUpdateWithWhereUniqueWithoutCoordinatorInputObjectSchema } from './ClubUpdateWithWhereUniqueWithoutCoordinatorInput.schema';
import { ClubUpdateManyWithWhereWithoutCoordinatorInputObjectSchema as ClubUpdateManyWithWhereWithoutCoordinatorInputObjectSchema } from './ClubUpdateManyWithWhereWithoutCoordinatorInput.schema';
import { ClubScalarWhereInputObjectSchema as ClubScalarWhereInputObjectSchema } from './ClubScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubCreateWithoutCoordinatorInputObjectSchema).array(), z.lazy(() => ClubUncheckedCreateWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutCoordinatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClubCreateOrConnectWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubCreateOrConnectWithoutCoordinatorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClubUpsertWithWhereUniqueWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubUpsertWithWhereUniqueWithoutCoordinatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClubCreateManyCoordinatorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClubUpdateWithWhereUniqueWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubUpdateWithWhereUniqueWithoutCoordinatorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClubUpdateManyWithWhereWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubUpdateManyWithWhereWithoutCoordinatorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClubScalarWhereInputObjectSchema), z.lazy(() => ClubScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClubUpdateManyWithoutCoordinatorNestedInputObjectSchema: z.ZodType<Prisma.ClubUpdateManyWithoutCoordinatorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateManyWithoutCoordinatorNestedInput>;
export const ClubUpdateManyWithoutCoordinatorNestedInputObjectZodSchema = makeSchema();
