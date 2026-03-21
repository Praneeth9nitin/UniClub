import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutFollowsInputObjectSchema as StudentCreateWithoutFollowsInputObjectSchema } from './StudentCreateWithoutFollowsInput.schema';
import { StudentUncheckedCreateWithoutFollowsInputObjectSchema as StudentUncheckedCreateWithoutFollowsInputObjectSchema } from './StudentUncheckedCreateWithoutFollowsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentCreateWithoutFollowsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutFollowsInputObjectSchema)])
}).strict();
export const StudentCreateOrConnectWithoutFollowsInputObjectSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutFollowsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateOrConnectWithoutFollowsInput>;
export const StudentCreateOrConnectWithoutFollowsInputObjectZodSchema = makeSchema();
