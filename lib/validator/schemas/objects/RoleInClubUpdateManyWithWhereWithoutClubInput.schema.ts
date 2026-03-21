import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubScalarWhereInputObjectSchema as RoleInClubScalarWhereInputObjectSchema } from './RoleInClubScalarWhereInput.schema';
import { RoleInClubUpdateManyMutationInputObjectSchema as RoleInClubUpdateManyMutationInputObjectSchema } from './RoleInClubUpdateManyMutationInput.schema';
import { RoleInClubUncheckedUpdateManyWithoutClubInputObjectSchema as RoleInClubUncheckedUpdateManyWithoutClubInputObjectSchema } from './RoleInClubUncheckedUpdateManyWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoleInClubScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RoleInClubUpdateManyMutationInputObjectSchema), z.lazy(() => RoleInClubUncheckedUpdateManyWithoutClubInputObjectSchema)])
}).strict();
export const RoleInClubUpdateManyWithWhereWithoutClubInputObjectSchema: z.ZodType<Prisma.RoleInClubUpdateManyWithWhereWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUpdateManyWithWhereWithoutClubInput>;
export const RoleInClubUpdateManyWithWhereWithoutClubInputObjectZodSchema = makeSchema();
