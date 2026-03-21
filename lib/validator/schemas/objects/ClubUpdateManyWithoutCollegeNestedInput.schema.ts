import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutCollegeInputObjectSchema as ClubCreateWithoutCollegeInputObjectSchema } from './ClubCreateWithoutCollegeInput.schema';
import { ClubUncheckedCreateWithoutCollegeInputObjectSchema as ClubUncheckedCreateWithoutCollegeInputObjectSchema } from './ClubUncheckedCreateWithoutCollegeInput.schema';
import { ClubCreateOrConnectWithoutCollegeInputObjectSchema as ClubCreateOrConnectWithoutCollegeInputObjectSchema } from './ClubCreateOrConnectWithoutCollegeInput.schema';
import { ClubUpsertWithWhereUniqueWithoutCollegeInputObjectSchema as ClubUpsertWithWhereUniqueWithoutCollegeInputObjectSchema } from './ClubUpsertWithWhereUniqueWithoutCollegeInput.schema';
import { ClubCreateManyCollegeInputEnvelopeObjectSchema as ClubCreateManyCollegeInputEnvelopeObjectSchema } from './ClubCreateManyCollegeInputEnvelope.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateWithWhereUniqueWithoutCollegeInputObjectSchema as ClubUpdateWithWhereUniqueWithoutCollegeInputObjectSchema } from './ClubUpdateWithWhereUniqueWithoutCollegeInput.schema';
import { ClubUpdateManyWithWhereWithoutCollegeInputObjectSchema as ClubUpdateManyWithWhereWithoutCollegeInputObjectSchema } from './ClubUpdateManyWithWhereWithoutCollegeInput.schema';
import { ClubScalarWhereInputObjectSchema as ClubScalarWhereInputObjectSchema } from './ClubScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutCollegeInputObjectSchema), z.lazy(() => ClubCreateWithoutCollegeInputObjectSchema).array(), z.lazy(() => ClubUncheckedCreateWithoutCollegeInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutCollegeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClubCreateOrConnectWithoutCollegeInputObjectSchema), z.lazy(() => ClubCreateOrConnectWithoutCollegeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClubUpsertWithWhereUniqueWithoutCollegeInputObjectSchema), z.lazy(() => ClubUpsertWithWhereUniqueWithoutCollegeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClubCreateManyCollegeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClubUpdateWithWhereUniqueWithoutCollegeInputObjectSchema), z.lazy(() => ClubUpdateWithWhereUniqueWithoutCollegeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClubUpdateManyWithWhereWithoutCollegeInputObjectSchema), z.lazy(() => ClubUpdateManyWithWhereWithoutCollegeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClubScalarWhereInputObjectSchema), z.lazy(() => ClubScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClubUpdateManyWithoutCollegeNestedInputObjectSchema: z.ZodType<Prisma.ClubUpdateManyWithoutCollegeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateManyWithoutCollegeNestedInput>;
export const ClubUpdateManyWithoutCollegeNestedInputObjectZodSchema = makeSchema();
