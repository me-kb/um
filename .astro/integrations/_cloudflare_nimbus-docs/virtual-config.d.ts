declare module "virtual:nimbus/agent-capabilities" {
  export const capabilities: import("@cloudflare/nimbus-docs/types").AgentCapabilities;
  export const options: { site: string; title: string; base: string; output: "static" | "server" };
}
declare module "virtual:nimbus/config" {
  import type { RuntimeNimbusConfig, VersionAlternatesTable } from "@cloudflare/nimbus-docs/types";
  /** The validated config, with `sources` reduced to each source's `ref` and `editPattern`. */
  export const config: RuntimeNimbusConfig;
  /** The page-collection list: collections made with Nimbus's helpers, plus API collections. See `getIndexedEntries()`. */
  export const indexedCollections: readonly string[];
  /** Page collections a partial build left empty on purpose. Empty in a full build and in dev. */
  export const emptyCollections: readonly string[];
  /** Whether `content.config.ts` provably declares no `docs` collection. */
  export const primaryCollectionAbsent: boolean;
  /** The Pagefind bundle to load and the other slices' bundles to merge into it (none in a whole-site build): served URLs, base included. */
  export const searchIndex: { bundle: string; merge: readonly string[] };
  /** Collections whose canonical routes render on request. Build-only. */
  export const requestRenderingCollections: readonly string[];
  /** Build-time cross-version alternates table. See `getVersionAlternates()`. */
  export const versionAlternates: VersionAlternatesTable;
  /** Subset of `indexedCollections` that are OpenAPI reference collections. Server-only. */
  export const apiCollections: readonly string[];
  /** [collection, where it's served] for collections served by a route helper. */
  export const collectionRoutes: ReadonlyArray<[string, { mount: string; file?: string; aliases: string[] }]>;
  export const unreadCollectionRoutes: ReadonlyArray<{ folder: string; file: string }>;
  export const nestedLlmsSections: boolean;
  /** Build-time defaults derived from Astro's public directory. */
  export const headDefaults: { favicon: { file: string; type: string }; socialImage: string; ogCard: { sitePath: string; pagePrefix: string; size: { width: number; height: number } }; imageSizes: Record<string, { width: number; height: number }> };
}
