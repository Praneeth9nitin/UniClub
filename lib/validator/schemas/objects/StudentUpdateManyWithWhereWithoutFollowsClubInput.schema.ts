import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema';
import { StudentUpdateManyMutationInputObjectSchema as StudentUpdateManyMutationInputObjectSchema } from './StudentUpdateManyMutationInput.schema';
import { StudentUncheckedUpdateManyWithoutFollowsClubInputObjectSchema as StudentUncheckedUpdateManyWithoutFollowsClubInputObjectSchema } from './StudentUncheckedUpdateManyWithoutFollowsClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateManyMutationInputObjectSchema), z.lazy(() => StudentUncheckedUpdateManyWithoutFollowsClubInputObjectSchema)])
}).strict();
export const StudentUpdateManyWithWhereWithoutFollowsClubInputObjectSchema: z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutFollowsClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutFollowsClubInput>;
export const StudentUpdateManyWithWhereWithoutFollowsClubInputObjectZodSchema = makeSchema();
