import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsWhereInputObjectSchema as RegistrationsWhereInputObjectSchema } from './RegistrationsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RegistrationsWhereInputObjectSchema).optional(),
  some: z.lazy(() => RegistrationsWhereInputObjectSchema).optional(),
  none: z.lazy(() => RegistrationsWhereInputObjectSchema).optional()
}).strict();
export const RegistrationsListRelationFilterObjectSchema: z.ZodType<Prisma.RegistrationsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsListRelationFilter>;
export const RegistrationsListRelationFilterObjectZodSchema = makeSchema();
