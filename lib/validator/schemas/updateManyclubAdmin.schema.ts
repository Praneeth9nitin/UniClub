import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminUpdateManyMutationInputObjectSchema as clubAdminUpdateManyMutationInputObjectSchema } from './objects/clubAdminUpdateManyMutationInput.schema';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './objects/clubAdminWhereInput.schema';

export const clubAdminUpdateManySchema: z.ZodType<Prisma.clubAdminUpdateManyArgs> = z.object({ data: clubAdminUpdateManyMutationInputObjectSchema, where: clubAdminWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.clubAdminUpdateManyArgs>;

export const clubAdminUpdateManyZodSchema = z.object({ data: clubAdminUpdateManyMutationInputObjectSchema, where: clubAdminWhereInputObjectSchema.optional() }).strict();