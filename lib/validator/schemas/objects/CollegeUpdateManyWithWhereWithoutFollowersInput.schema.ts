import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeScalarWhereInputObjectSchema as CollegeScalarWhereInputObjectSchema } from './CollegeScalarWhereInput.schema';
import { CollegeUpdateManyMutationInputObjectSchema as CollegeUpdateManyMutationInputObjectSchema } from './CollegeUpdateManyMutationInput.schema';
import { CollegeUncheckedUpdateManyWithoutFollowersInputObjectSchema as CollegeUncheckedUpdateManyWithoutFollowersInputObjectSchema } from './CollegeUncheckedUpdateManyWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CollegeUpdateManyMutationInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateManyWithoutFollowersInputObjectSchema)])
}).strict();
export const CollegeUpdateManyWithWhereWithoutFollowersInputObjectSchema: z.ZodType<Prisma.CollegeUpdateManyWithWhereWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateManyWithWhereWithoutFollowersInput>;
export const CollegeUpdateManyWithWhereWithoutFollowersInputObjectZodSchema = makeSchema();
