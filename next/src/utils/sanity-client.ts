import { createClient as createSanityClient } from 'next-sanity';
import type { SanityClient, QueryParams } from '@sanity/client';

interface CreateClientConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
}

type CreateClient = (config: CreateClientConfig) => SanityClient;

const createClient = createSanityClient as CreateClient;

const projectId = process.env.SANITY_PROJECT_ID || '';
const dataset = process.env.SANITY_DATASET || '';
const apiVersion = 'v2024-01-16';

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const DEFAULT_PARAMS = {} as QueryParams;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  isDraftMode = false,
}: {
  query: string;
  params?: QueryParams;
  isDraftMode?: boolean;
}): Promise<QueryResponse> {
  return await client.fetch<QueryResponse>(query, params, {
    token: process.env.SANITY_API_TOKEN,
    perspective: 'previewDrafts',
    next: {
      revalidate: isDraftMode ? 0 : 30,
    },
  });
}
