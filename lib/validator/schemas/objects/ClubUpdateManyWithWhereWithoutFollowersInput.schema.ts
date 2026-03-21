import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubScalarWhereInputObjectSchema as ClubScalarWhereInputObjectSchema } from './ClubScalarWhereInput.schema';
import { ClubUpdateManyMutationInputObjectSchema as ClubUpdateManyMutationInputObjectSchema } from './ClubUpdateManyMutationInput.schema';
import { ClubUncheckedUpdateManyWithoutFollowersInputObjectSchema as ClubUncheckedUpdateManyWithoutFollowersInputObjectSchema } from './ClubUncheckedUpdateManyWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClubUpdateManyMutationInputObjectSchema), z.lazy(() => ClubUncheckedUpdateManyWithoutFollowersInputObjectSchema)])
}).strict();
export const ClubUpdateManyWithWhereWithoutFollowersInputObjectSchema: z.ZodType<Prisma.ClubUpdateManyWithWhereWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateManyWithWhereWithoutFollowersInput>;
export const ClubUpdateManyWithWhereWithoutFollowersInputObjectZodSchema = makeSchema();
