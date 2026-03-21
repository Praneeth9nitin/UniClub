import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateWithoutStudentInputObjectSchema as StudentInClubCreateWithoutStudentInputObjectSchema } from './StudentInClubCreateWithoutStudentInput.schema';
import { StudentInClubUncheckedCreateWithoutStudentInputObjectSchema as StudentInClubUncheckedCreateWithoutStudentInputObjectSchema } from './StudentInClubUncheckedCreateWithoutStudentInput.schema';
import { StudentInClubCreateOrConnectWithoutStudentInputObjectSchema as StudentInClubCreateOrConnectWithoutStudentInputObjectSchema } from './StudentInClubCreateOrConnectWithoutStudentInput.schema';
import { StudentInClubCreateManyStudentInputEnvelopeObjectSchema as StudentInClubCreateManyStudentInputEnvelopeObjectSchema } from './StudentInClubCreateManyStudentInputEnvelope.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentInClubCreateWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubCreateWithoutStudentInputObjectSchema).array(), z.lazy(() => StudentInClubUncheckedCreateWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutStudentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentInClubCreateOrConnectWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubCreateOrConnectWithoutStudentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentInClubCreateManyStudentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudentInClubUncheckedCreateNestedManyWithoutStudentInputObjectSchema: z.ZodType<Prisma.StudentInClubUncheckedCreateNestedManyWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUncheckedCreateNestedManyWithoutStudentInput>;
export const StudentInClubUncheckedCreateNestedManyWithoutStudentInputObjectZodSchema = makeSchema();
