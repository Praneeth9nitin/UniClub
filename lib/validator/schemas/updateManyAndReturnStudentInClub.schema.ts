import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubSelectObjectSchema as StudentInClubSelectObjectSchema } from './objects/StudentInClubSelect.schema';
import { StudentInClubUpdateManyMutationInputObjectSchema as StudentInClubUpdateManyMutationInputObjectSchema } from './objects/StudentInClubUpdateManyMutationInput.schema';
import { StudentInClubWhereInputObjectSchema as StudentInClubWhereInputObjectSchema } from './objects/StudentInClubWhereInput.schema';

export const StudentInClubUpdateManyAndReturnSchema: z.ZodType<Prisma.StudentInClubUpdateManyAndReturnArgs> = z.object({ select: StudentInClubSelectObjectSchema.optional(), data: StudentInClubUpdateManyMutationInputObjectSchema, where: StudentInClubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudentInClubUpdateManyAndReturnArgs>;

export const StudentInClubUpdateManyAndReturnZodSchema = z.object({ select: StudentInClubSelectObjectSchema.optional(), data: StudentInClubUpdateManyMutationInputObjectSchema, where: StudentInClubWhereInputObjectSchema.optional() }).strict();