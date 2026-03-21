import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateManyCollegeInputObjectSchema as ClubCreateManyCollegeInputObjectSchema } from './ClubCreateManyCollegeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClubCreateManyCollegeInputObjectSchema), z.lazy(() => ClubCreateManyCollegeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClubCreateManyCollegeInputEnvelopeObjectSchema: z.ZodType<Prisma.ClubCreateManyCollegeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateManyCollegeInputEnvelope>;
export const ClubCreateManyCollegeInputEnvelopeObjectZodSchema = makeSchema();
