import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutClubsInputObjectSchema as StudentCreateWithoutClubsInputObjectSchema } from './StudentCreateWithoutClubsInput.schema';
import { StudentUncheckedCreateWithoutClubsInputObjectSchema as StudentUncheckedCreateWithoutClubsInputObjectSchema } from './StudentUncheckedCreateWithoutClubsInput.schema';
import { StudentCreateOrConnectWithoutClubsInputObjectSchema as StudentCreateOrConnectWithoutClubsInputObjectSchema } from './StudentCreateOrConnectWithoutClubsInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutClubsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutClubsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutClubsInputObjectSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputObjectSchema).optional()
}).strict();
export const StudentCreateNestedOneWithoutClubsInputObjectSchema: z.ZodType<Prisma.StudentCreateNestedOneWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateNestedOneWithoutClubsInput>;
export const StudentCreateNestedOneWithoutClubsInputObjectZodSchema = makeSchema();
