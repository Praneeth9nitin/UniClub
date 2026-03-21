import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutFollowsInputObjectSchema as StudentCreateWithoutFollowsInputObjectSchema } from './StudentCreateWithoutFollowsInput.schema';
import { StudentUncheckedCreateWithoutFollowsInputObjectSchema as StudentUncheckedCreateWithoutFollowsInputObjectSchema } from './StudentUncheckedCreateWithoutFollowsInput.schema';
import { StudentCreateOrConnectWithoutFollowsInputObjectSchema as StudentCreateOrConnectWithoutFollowsInputObjectSchema } from './StudentCreateOrConnectWithoutFollowsInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutFollowsInputObjectSchema), z.lazy(() => StudentCreateWithoutFollowsInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutFollowsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutFollowsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutFollowsInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutFollowsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedCreateNestedManyWithoutFollowsInputObjectSchema: z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutFollowsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutFollowsInput>;
export const StudentUncheckedCreateNestedManyWithoutFollowsInputObjectZodSchema = makeSchema();
