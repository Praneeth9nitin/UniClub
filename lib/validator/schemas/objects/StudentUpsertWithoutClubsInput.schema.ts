import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentUpdateWithoutClubsInputObjectSchema as StudentUpdateWithoutClubsInputObjectSchema } from './StudentUpdateWithoutClubsInput.schema';
import { StudentUncheckedUpdateWithoutClubsInputObjectSchema as StudentUncheckedUpdateWithoutClubsInputObjectSchema } from './StudentUncheckedUpdateWithoutClubsInput.schema';
import { StudentCreateWithoutClubsInputObjectSchema as StudentCreateWithoutClubsInputObjectSchema } from './StudentCreateWithoutClubsInput.schema';
import { StudentUncheckedCreateWithoutClubsInputObjectSchema as StudentUncheckedCreateWithoutClubsInputObjectSchema } from './StudentUncheckedCreateWithoutClubsInput.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StudentUpdateWithoutClubsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutClubsInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentCreateWithoutClubsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutClubsInputObjectSchema)]),
  where: z.lazy(() => StudentWhereInputObjectSchema).optional()
}).strict();
export const StudentUpsertWithoutClubsInputObjectSchema: z.ZodType<Prisma.StudentUpsertWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpsertWithoutClubsInput>;
export const StudentUpsertWithoutClubsInputObjectZodSchema = makeSchema();
