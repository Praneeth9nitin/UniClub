import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutFollowsInputObjectSchema as StudentUpdateWithoutFollowsInputObjectSchema } from './StudentUpdateWithoutFollowsInput.schema';
import { StudentUncheckedUpdateWithoutFollowsInputObjectSchema as StudentUncheckedUpdateWithoutFollowsInputObjectSchema } from './StudentUncheckedUpdateWithoutFollowsInput.schema';
import { StudentCreateWithoutFollowsInputObjectSchema as StudentCreateWithoutFollowsInputObjectSchema } from './StudentCreateWithoutFollowsInput.schema';
import { StudentUncheckedCreateWithoutFollowsInputObjectSchema as StudentUncheckedCreateWithoutFollowsInputObjectSchema } from './StudentUncheckedCreateWithoutFollowsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudentUpdateWithoutFollowsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutFollowsInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentCreateWithoutFollowsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutFollowsInputObjectSchema)])
}).strict();
export const StudentUpsertWithWhereUniqueWithoutFollowsInputObjectSchema: z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutFollowsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutFollowsInput>;
export const StudentUpsertWithWhereUniqueWithoutFollowsInputObjectZodSchema = makeSchema();
