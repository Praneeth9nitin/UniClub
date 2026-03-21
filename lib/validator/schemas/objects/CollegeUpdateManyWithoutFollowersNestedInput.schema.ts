import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutFollowersInputObjectSchema as CollegeCreateWithoutFollowersInputObjectSchema } from './CollegeCreateWithoutFollowersInput.schema';
import { CollegeUncheckedCreateWithoutFollowersInputObjectSchema as CollegeUncheckedCreateWithoutFollowersInputObjectSchema } from './CollegeUncheckedCreateWithoutFollowersInput.schema';
import { CollegeCreateOrConnectWithoutFollowersInputObjectSchema as CollegeCreateOrConnectWithoutFollowersInputObjectSchema } from './CollegeCreateOrConnectWithoutFollowersInput.schema';
import { CollegeUpsertWithWhereUniqueWithoutFollowersInputObjectSchema as CollegeUpsertWithWhereUniqueWithoutFollowersInputObjectSchema } from './CollegeUpsertWithWhereUniqueWithoutFollowersInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeUpdateWithWhereUniqueWithoutFollowersInputObjectSchema as CollegeUpdateWithWhereUniqueWithoutFollowersInputObjectSchema } from './CollegeUpdateWithWhereUniqueWithoutFollowersInput.schema';
import { CollegeUpdateManyWithWhereWithoutFollowersInputObjectSchema as CollegeUpdateManyWithWhereWithoutFollowersInputObjectSchema } from './CollegeUpdateManyWithWhereWithoutFollowersInput.schema';
import { CollegeScalarWhereInputObjectSchema as CollegeScalarWhereInputObjectSchema } from './CollegeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutFollowersInputObjectSchema), z.lazy(() => CollegeCreateWithoutFollowersInputObjectSchema).array(), z.lazy(() => CollegeUncheckedCreateWithoutFollowersInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutFollowersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CollegeCreateOrConnectWithoutFollowersInputObjectSchema), z.lazy(() => CollegeCreateOrConnectWithoutFollowersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CollegeUpsertWithWhereUniqueWithoutFollowersInputObjectSchema), z.lazy(() => CollegeUpsertWithWhereUniqueWithoutFollowersInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => CollegeWhereUniqueInputObjectSchema), z.lazy(() => CollegeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CollegeWhereUniqueInputObjectSchema), z.lazy(() => CollegeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CollegeWhereUniqueInputObjectSchema), z.lazy(() => CollegeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CollegeWhereUniqueInputObjectSchema), z.lazy(() => CollegeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CollegeUpdateWithWhereUniqueWithoutFollowersInputObjectSchema), z.lazy(() => CollegeUpdateWithWhereUniqueWithoutFollowersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CollegeUpdateManyWithWhereWithoutFollowersInputObjectSchema), z.lazy(() => CollegeUpdateManyWithWhereWithoutFollowersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CollegeScalarWhereInputObjectSchema), z.lazy(() => CollegeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CollegeUpdateManyWithoutFollowersNestedInputObjectSchema: z.ZodType<Prisma.CollegeUpdateManyWithoutFollowersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateManyWithoutFollowersNestedInput>;
export const CollegeUpdateManyWithoutFollowersNestedInputObjectZodSchema = makeSchema();
