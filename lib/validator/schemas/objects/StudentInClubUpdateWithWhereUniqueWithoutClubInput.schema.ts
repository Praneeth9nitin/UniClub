import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubUpdateWithoutClubInputObjectSchema as StudentInClubUpdateWithoutClubInputObjectSchema } from './StudentInClubUpdateWithoutClubInput.schema';
import { StudentInClubUncheckedUpdateWithoutClubInputObjectSchema as StudentInClubUncheckedUpdateWithoutClubInputObjectSchema } from './StudentInClubUncheckedUpdateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudentInClubUpdateWithoutClubInputObjectSchema), z.lazy(() => StudentInClubUncheckedUpdateWithoutClubInputObjectSchema)])
}).strict();
export const StudentInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateWithWhereUniqueWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateWithWhereUniqueWithoutClubInput>;
export const StudentInClubUpdateWithWhereUniqueWithoutClubInputObjectZodSchema = makeSchema();
