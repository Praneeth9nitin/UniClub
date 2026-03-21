import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsCreateManyEventInputObjectSchema as RegistrationsCreateManyEventInputObjectSchema } from './RegistrationsCreateManyEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistrationsCreateManyEventInputObjectSchema), z.lazy(() => RegistrationsCreateManyEventInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RegistrationsCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistrationsCreateManyEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateManyEventInputEnvelope>;
export const RegistrationsCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
