import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateWithoutClubInputObjectSchema as StudentInClubCreateWithoutClubInputObjectSchema } from './StudentInClubCreateWithoutClubInput.schema';
import { StudentInClubUncheckedCreateWithoutClubInputObjectSchema as StudentInClubUncheckedCreateWithoutClubInputObjectSchema } from './StudentInClubUncheckedCreateWithoutClubInput.schema';
import { StudentInClubCreateOrConnectWithoutClubInputObjectSchema as StudentInClubCreateOrConnectWithoutClubInputObjectSchema } from './StudentInClubCreateOrConnectWithoutClubInput.schema';
import { StudentInClubCreateManyClubInputEnvelopeObjectSchema as StudentInClubCreateManyClubInputEnvelopeObjectSchema } from './StudentInClubCreateManyClubInputEnvelope.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentInClubCreateWithoutClubInputObjectSchema), z.lazy(() => StudentInClubCreateWithoutClubInputObjectSchema).array(), z.lazy(() => StudentInClubUncheckedCreateWithoutClubInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutClubInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentInClubCreateOrConnectWithoutClubInputObjectSchema), z.lazy(() => StudentInClubCreateOrConnectWithoutClubInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentInClubCreateManyClubInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudentInClubCreateNestedManyWithoutClubInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateNestedManyWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateNestedManyWithoutClubInput>;
export const StudentInClubCreateNestedManyWithoutClubInputObjectZodSchema = makeSchema();
