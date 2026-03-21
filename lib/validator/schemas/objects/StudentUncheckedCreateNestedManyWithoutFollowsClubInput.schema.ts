import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutFollowsClubInputObjectSchema as StudentCreateWithoutFollowsClubInputObjectSchema } from './StudentCreateWithoutFollowsClubInput.schema';
import { StudentUncheckedCreateWithoutFollowsClubInputObjectSchema as StudentUncheckedCreateWithoutFollowsClubInputObjectSchema } from './StudentUncheckedCreateWithoutFollowsClubInput.schema';
import { StudentCreateOrConnectWithoutFollowsClubInputObjectSchema as StudentCreateOrConnectWithoutFollowsClubInputObjectSchema } from './StudentCreateOrConnectWithoutFollowsClubInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentCreateWithoutFollowsClubInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutFollowsClubInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutFollowsClubInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedCreateNestedManyWithoutFollowsClubInputObjectSchema: z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutFollowsClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutFollowsClubInput>;
export const StudentUncheckedCreateNestedManyWithoutFollowsClubInputObjectZodSchema = makeSchema();
