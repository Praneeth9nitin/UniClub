import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateWithoutRoleInputObjectSchema as StudentInClubCreateWithoutRoleInputObjectSchema } from './StudentInClubCreateWithoutRoleInput.schema';
import { StudentInClubUncheckedCreateWithoutRoleInputObjectSchema as StudentInClubUncheckedCreateWithoutRoleInputObjectSchema } from './StudentInClubUncheckedCreateWithoutRoleInput.schema';
import { StudentInClubCreateOrConnectWithoutRoleInputObjectSchema as StudentInClubCreateOrConnectWithoutRoleInputObjectSchema } from './StudentInClubCreateOrConnectWithoutRoleInput.schema';
import { StudentInClubCreateManyRoleInputEnvelopeObjectSchema as StudentInClubCreateManyRoleInputEnvelopeObjectSchema } from './StudentInClubCreateManyRoleInputEnvelope.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentInClubCreateWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => StudentInClubUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentInClubCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentInClubCreateManyRoleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudentInClubUncheckedCreateNestedManyWithoutRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubUncheckedCreateNestedManyWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUncheckedCreateNestedManyWithoutRoleInput>;
export const StudentInClubUncheckedCreateNestedManyWithoutRoleInputObjectZodSchema = makeSchema();
