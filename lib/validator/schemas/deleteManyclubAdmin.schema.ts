import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './objects/clubAdminWhereInput.schema';

export const clubAdminDeleteManySchema: z.ZodType<Prisma.clubAdminDeleteManyArgs> = z.object({ where: clubAdminWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.clubAdminDeleteManyArgs>;

export const clubAdminDeleteManyZodSchema = z.object({ where: clubAdminWhereInputObjectSchema.optional() }).strict();