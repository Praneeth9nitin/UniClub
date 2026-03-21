import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutClubsInputObjectSchema as CollegeCreateWithoutClubsInputObjectSchema } from './CollegeCreateWithoutClubsInput.schema';
import { CollegeUncheckedCreateWithoutClubsInputObjectSchema as CollegeUncheckedCreateWithoutClubsInputObjectSchema } from './CollegeUncheckedCreateWithoutClubsInput.schema';
import { CollegeCreateOrConnectWithoutClubsInputObjectSchema as CollegeCreateOrConnectWithoutClubsInputObjectSchema } from './CollegeCreateOrConnectWithoutClubsInput.schema';
import { CollegeUpsertWithoutClubsInputObjectSchema as CollegeUpsertWithoutClubsInputObjectSchema } from './CollegeUpsertWithoutClubsInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeUpdateToOneWithWhereWithoutClubsInputObjectSchema as CollegeUpdateToOneWithWhereWithoutClubsInputObjectSchema } from './CollegeUpdateToOneWithWhereWithoutClubsInput.schema';
import { CollegeUpdateWithoutClubsInputObjectSchema as CollegeUpdateWithoutClubsInputObjectSchema } from './CollegeUpdateWithoutClubsInput.schema';
import { CollegeUncheckedUpdateWithoutClubsInputObjectSchema as CollegeUncheckedUpdateWithoutClubsInputObjectSchema } from './CollegeUncheckedUpdateWithoutClubsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutClubsInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutClubsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeCreateOrConnectWithoutClubsInputObjectSchema).optional(),
  upsert: z.lazy(() => CollegeUpsertWithoutClubsInputObjectSchema).optional(),
  connect: z.lazy(() => CollegeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CollegeUpdateToOneWithWhereWithoutClubsInputObjectSchema), z.lazy(() => CollegeUpdateWithoutClubsInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutClubsInputObjectSchema)]).optional()
}).strict();
export const CollegeUpdateOneRequiredWithoutClubsNestedInputObjectSchema: z.ZodType<Prisma.CollegeUpdateOneRequiredWithoutClubsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateOneRequiredWithoutClubsNestedInput>;
export const CollegeUpdateOneRequiredWithoutClubsNestedInputObjectZodSchema = makeSchema();
