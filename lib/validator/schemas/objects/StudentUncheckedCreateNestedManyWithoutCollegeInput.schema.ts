import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutCollegeInputObjectSchema as StudentCreateWithoutCollegeInputObjectSchema } from './StudentCreateWithoutCollegeInput.schema';
import { StudentUncheckedCreateWithoutCollegeInputObjectSchema as StudentUncheckedCreateWithoutCollegeInputObjectSchema } from './StudentUncheckedCreateWithoutCollegeInput.schema';
import { StudentCreateOrConnectWithoutCollegeInputObjectSchema as StudentCreateOrConnectWithoutCollegeInputObjectSchema } from './StudentCreateOrConnectWithoutCollegeInput.schema';
import { StudentCreateManyCollegeInputEnvelopeObjectSchema as StudentCreateManyCollegeInputEnvelopeObjectSchema } from './StudentCreateManyCollegeInputEnvelope.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutCollegeInputObjectSchema), z.lazy(() => StudentCreateWithoutCollegeInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutCollegeInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutCollegeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutCollegeInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutCollegeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentCreateManyCollegeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedCreateNestedManyWithoutCollegeInputObjectSchema: z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutCollegeInput>;
export const StudentUncheckedCreateNestedManyWithoutCollegeInputObjectZodSchema = makeSchema();
