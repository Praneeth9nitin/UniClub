import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutCoordinatorInputObjectSchema as ClubCreateWithoutCoordinatorInputObjectSchema } from './ClubCreateWithoutCoordinatorInput.schema';
import { ClubUncheckedCreateWithoutCoordinatorInputObjectSchema as ClubUncheckedCreateWithoutCoordinatorInputObjectSchema } from './ClubUncheckedCreateWithoutCoordinatorInput.schema';
import { ClubCreateOrConnectWithoutCoordinatorInputObjectSchema as ClubCreateOrConnectWithoutCoordinatorInputObjectSchema } from './ClubCreateOrConnectWithoutCoordinatorInput.schema';
import { ClubCreateManyCoordinatorInputEnvelopeObjectSchema as ClubCreateManyCoordinatorInputEnvelopeObjectSchema } from './ClubCreateManyCoordinatorInputEnvelope.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubCreateWithoutCoordinatorInputObjectSchema).array(), z.lazy(() => ClubUncheckedCreateWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutCoordinatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClubCreateOrConnectWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubCreateOrConnectWithoutCoordinatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClubCreateManyCoordinatorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClubUncheckedCreateNestedManyWithoutCoordinatorInputObjectSchema: z.ZodType<Prisma.ClubUncheckedCreateNestedManyWithoutCoordinatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUncheckedCreateNestedManyWithoutCoordinatorInput>;
export const ClubUncheckedCreateNestedManyWithoutCoordinatorInputObjectZodSchema = makeSchema();
