import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateWithoutCoordinatorInputObjectSchema as ClubUpdateWithoutCoordinatorInputObjectSchema } from './ClubUpdateWithoutCoordinatorInput.schema';
import { ClubUncheckedUpdateWithoutCoordinatorInputObjectSchema as ClubUncheckedUpdateWithoutCoordinatorInputObjectSchema } from './ClubUncheckedUpdateWithoutCoordinatorInput.schema';
import { ClubCreateWithoutCoordinatorInputObjectSchema as ClubCreateWithoutCoordinatorInputObjectSchema } from './ClubCreateWithoutCoordinatorInput.schema';
import { ClubUncheckedCreateWithoutCoordinatorInputObjectSchema as ClubUncheckedCreateWithoutCoordinatorInputObjectSchema } from './ClubUncheckedCreateWithoutCoordinatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClubUpdateWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutCoordinatorInputObjectSchema)]),
  create: z.union([z.lazy(() => ClubCreateWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutCoordinatorInputObjectSchema)])
}).strict();
export const ClubUpsertWithWhereUniqueWithoutCoordinatorInputObjectSchema: z.ZodType<Prisma.ClubUpsertWithWhereUniqueWithoutCoordinatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpsertWithWhereUniqueWithoutCoordinatorInput>;
export const ClubUpsertWithWhereUniqueWithoutCoordinatorInputObjectZodSchema = makeSchema();
