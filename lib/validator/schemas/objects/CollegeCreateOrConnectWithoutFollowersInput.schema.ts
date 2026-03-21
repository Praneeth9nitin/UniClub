import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeCreateWithoutFollowersInputObjectSchema as CollegeCreateWithoutFollowersInputObjectSchema } from './CollegeCreateWithoutFollowersInput.schema';
import { CollegeUncheckedCreateWithoutFollowersInputObjectSchema as CollegeUncheckedCreateWithoutFollowersInputObjectSchema } from './CollegeUncheckedCreateWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollegeCreateWithoutFollowersInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutFollowersInputObjectSchema)])
}).strict();
export const CollegeCreateOrConnectWithoutFollowersInputObjectSchema: z.ZodType<Prisma.CollegeCreateOrConnectWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateOrConnectWithoutFollowersInput>;
export const CollegeCreateOrConnectWithoutFollowersInputObjectZodSchema = makeSchema();
