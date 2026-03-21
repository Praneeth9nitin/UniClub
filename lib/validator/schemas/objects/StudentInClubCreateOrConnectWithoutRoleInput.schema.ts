import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubCreateWithoutRoleInputObjectSchema as StudentInClubCreateWithoutRoleInputObjectSchema } from './StudentInClubCreateWithoutRoleInput.schema';
import { StudentInClubUncheckedCreateWithoutRoleInputObjectSchema as StudentInClubUncheckedCreateWithoutRoleInputObjectSchema } from './StudentInClubUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentInClubCreateWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const StudentInClubCreateOrConnectWithoutRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateOrConnectWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateOrConnectWithoutRoleInput>;
export const StudentInClubCreateOrConnectWithoutRoleInputObjectZodSchema = makeSchema();
