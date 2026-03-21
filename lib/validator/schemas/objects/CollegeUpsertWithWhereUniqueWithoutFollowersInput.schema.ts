import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeUpdateWithoutFollowersInputObjectSchema as CollegeUpdateWithoutFollowersInputObjectSchema } from './CollegeUpdateWithoutFollowersInput.schema';
import { CollegeUncheckedUpdateWithoutFollowersInputObjectSchema as CollegeUncheckedUpdateWithoutFollowersInputObjectSchema } from './CollegeUncheckedUpdateWithoutFollowersInput.schema';
import { CollegeCreateWithoutFollowersInputObjectSchema as CollegeCreateWithoutFollowersInputObjectSchema } from './CollegeCreateWithoutFollowersInput.schema';
import { CollegeUncheckedCreateWithoutFollowersInputObjectSchema as CollegeUncheckedCreateWithoutFollowersInputObjectSchema } from './CollegeUncheckedCreateWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CollegeUpdateWithoutFollowersInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutFollowersInputObjectSchema)]),
  create: z.union([z.lazy(() => CollegeCreateWithoutFollowersInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutFollowersInputObjectSchema)])
}).strict();
export const CollegeUpsertWithWhereUniqueWithoutFollowersInputObjectSchema: z.ZodType<Prisma.CollegeUpsertWithWhereUniqueWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpsertWithWhereUniqueWithoutFollowersInput>;
export const CollegeUpsertWithWhereUniqueWithoutFollowersInputObjectZodSchema = makeSchema();
