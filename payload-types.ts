/* eslint-disable */
/**
 * Placeholder until `npx payload generate:types` runs with a valid DATABASE_URL.
 * Regenerate after adding collections/globals in payload.config.ts.
 */
export interface Config {
  collections: Record<string, never>
  globals: Record<string, never>
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
