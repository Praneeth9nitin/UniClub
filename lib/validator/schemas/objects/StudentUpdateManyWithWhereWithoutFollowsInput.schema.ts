import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema';
import { StudentUpdateManyMutationInputObjectSchema as StudentUpdateManyMutationInputObjectSchema } from './StudentUpdateManyMutationInput.schema';
import { StudentUncheckedUpdateManyWithoutFollowsInputObjectSchema as StudentUncheckedUpdateManyWithoutFollowsInputObjectSchema } from './StudentUncheckedUpdateManyWithoutFollowsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateManyMutationInputObjectSchema), z.lazy(() => StudentUncheckedUpdateManyWithoutFollowsInputObjectSchema)])
}).strict();
export const StudentUpdateManyWithWhereWithoutFollowsInputObjectSchema: z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutFollowsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutFollowsInput>;
export const StudentUpdateManyWithWhereWithoutFollowsInputObjectZodSchema = makeSchema();
