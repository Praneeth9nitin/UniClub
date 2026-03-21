import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultyUpdateManyMutationInputObjectSchema as FacultyUpdateManyMutationInputObjectSchema } from './objects/FacultyUpdateManyMutationInput.schema';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './objects/FacultyWhereInput.schema';

export const FacultyUpdateManySchema: z.ZodType<Prisma.FacultyUpdateManyArgs> = z.object({ data: FacultyUpdateManyMutationInputObjectSchema, where: FacultyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FacultyUpdateManyArgs>;

export const FacultyUpdateManyZodSchema = z.object({ data: FacultyUpdateManyMutationInputObjectSchema, where: FacultyWhereInputObjectSchema.optional() }).strict();