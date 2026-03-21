import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyCreateWithoutCollegeInputObjectSchema as FacultyCreateWithoutCollegeInputObjectSchema } from './FacultyCreateWithoutCollegeInput.schema';
import { FacultyUncheckedCreateWithoutCollegeInputObjectSchema as FacultyUncheckedCreateWithoutCollegeInputObjectSchema } from './FacultyUncheckedCreateWithoutCollegeInput.schema';
import { FacultyCreateOrConnectWithoutCollegeInputObjectSchema as FacultyCreateOrConnectWithoutCollegeInputObjectSchema } from './FacultyCreateOrConnectWithoutCollegeInput.schema';
import { FacultyCreateManyCollegeInputEnvelopeObjectSchema as FacultyCreateManyCollegeInputEnvelopeObjectSchema } from './FacultyCreateManyCollegeInputEnvelope.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FacultyCreateWithoutCollegeInputObjectSchema), z.lazy(() => FacultyCreateWithoutCollegeInputObjectSchema).array(), z.lazy(() => FacultyUncheckedCreateWithoutCollegeInputObjectSchema), z.lazy(() => FacultyUncheckedCreateWithoutCollegeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FacultyCreateOrConnectWithoutCollegeInputObjectSchema), z.lazy(() => FacultyCreateOrConnectWithoutCollegeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FacultyCreateManyCollegeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FacultyWhereUniqueInputObjectSchema), z.lazy(() => FacultyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FacultyCreateNestedManyWithoutCollegeInputObjectSchema: z.ZodType<Prisma.FacultyCreateNestedManyWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCreateNestedManyWithoutCollegeInput>;
export const FacultyCreateNestedManyWithoutCollegeInputObjectZodSchema = makeSchema();
