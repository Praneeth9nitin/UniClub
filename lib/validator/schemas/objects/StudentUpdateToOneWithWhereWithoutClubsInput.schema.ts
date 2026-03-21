import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema';
import { StudentUpdateWithoutClubsInputObjectSchema as StudentUpdateWithoutClubsInputObjectSchema } from './StudentUpdateWithoutClubsInput.schema';
import { StudentUncheckedUpdateWithoutClubsInputObjectSchema as StudentUncheckedUpdateWithoutClubsInputObjectSchema } from './StudentUncheckedUpdateWithoutClubsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StudentUpdateWithoutClubsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutClubsInputObjectSchema)])
}).strict();
export const StudentUpdateToOneWithWhereWithoutClubsInputObjectSchema: z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutClubsInput>;
export const StudentUpdateToOneWithWhereWithoutClubsInputObjectZodSchema = makeSchema();
