import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyCreateWithoutCollegeInputObjectSchema as FacultyCreateWithoutCollegeInputObjectSchema } from './FacultyCreateWithoutCollegeInput.schema';
import { FacultyUncheckedCreateWithoutCollegeInputObjectSchema as FacultyUncheckedCreateWithoutCollegeInputObjectSchema } from './FacultyUncheckedCreateWithoutCollegeInput.schema';
import { FacultyCreateOrConnectWithoutCollegeInputObjectSchema as FacultyCreateOrConnectWithoutCollegeInputObjectSchema } from './FacultyCreateOrConnectWithoutCollegeInput.schema';
import { FacultyUpsertWithWhereUniqueWithoutCollegeInputObjectSchema as FacultyUpsertWithWhereUniqueWithoutCollegeInputObjectSchema } from './FacultyUpsertWithWhereUniqueWithoutCollegeInput.schema';
import { FacultyCreateManyCollegeInputEnvelopeObjectSchema as FacultyCreateManyCollegeInputEnvelopeObjectSchema } from './FacultyCreateManyCollegeInputEnvelope.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema';
import { FacultyUpdateWithWhereUniqueWithoutCollegeInputObjectSchema as FacultyUpdateWithWhereUniqueWithoutCollegeInputObjectSchema } from './FacultyUpdateWithWhereUniqueWithoutCollegeInput.schema';
import { FacultyUpdateManyWithWhereWithoutCollegeInputObjectSchema as FacultyUpdateManyWithWhereWithoutCollegeInputObjectSchema } from './FacultyUpdateManyWithWhereWithoutCollegeInput.schema';
import { FacultyScalarWhereInputObjectSchema as FacultyScalarWhereInputObjectSchema } from './FacultyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FacultyCreateWithoutCollegeInputObjectSchema), z.lazy(() => FacultyCreateWithoutCollegeInputObjectSchema).array(), z.lazy(() => FacultyUncheckedCreateWithoutCollegeInputObjectSchema), z.lazy(() => FacultyUncheckedCreateWithoutCollegeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FacultyCreateOrConnectWithoutCollegeInputObjectSchema), z.lazy(() => FacultyCreateOrConnectWithoutCollegeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FacultyUpsertWithWhereUniqueWithoutCollegeInputObjectSchema), z.lazy(() => FacultyUpsertWithWhereUniqueWithoutCollegeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FacultyCreateManyCollegeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FacultyWhereUniqueInputObjectSchema), z.lazy(() => FacultyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FacultyWhereUniqueInputObjectSchema), z.lazy(() => FacultyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FacultyWhereUniqueInputObjectSchema), z.lazy(() => FacultyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FacultyWhereUniqueInputObjectSchema), z.lazy(() => FacultyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FacultyUpdateWithWhereUniqueWithoutCollegeInputObjectSchema), z.lazy(() => FacultyUpdateWithWhereUniqueWithoutCollegeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FacultyUpdateManyWithWhereWithoutCollegeInputObjectSchema), z.lazy(() => FacultyUpdateManyWithWhereWithoutCollegeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FacultyScalarWhereInputObjectSchema), z.lazy(() => FacultyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FacultyUpdateManyWithoutCollegeNestedInputObjectSchema: z.ZodType<Prisma.FacultyUpdateManyWithoutCollegeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUpdateManyWithoutCollegeNestedInput>;
export const FacultyUpdateManyWithoutCollegeNestedInputObjectZodSchema = makeSchema();
