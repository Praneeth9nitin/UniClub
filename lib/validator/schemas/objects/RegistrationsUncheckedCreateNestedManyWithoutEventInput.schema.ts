import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsCreateWithoutEventInputObjectSchema as RegistrationsCreateWithoutEventInputObjectSchema } from './RegistrationsCreateWithoutEventInput.schema';
import { RegistrationsUncheckedCreateWithoutEventInputObjectSchema as RegistrationsUncheckedCreateWithoutEventInputObjectSchema } from './RegistrationsUncheckedCreateWithoutEventInput.schema';
import { RegistrationsCreateOrConnectWithoutEventInputObjectSchema as RegistrationsCreateOrConnectWithoutEventInputObjectSchema } from './RegistrationsCreateOrConnectWithoutEventInput.schema';
import { RegistrationsCreateManyEventInputEnvelopeObjectSchema as RegistrationsCreateManyEventInputEnvelopeObjectSchema } from './RegistrationsCreateManyEventInputEnvelope.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistrationsCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationsCreateWithoutEventInputObjectSchema).array(), z.lazy(() => RegistrationsUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationsUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistrationsCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => RegistrationsCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistrationsCreateManyEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistrationsUncheckedCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationsUncheckedCreateNestedManyWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUncheckedCreateNestedManyWithoutEventInput>;
export const RegistrationsUncheckedCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
