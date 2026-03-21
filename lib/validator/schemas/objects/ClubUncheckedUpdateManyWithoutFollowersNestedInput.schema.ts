import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutFollowersInputObjectSchema as ClubCreateWithoutFollowersInputObjectSchema } from './ClubCreateWithoutFollowersInput.schema';
import { ClubUncheckedCreateWithoutFollowersInputObjectSchema as ClubUncheckedCreateWithoutFollowersInputObjectSchema } from './ClubUncheckedCreateWithoutFollowersInput.schema';
import { ClubCreateOrConnectWithoutFollowersInputObjectSchema as ClubCreateOrConnectWithoutFollowersInputObjectSchema } from './ClubCreateOrConnectWithoutFollowersInput.schema';
import { ClubUpsertWithWhereUniqueWithoutFollowersInputObjectSchema as ClubUpsertWithWhereUniqueWithoutFollowersInputObjectSchema } from './ClubUpsertWithWhereUniqueWithoutFollowersInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateWithWhereUniqueWithoutFollowersInputObjectSchema as ClubUpdateWithWhereUniqueWithoutFollowersInputObjectSchema } from './ClubUpdateWithWhereUniqueWithoutFollowersInput.schema';
import { ClubUpdateManyWithWhereWithoutFollowersInputObjectSchema as ClubUpdateManyWithWhereWithoutFollowersInputObjectSchema } from './ClubUpdateManyWithWhereWithoutFollowersInput.schema';
import { ClubScalarWhereInputObjectSchema as ClubScalarWhereInputObjectSchema } from './ClubScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutFollowersInputObjectSchema), z.lazy(() => ClubCreateWithoutFollowersInputObjectSchema).array(), z.lazy(() => ClubUncheckedCreateWithoutFollowersInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutFollowersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClubCreateOrConnectWithoutFollowersInputObjectSchema), z.lazy(() => ClubCreateOrConnectWithoutFollowersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClubUpsertWithWhereUniqueWithoutFollowersInputObjectSchema), z.lazy(() => ClubUpsertWithWhereUniqueWithoutFollowersInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClubUpdateWithWhereUniqueWithoutFollowersInputObjectSchema), z.lazy(() => ClubUpdateWithWhereUniqueWithoutFollowersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClubUpdateManyWithWhereWithoutFollowersInputObjectSchema), z.lazy(() => ClubUpdateManyWithWhereWithoutFollowersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClubScalarWhereInputObjectSchema), z.lazy(() => ClubScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClubUncheckedUpdateManyWithoutFollowersNestedInputObjectSchema: z.ZodType<Prisma.ClubUncheckedUpdateManyWithoutFollowersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUncheckedUpdateManyWithoutFollowersNestedInput>;
export const ClubUncheckedUpdateManyWithoutFollowersNestedInputObjectZodSchema = makeSchema();
