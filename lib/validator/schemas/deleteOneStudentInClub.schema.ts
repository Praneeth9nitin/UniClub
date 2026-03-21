import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubSelectObjectSchema as StudentInClubSelectObjectSchema } from './objects/StudentInClubSelect.schema';
import { StudentInClubIncludeObjectSchema as StudentInClubIncludeObjectSchema } from './objects/StudentInClubInclude.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './objects/StudentInClubWhereUniqueInput.schema';

export const StudentInClubDeleteOneSchema: z.ZodType<Prisma.StudentInClubDeleteArgs> = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), where: StudentInClubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudentInClubDeleteArgs>;

export const StudentInClubDeleteOneZodSchema = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), where: StudentInClubWhereUniqueInputObjectSchema }).strict();