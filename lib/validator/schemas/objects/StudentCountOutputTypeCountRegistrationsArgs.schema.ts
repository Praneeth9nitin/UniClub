import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsWhereInputObjectSchema as RegistrationsWhereInputObjectSchema } from './RegistrationsWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationsWhereInputObjectSchema).optional()
}).strict();
export const StudentCountOutputTypeCountRegistrationsArgsObjectSchema = makeSchema();
export const StudentCountOutputTypeCountRegistrationsArgsObjectZodSchema = makeSchema();
