import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateWithoutCollegeInputObjectSchema as ClubUpdateWithoutCollegeInputObjectSchema } from './ClubUpdateWithoutCollegeInput.schema';
import { ClubUncheckedUpdateWithoutCollegeInputObjectSchema as ClubUncheckedUpdateWithoutCollegeInputObjectSchema } from './ClubUncheckedUpdateWithoutCollegeInput.schema';
import { ClubCreateWithoutCollegeInputObjectSchema as ClubCreateWithoutCollegeInputObjectSchema } from './ClubCreateWithoutCollegeInput.schema';
import { ClubUncheckedCreateWithoutCollegeInputObjectSchema as ClubUncheckedCreateWithoutCollegeInputObjectSchema } from './ClubUncheckedCreateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClubUpdateWithoutCollegeInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutCollegeInputObjectSchema)]),
  create: z.union([z.lazy(() => ClubCreateWithoutCollegeInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutCollegeInputObjectSchema)])
}).strict();
export const ClubUpsertWithWhereUniqueWithoutCollegeInputObjectSchema: z.ZodType<Prisma.ClubUpsertWithWhereUniqueWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpsertWithWhereUniqueWithoutCollegeInput>;
export const ClubUpsertWithWhereUniqueWithoutCollegeInputObjectZodSchema = makeSchema();
