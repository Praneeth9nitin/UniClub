import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutCollegeInputObjectSchema as ClubCreateWithoutCollegeInputObjectSchema } from './ClubCreateWithoutCollegeInput.schema';
import { ClubUncheckedCreateWithoutCollegeInputObjectSchema as ClubUncheckedCreateWithoutCollegeInputObjectSchema } from './ClubUncheckedCreateWithoutCollegeInput.schema';
import { ClubCreateOrConnectWithoutCollegeInputObjectSchema as ClubCreateOrConnectWithoutCollegeInputObjectSchema } from './ClubCreateOrConnectWithoutCollegeInput.schema';
import { ClubCreateManyCollegeInputEnvelopeObjectSchema as ClubCreateManyCollegeInputEnvelopeObjectSchema } from './ClubCreateManyCollegeInputEnvelope.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutCollegeInputObjectSchema), z.lazy(() => ClubCreateWithoutCollegeInputObjectSchema).array(), z.lazy(() => ClubUncheckedCreateWithoutCollegeInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutCollegeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClubCreateOrConnectWithoutCollegeInputObjectSchema), z.lazy(() => ClubCreateOrConnectWithoutCollegeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClubCreateManyCollegeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClubCreateNestedManyWithoutCollegeInputObjectSchema: z.ZodType<Prisma.ClubCreateNestedManyWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateNestedManyWithoutCollegeInput>;
export const ClubCreateNestedManyWithoutCollegeInputObjectZodSchema = makeSchema();
