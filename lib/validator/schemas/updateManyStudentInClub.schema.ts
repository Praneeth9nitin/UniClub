import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubUpdateManyMutationInputObjectSchema as StudentInClubUpdateManyMutationInputObjectSchema } from './objects/StudentInClubUpdateManyMutationInput.schema';
import { StudentInClubWhereInputObjectSchema as StudentInClubWhereInputObjectSchema } from './objects/StudentInClubWhereInput.schema';

export const StudentInClubUpdateManySchema: z.ZodType<Prisma.StudentInClubUpdateManyArgs> = z.object({ data: StudentInClubUpdateManyMutationInputObjectSchema, where: StudentInClubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudentInClubUpdateManyArgs>;

export const StudentInClubUpdateManyZodSchema = z.object({ data: StudentInClubUpdateManyMutationInputObjectSchema, where: StudentInClubWhereInputObjectSchema.optional() }).strict();