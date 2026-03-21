import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubUpdateManyMutationInputObjectSchema as ClubUpdateManyMutationInputObjectSchema } from './objects/ClubUpdateManyMutationInput.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './objects/ClubWhereInput.schema';

export const ClubUpdateManySchema: z.ZodType<Prisma.ClubUpdateManyArgs> = z.object({ data: ClubUpdateManyMutationInputObjectSchema, where: ClubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClubUpdateManyArgs>;

export const ClubUpdateManyZodSchema = z.object({ data: ClubUpdateManyMutationInputObjectSchema, where: ClubWhereInputObjectSchema.optional() }).strict();