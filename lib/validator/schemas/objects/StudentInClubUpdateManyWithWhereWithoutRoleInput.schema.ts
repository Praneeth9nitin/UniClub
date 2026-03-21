import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubScalarWhereInputObjectSchema as StudentInClubScalarWhereInputObjectSchema } from './StudentInClubScalarWhereInput.schema';
import { StudentInClubUpdateManyMutationInputObjectSchema as StudentInClubUpdateManyMutationInputObjectSchema } from './StudentInClubUpdateManyMutationInput.schema';
import { StudentInClubUncheckedUpdateManyWithoutRoleInputObjectSchema as StudentInClubUncheckedUpdateManyWithoutRoleInputObjectSchema } from './StudentInClubUncheckedUpdateManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudentInClubUpdateManyMutationInputObjectSchema), z.lazy(() => StudentInClubUncheckedUpdateManyWithoutRoleInputObjectSchema)])
}).strict();
export const StudentInClubUpdateManyWithWhereWithoutRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateManyWithWhereWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateManyWithWhereWithoutRoleInput>;
export const StudentInClubUpdateManyWithWhereWithoutRoleInputObjectZodSchema = makeSchema();
