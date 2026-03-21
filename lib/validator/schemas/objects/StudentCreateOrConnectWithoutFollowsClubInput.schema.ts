import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutFollowsClubInputObjectSchema as StudentCreateWithoutFollowsClubInputObjectSchema } from './StudentCreateWithoutFollowsClubInput.schema';
import { StudentUncheckedCreateWithoutFollowsClubInputObjectSchema as StudentUncheckedCreateWithoutFollowsClubInputObjectSchema } from './StudentUncheckedCreateWithoutFollowsClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentCreateWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutFollowsClubInputObjectSchema)])
}).strict();
export const StudentCreateOrConnectWithoutFollowsClubInputObjectSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutFollowsClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateOrConnectWithoutFollowsClubInput>;
export const StudentCreateOrConnectWithoutFollowsClubInputObjectZodSchema = makeSchema();
