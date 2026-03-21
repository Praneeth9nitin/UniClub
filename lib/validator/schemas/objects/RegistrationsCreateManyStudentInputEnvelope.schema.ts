import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsCreateManyStudentInputObjectSchema as RegistrationsCreateManyStudentInputObjectSchema } from './RegistrationsCreateManyStudentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistrationsCreateManyStudentInputObjectSchema), z.lazy(() => RegistrationsCreateManyStudentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RegistrationsCreateManyStudentInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistrationsCreateManyStudentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateManyStudentInputEnvelope>;
export const RegistrationsCreateManyStudentInputEnvelopeObjectZodSchema = makeSchema();
