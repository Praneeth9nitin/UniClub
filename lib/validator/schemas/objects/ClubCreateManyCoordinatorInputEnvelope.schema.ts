import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateManyCoordinatorInputObjectSchema as ClubCreateManyCoordinatorInputObjectSchema } from './ClubCreateManyCoordinatorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClubCreateManyCoordinatorInputObjectSchema), z.lazy(() => ClubCreateManyCoordinatorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClubCreateManyCoordinatorInputEnvelopeObjectSchema: z.ZodType<Prisma.ClubCreateManyCoordinatorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateManyCoordinatorInputEnvelope>;
export const ClubCreateManyCoordinatorInputEnvelopeObjectZodSchema = makeSchema();
