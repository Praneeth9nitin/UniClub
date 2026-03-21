import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutFollowsInputObjectSchema as StudentUpdateWithoutFollowsInputObjectSchema } from './StudentUpdateWithoutFollowsInput.schema';
import { StudentUncheckedUpdateWithoutFollowsInputObjectSchema as StudentUncheckedUpdateWithoutFollowsInputObjectSchema } from './StudentUncheckedUpdateWithoutFollowsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateWithoutFollowsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutFollowsInputObjectSchema)])
}).strict();
export const StudentUpdateWithWhereUniqueWithoutFollowsInputObjectSchema: z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutFollowsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutFollowsInput>;
export const StudentUpdateWithWhereUniqueWithoutFollowsInputObjectZodSchema = makeSchema();
