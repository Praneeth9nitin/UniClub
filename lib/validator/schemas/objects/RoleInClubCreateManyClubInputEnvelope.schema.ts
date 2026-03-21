import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubCreateManyClubInputObjectSchema as RoleInClubCreateManyClubInputObjectSchema } from './RoleInClubCreateManyClubInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RoleInClubCreateManyClubInputObjectSchema), z.lazy(() => RoleInClubCreateManyClubInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RoleInClubCreateManyClubInputEnvelopeObjectSchema: z.ZodType<Prisma.RoleInClubCreateManyClubInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateManyClubInputEnvelope>;
export const RoleInClubCreateManyClubInputEnvelopeObjectZodSchema = makeSchema();
