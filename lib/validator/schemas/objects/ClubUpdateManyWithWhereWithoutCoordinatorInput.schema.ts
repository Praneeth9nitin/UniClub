import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubScalarWhereInputObjectSchema as ClubScalarWhereInputObjectSchema } from './ClubScalarWhereInput.schema';
import { ClubUpdateManyMutationInputObjectSchema as ClubUpdateManyMutationInputObjectSchema } from './ClubUpdateManyMutationInput.schema';
import { ClubUncheckedUpdateManyWithoutCoordinatorInputObjectSchema as ClubUncheckedUpdateManyWithoutCoordinatorInputObjectSchema } from './ClubUncheckedUpdateManyWithoutCoordinatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClubUpdateManyMutationInputObjectSchema), z.lazy(() => ClubUncheckedUpdateManyWithoutCoordinatorInputObjectSchema)])
}).strict();
export const ClubUpdateManyWithWhereWithoutCoordinatorInputObjectSchema: z.ZodType<Prisma.ClubUpdateManyWithWhereWithoutCoordinatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateManyWithWhereWithoutCoordinatorInput>;
export const ClubUpdateManyWithWhereWithoutCoordinatorInputObjectZodSchema = makeSchema();
