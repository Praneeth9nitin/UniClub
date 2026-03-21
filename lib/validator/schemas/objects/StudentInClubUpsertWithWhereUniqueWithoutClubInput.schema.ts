import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubUpdateWithoutClubInputObjectSchema as StudentInClubUpdateWithoutClubInputObjectSchema } from './StudentInClubUpdateWithoutClubInput.schema';
import { StudentInClubUncheckedUpdateWithoutClubInputObjectSchema as StudentInClubUncheckedUpdateWithoutClubInputObjectSchema } from './StudentInClubUncheckedUpdateWithoutClubInput.schema';
import { StudentInClubCreateWithoutClubInputObjectSchema as StudentInClubCreateWithoutClubInputObjectSchema } from './StudentInClubCreateWithoutClubInput.schema';
import { StudentInClubUncheckedCreateWithoutClubInputObjectSchema as StudentInClubUncheckedCreateWithoutClubInputObjectSchema } from './StudentInClubUncheckedCreateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudentInClubUpdateWithoutClubInputObjectSchema), z.lazy(() => StudentInClubUncheckedUpdateWithoutClubInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentInClubCreateWithoutClubInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutClubInputObjectSchema)])
}).strict();
export const StudentInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema: z.ZodType<Prisma.StudentInClubUpsertWithWhereUniqueWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpsertWithWhereUniqueWithoutClubInput>;
export const StudentInClubUpsertWithWhereUniqueWithoutClubInputObjectZodSchema = makeSchema();
