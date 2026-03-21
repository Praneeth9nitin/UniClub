import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultySelectObjectSchema as FacultySelectObjectSchema } from './objects/FacultySelect.schema';
import { FacultyUpdateManyMutationInputObjectSchema as FacultyUpdateManyMutationInputObjectSchema } from './objects/FacultyUpdateManyMutationInput.schema';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './objects/FacultyWhereInput.schema';

export const FacultyUpdateManyAndReturnSchema: z.ZodType<Prisma.FacultyUpdateManyAndReturnArgs> = z.object({ select: FacultySelectObjectSchema.optional(), data: FacultyUpdateManyMutationInputObjectSchema, where: FacultyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FacultyUpdateManyAndReturnArgs>;

export const FacultyUpdateManyAndReturnZodSchema = z.object({ select: FacultySelectObjectSchema.optional(), data: FacultyUpdateManyMutationInputObjectSchema, where: FacultyWhereInputObjectSchema.optional() }).strict();