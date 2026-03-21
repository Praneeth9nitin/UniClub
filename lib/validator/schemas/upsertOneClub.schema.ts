import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubSelectObjectSchema as ClubSelectObjectSchema } from './objects/ClubSelect.schema';
import { ClubIncludeObjectSchema as ClubIncludeObjectSchema } from './objects/ClubInclude.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './objects/ClubWhereUniqueInput.schema';
import { ClubCreateInputObjectSchema as ClubCreateInputObjectSchema } from './objects/ClubCreateInput.schema';
import { ClubUncheckedCreateInputObjectSchema as ClubUncheckedCreateInputObjectSchema } from './objects/ClubUncheckedCreateInput.schema';
import { ClubUpdateInputObjectSchema as ClubUpdateInputObjectSchema } from './objects/ClubUpdateInput.schema';
import { ClubUncheckedUpdateInputObjectSchema as ClubUncheckedUpdateInputObjectSchema } from './objects/ClubUncheckedUpdateInput.schema';

export const ClubUpsertOneSchema: z.ZodType<Prisma.ClubUpsertArgs> = z.object({ select: ClubSelectObjectSchema.optional(), include: ClubIncludeObjectSchema.optional(), where: ClubWhereUniqueInputObjectSchema, create: z.union([ ClubCreateInputObjectSchema, ClubUncheckedCreateInputObjectSchema ]), update: z.union([ ClubUpdateInputObjectSchema, ClubUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ClubUpsertArgs>;

export const ClubUpsertOneZodSchema = z.object({ select: ClubSelectObjectSchema.optional(), include: ClubIncludeObjectSchema.optional(), where: ClubWhereUniqueInputObjectSchema, create: z.union([ ClubCreateInputObjectSchema, ClubUncheckedCreateInputObjectSchema ]), update: z.union([ ClubUpdateInputObjectSchema, ClubUncheckedUpdateInputObjectSchema ]) }).strict();