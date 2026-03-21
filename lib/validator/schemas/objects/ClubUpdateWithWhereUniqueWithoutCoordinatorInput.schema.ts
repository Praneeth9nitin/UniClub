import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateWithoutCoordinatorInputObjectSchema as ClubUpdateWithoutCoordinatorInputObjectSchema } from './ClubUpdateWithoutCoordinatorInput.schema';
import { ClubUncheckedUpdateWithoutCoordinatorInputObjectSchema as ClubUncheckedUpdateWithoutCoordinatorInputObjectSchema } from './ClubUncheckedUpdateWithoutCoordinatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClubUpdateWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutCoordinatorInputObjectSchema)])
}).strict();
export const ClubUpdateWithWhereUniqueWithoutCoordinatorInputObjectSchema: z.ZodType<Prisma.ClubUpdateWithWhereUniqueWithoutCoordinatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateWithWhereUniqueWithoutCoordinatorInput>;
export const ClubUpdateWithWhereUniqueWithoutCoordinatorInputObjectZodSchema = makeSchema();
