import {
  toTypedRxJsonSchema,
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  RxCollection,
} from 'rxdb';

const userSchemaLiteral = {
  title: 'hero schema',
  version: 0,
  description: 'describes a simple hero',
  primaryKey: 'name',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 100,
    },
    surname: {
      type: 'string',
    },
  },
} as const;

const schemaTyped = toTypedRxJsonSchema(userSchemaLiteral);

// aggregate the document type from the schema
export type UserDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;

// create the typed RxJsonSchema from the literal typed object.
export const userSchema: RxJsonSchema<UserDocType> = userSchemaLiteral;


export type UserCollection = RxCollection<UserDocType>;