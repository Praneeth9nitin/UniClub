import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminSelectObjectSchema as clubAdminSelectObjectSchema } from './objects/clubAdminSelect.schema';
import { clubAdminIncludeObjectSchema as clubAdminIncludeObjectSchema } from './objects/clubAdminInclude.schema';
import { clubAdminUpdateInputObjectSchema as clubAdminUpdateInputObjectSchema } from './objects/clubAdminUpdateInput.schema';
import { clubAdminUncheckedUpdateInputObjectSchema as clubAdminUncheckedUpdateInputObjectSchema } from './objects/clubAdminUncheckedUpdateInput.schema';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './objects/clubAdminWhereUniqueInput.schema';

export const clubAdminUpdateOneSchema: z.ZodType<Prisma.clubAdminUpdateArgs> = z.object({ select: clubAdminSelectObjectSchema.optional(), include: clubAdminIncludeObjectSchema.optional(), data: z.union([clubAdminUpdateInputObjectSchema, clubAdminUncheckedUpdateInputObjectSchema]), where: clubAdminWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.clubAdminUpdateArgs>;

export const clubAdminUpdateOneZodSchema = z.object({ select: clubAdminSelectObjectSchema.optional(), include: clubAdminIncludeObjectSchema.optional(), data: z.union([clubAdminUpdateInputObjectSchema, clubAdminUncheckedUpdateInputObjectSchema]), where: clubAdminWhereUniqueInputObjectSchema }).strict();