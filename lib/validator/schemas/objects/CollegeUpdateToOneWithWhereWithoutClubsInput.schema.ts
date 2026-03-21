import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema';
import { CollegeUpdateWithoutClubsInputObjectSchema as CollegeUpdateWithoutClubsInputObjectSchema } from './CollegeUpdateWithoutClubsInput.schema';
import { CollegeUncheckedUpdateWithoutClubsInputObjectSchema as CollegeUncheckedUpdateWithoutClubsInputObjectSchema } from './CollegeUncheckedUpdateWithoutClubsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CollegeUpdateWithoutClubsInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutClubsInputObjectSchema)])
}).strict();
export const CollegeUpdateToOneWithWhereWithoutClubsInputObjectSchema: z.ZodType<Prisma.CollegeUpdateToOneWithWhereWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateToOneWithWhereWithoutClubsInput>;
export const CollegeUpdateToOneWithWhereWithoutClubsInputObjectZodSchema = makeSchema();
