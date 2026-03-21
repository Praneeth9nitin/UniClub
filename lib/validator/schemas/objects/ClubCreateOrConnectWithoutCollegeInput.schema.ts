import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubCreateWithoutCollegeInputObjectSchema as ClubCreateWithoutCollegeInputObjectSchema } from './ClubCreateWithoutCollegeInput.schema';
import { ClubUncheckedCreateWithoutCollegeInputObjectSchema as ClubUncheckedCreateWithoutCollegeInputObjectSchema } from './ClubUncheckedCreateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClubCreateWithoutCollegeInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutCollegeInputObjectSchema)])
}).strict();
export const ClubCreateOrConnectWithoutCollegeInputObjectSchema: z.ZodType<Prisma.ClubCreateOrConnectWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateOrConnectWithoutCollegeInput>;
export const ClubCreateOrConnectWithoutCollegeInputObjectZodSchema = makeSchema();
