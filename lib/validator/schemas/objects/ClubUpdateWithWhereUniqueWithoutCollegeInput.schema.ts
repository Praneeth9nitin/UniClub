import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateWithoutCollegeInputObjectSchema as ClubUpdateWithoutCollegeInputObjectSchema } from './ClubUpdateWithoutCollegeInput.schema';
import { ClubUncheckedUpdateWithoutCollegeInputObjectSchema as ClubUncheckedUpdateWithoutCollegeInputObjectSchema } from './ClubUncheckedUpdateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClubUpdateWithoutCollegeInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutCollegeInputObjectSchema)])
}).strict();
export const ClubUpdateWithWhereUniqueWithoutCollegeInputObjectSchema: z.ZodType<Prisma.ClubUpdateWithWhereUniqueWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateWithWhereUniqueWithoutCollegeInput>;
export const ClubUpdateWithWhereUniqueWithoutCollegeInputObjectZodSchema = makeSchema();
