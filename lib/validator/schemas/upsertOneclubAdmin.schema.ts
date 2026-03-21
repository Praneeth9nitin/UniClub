import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminSelectObjectSchema as clubAdminSelectObjectSchema } from './objects/clubAdminSelect.schema';
import { clubAdminIncludeObjectSchema as clubAdminIncludeObjectSchema } from './objects/clubAdminInclude.schema';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './objects/clubAdminWhereUniqueInput.schema';
import { clubAdminCreateInputObjectSchema as clubAdminCreateInputObjectSchema } from './objects/clubAdminCreateInput.schema';
import { clubAdminUncheckedCreateInputObjectSchema as clubAdminUncheckedCreateInputObjectSchema } from './objects/clubAdminUncheckedCreateInput.schema';
import { clubAdminUpdateInputObjectSchema as clubAdminUpdateInputObjectSchema } from './objects/clubAdminUpdateInput.schema';
import { clubAdminUncheckedUpdateInputObjectSchema as clubAdminUncheckedUpdateInputObjectSchema } from './objects/clubAdminUncheckedUpdateInput.schema';

export const clubAdminUpsertOneSchema: z.ZodType<Prisma.clubAdminUpsertArgs> = z.object({ select: clubAdminSelectObjectSchema.optional(), include: clubAdminIncludeObjectSchema.optional(), where: clubAdminWhereUniqueInputObjectSchema, create: z.union([ clubAdminCreateInputObjectSchema, clubAdminUncheckedCreateInputObjectSchema ]), update: z.union([ clubAdminUpdateInputObjectSchema, clubAdminUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.clubAdminUpsertArgs>;

export const clubAdminUpsertOneZodSchema = z.object({ select: clubAdminSelectObjectSchema.optional(), include: clubAdminIncludeObjectSchema.optional(), where: clubAdminWhereUniqueInputObjectSchema, create: z.union([ clubAdminCreateInputObjectSchema, clubAdminUncheckedCreateInputObjectSchema ]), update: z.union([ clubAdminUpdateInputObjectSchema, clubAdminUncheckedUpdateInputObjectSchema ]) }).strict();