import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutClubsInputObjectSchema as StudentCreateWithoutClubsInputObjectSchema } from './StudentCreateWithoutClubsInput.schema';
import { StudentUncheckedCreateWithoutClubsInputObjectSchema as StudentUncheckedCreateWithoutClubsInputObjectSchema } from './StudentUncheckedCreateWithoutClubsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentCreateWithoutClubsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutClubsInputObjectSchema)])
}).strict();
export const StudentCreateOrConnectWithoutClubsInputObjectSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateOrConnectWithoutClubsInput>;
export const StudentCreateOrConnectWithoutClubsInputObjectZodSchema = makeSchema();
