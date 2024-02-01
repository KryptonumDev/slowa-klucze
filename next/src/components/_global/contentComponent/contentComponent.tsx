import PortableContent from '../portableContent/portableContent';
import TableOfContent from '../tableOfContent';
import ContentSection from './contentSection';
import { generateTableOfContent } from '@/utils/functions';
import { type Node } from '@/types/_global/Node';

export default function contentComponent({ data }: { data: Node[] }) {
  const content = generateTableOfContent(data);
  return (
    <ContentSection >
      <PortableContent data={data} />
      <TableOfContent content={content} />
    </ContentSection>
  );
}
