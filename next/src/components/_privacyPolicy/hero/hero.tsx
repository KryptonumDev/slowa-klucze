import Markdown from '@/components/ui/Markdown';

export default function Hero({ data: { hero_Title } }: { data: { hero_Title: string } }) {
  return (
    <section>
      <Markdown.h2>{hero_Title}</Markdown.h2>
    </section>
  );
}
