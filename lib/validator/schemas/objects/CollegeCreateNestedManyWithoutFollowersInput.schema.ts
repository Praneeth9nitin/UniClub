import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutFollowersInputObjectSchema as CollegeCreateWithoutFollowersInputObjectSchema } from './CollegeCreateWithoutFollowersInput.schema';
import { CollegeUncheckedCreateWithoutFollowersInputObjectSchema as CollegeUncheckedCreateWithoutFollowersInputObjectSchema } from './CollegeUncheckedCreateWithoutFollowersInput.schema';
import { CollegeCreateOrConnectWithoutFollowersInputObjectSchema as CollegeCreateOrConnectWithoutFollowersInputObjectSchema } from './CollegeCreateOrConnectWithoutFollowersInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutFollowersInputObjectSchema), z.lazy(() => CollegeCreateWithoutFollowersInputObjectSchema).array(), z.lazy(() => CollegeUncheckedCreateWithoutFollowersInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutFollowersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CollegeCreateOrConnectWithoutFollowersInputObjectSchema), z.lazy(() => CollegeCreateOrConnectWithoutFollowersInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CollegeWhereUniqueInputObjectSchema), z.lazy(() => CollegeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CollegeCreateNestedManyWithoutFollowersInputObjectSchema: z.ZodType<Prisma.CollegeCreateNestedManyWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateNestedManyWithoutFollowersInput>;
export const CollegeCreateNestedManyWithoutFollowersInputObjectZodSchema = makeSchema();
