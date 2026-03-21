import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeUpdateWithoutFollowersInputObjectSchema as CollegeUpdateWithoutFollowersInputObjectSchema } from './CollegeUpdateWithoutFollowersInput.schema';
import { CollegeUncheckedUpdateWithoutFollowersInputObjectSchema as CollegeUncheckedUpdateWithoutFollowersInputObjectSchema } from './CollegeUncheckedUpdateWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CollegeUpdateWithoutFollowersInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutFollowersInputObjectSchema)])
}).strict();
export const CollegeUpdateWithWhereUniqueWithoutFollowersInputObjectSchema: z.ZodType<Prisma.CollegeUpdateWithWhereUniqueWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateWithWhereUniqueWithoutFollowersInput>;
export const CollegeUpdateWithWhereUniqueWithoutFollowersInputObjectZodSchema = makeSchema();
