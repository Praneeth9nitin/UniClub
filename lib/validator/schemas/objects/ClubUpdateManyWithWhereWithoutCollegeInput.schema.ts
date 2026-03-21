import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubScalarWhereInputObjectSchema as ClubScalarWhereInputObjectSchema } from './ClubScalarWhereInput.schema';
import { ClubUpdateManyMutationInputObjectSchema as ClubUpdateManyMutationInputObjectSchema } from './ClubUpdateManyMutationInput.schema';
import { ClubUncheckedUpdateManyWithoutCollegeInputObjectSchema as ClubUncheckedUpdateManyWithoutCollegeInputObjectSchema } from './ClubUncheckedUpdateManyWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClubUpdateManyMutationInputObjectSchema), z.lazy(() => ClubUncheckedUpdateManyWithoutCollegeInputObjectSchema)])
}).strict();
export const ClubUpdateManyWithWhereWithoutCollegeInputObjectSchema: z.ZodType<Prisma.ClubUpdateManyWithWhereWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateManyWithWhereWithoutCollegeInput>;
export const ClubUpdateManyWithWhereWithoutCollegeInputObjectZodSchema = makeSchema();
