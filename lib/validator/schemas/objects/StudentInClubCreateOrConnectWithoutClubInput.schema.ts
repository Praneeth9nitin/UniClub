import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubCreateWithoutClubInputObjectSchema as StudentInClubCreateWithoutClubInputObjectSchema } from './StudentInClubCreateWithoutClubInput.schema';
import { StudentInClubUncheckedCreateWithoutClubInputObjectSchema as StudentInClubUncheckedCreateWithoutClubInputObjectSchema } from './StudentInClubUncheckedCreateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentInClubCreateWithoutClubInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutClubInputObjectSchema)])
}).strict();
export const StudentInClubCreateOrConnectWithoutClubInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateOrConnectWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateOrConnectWithoutClubInput>;
export const StudentInClubCreateOrConnectWithoutClubInputObjectZodSchema = makeSchema();
