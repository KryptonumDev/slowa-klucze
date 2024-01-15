import { sanityFetch } from '@/utils/sanity-client';

export default function IndexPage() {
  const test = getData();
  return <div></div>;
}

async function getData() {
  const data = await sanityFetch<unknown>({
    query: `*[]`,
  });
  //console.log(data);
  return data;
}
