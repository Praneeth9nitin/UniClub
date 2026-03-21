import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutClubsInputObjectSchema as StudentCreateWithoutClubsInputObjectSchema } from './StudentCreateWithoutClubsInput.schema';
import { StudentUncheckedCreateWithoutClubsInputObjectSchema as StudentUncheckedCreateWithoutClubsInputObjectSchema } from './StudentUncheckedCreateWithoutClubsInput.schema';
import { StudentCreateOrConnectWithoutClubsInputObjectSchema as StudentCreateOrConnectWithoutClubsInputObjectSchema } from './StudentCreateOrConnectWithoutClubsInput.schema';
import { StudentUpsertWithoutClubsInputObjectSchema as StudentUpsertWithoutClubsInputObjectSchema } from './StudentUpsertWithoutClubsInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateToOneWithWhereWithoutClubsInputObjectSchema as StudentUpdateToOneWithWhereWithoutClubsInputObjectSchema } from './StudentUpdateToOneWithWhereWithoutClubsInput.schema';
import { StudentUpdateWithoutClubsInputObjectSchema as StudentUpdateWithoutClubsInputObjectSchema } from './StudentUpdateWithoutClubsInput.schema';
import { StudentUncheckedUpdateWithoutClubsInputObjectSchema as StudentUncheckedUpdateWithoutClubsInputObjectSchema } from './StudentUncheckedUpdateWithoutClubsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutClubsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutClubsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutClubsInputObjectSchema).optional(),
  upsert: z.lazy(() => StudentUpsertWithoutClubsInputObjectSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StudentUpdateToOneWithWhereWithoutClubsInputObjectSchema), z.lazy(() => StudentUpdateWithoutClubsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutClubsInputObjectSchema)]).optional()
}).strict();
export const StudentUpdateOneRequiredWithoutClubsNestedInputObjectSchema: z.ZodType<Prisma.StudentUpdateOneRequiredWithoutClubsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateOneRequiredWithoutClubsNestedInput>;
export const StudentUpdateOneRequiredWithoutClubsNestedInputObjectZodSchema = makeSchema();
