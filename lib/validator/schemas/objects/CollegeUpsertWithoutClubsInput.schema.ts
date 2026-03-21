import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeUpdateWithoutClubsInputObjectSchema as CollegeUpdateWithoutClubsInputObjectSchema } from './CollegeUpdateWithoutClubsInput.schema';
import { CollegeUncheckedUpdateWithoutClubsInputObjectSchema as CollegeUncheckedUpdateWithoutClubsInputObjectSchema } from './CollegeUncheckedUpdateWithoutClubsInput.schema';
import { CollegeCreateWithoutClubsInputObjectSchema as CollegeCreateWithoutClubsInputObjectSchema } from './CollegeCreateWithoutClubsInput.schema';
import { CollegeUncheckedCreateWithoutClubsInputObjectSchema as CollegeUncheckedCreateWithoutClubsInputObjectSchema } from './CollegeUncheckedCreateWithoutClubsInput.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CollegeUpdateWithoutClubsInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutClubsInputObjectSchema)]),
  create: z.union([z.lazy(() => CollegeCreateWithoutClubsInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutClubsInputObjectSchema)]),
  where: z.lazy(() => CollegeWhereInputObjectSchema).optional()
}).strict();
export const CollegeUpsertWithoutClubsInputObjectSchema: z.ZodType<Prisma.CollegeUpsertWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpsertWithoutClubsInput>;
export const CollegeUpsertWithoutClubsInputObjectZodSchema = makeSchema();
