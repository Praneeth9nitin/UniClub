import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsCreateManyInputObjectSchema as RegistrationsCreateManyInputObjectSchema } from './objects/RegistrationsCreateManyInput.schema';

export const RegistrationsCreateManySchema: z.ZodType<Prisma.RegistrationsCreateManyArgs> = z.object({ data: z.union([ RegistrationsCreateManyInputObjectSchema, z.array(RegistrationsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationsCreateManyArgs>;

export const RegistrationsCreateManyZodSchema = z.object({ data: z.union([ RegistrationsCreateManyInputObjectSchema, z.array(RegistrationsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();