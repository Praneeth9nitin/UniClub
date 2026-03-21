import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminSelectObjectSchema as clubAdminSelectObjectSchema } from './objects/clubAdminSelect.schema';
import { clubAdminUpdateManyMutationInputObjectSchema as clubAdminUpdateManyMutationInputObjectSchema } from './objects/clubAdminUpdateManyMutationInput.schema';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './objects/clubAdminWhereInput.schema';

export const clubAdminUpdateManyAndReturnSchema: z.ZodType<Prisma.clubAdminUpdateManyAndReturnArgs> = z.object({ select: clubAdminSelectObjectSchema.optional(), data: clubAdminUpdateManyMutationInputObjectSchema, where: clubAdminWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.clubAdminUpdateManyAndReturnArgs>;

export const clubAdminUpdateManyAndReturnZodSchema = z.object({ select: clubAdminSelectObjectSchema.optional(), data: clubAdminUpdateManyMutationInputObjectSchema, where: clubAdminWhereInputObjectSchema.optional() }).strict();