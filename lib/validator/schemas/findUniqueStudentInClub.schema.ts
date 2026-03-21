import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubSelectObjectSchema as StudentInClubSelectObjectSchema } from './objects/StudentInClubSelect.schema';
import { StudentInClubIncludeObjectSchema as StudentInClubIncludeObjectSchema } from './objects/StudentInClubInclude.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './objects/StudentInClubWhereUniqueInput.schema';

export const StudentInClubFindUniqueSchema: z.ZodType<Prisma.StudentInClubFindUniqueArgs> = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), where: StudentInClubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudentInClubFindUniqueArgs>;

export const StudentInClubFindUniqueZodSchema = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), where: StudentInClubWhereUniqueInputObjectSchema }).strict();