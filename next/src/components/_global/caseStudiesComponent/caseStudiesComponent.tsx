import styles from './caseStudiesComponent.module.scss';
import Heading from '@/components/ui/heading/Heading';
import { type CaseStudies } from '@/types/_global/CaseStudies';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';
import Quote from '@/components/ui/quote/quote';

export default function CaseStudiesComponent({
  data: { heading, subheading, description, projects },
}: {
  data: CaseStudies;
}) {
  return (
    <section className={styles.caseStudiesComponent}>
      <header>
        <Heading type='h2'>{heading}</Heading>
        <Markdown.h2 className={styles.subheading}>{subheading}</Markdown.h2>
        <Markdown className={styles.description}>{description}</Markdown>
      </header>
      <div className={styles.items}>
        {projects.map(({ assumptions, heading, quote, projectContent, projectName }, i) => (
          <div
            className={styles.item}
            key={i}
          >
            <div className={styles.projectAssumptions}>
              <Markdown.h2 className={styles.heading}>{heading}</Markdown.h2>
              <div className={styles.items}>
                {assumptions.map(({ image, description }, i) => (
                  <div
                    className={styles.item}
                    key={i}
                  >
                    <Img
                      className={styles.icon}
                      data={image}
                    />
                    <Markdown className={styles.description}>{description}</Markdown>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.nameWrapper}>
              <Markdown className={styles.name}>{projectName}</Markdown>
            </div>
            <div className={styles.content}>
              {projectContent.map(({ image, description, title }, i) => (
                <div
                  className={styles.item}
                  key={i}
                >
                  <Markdown.h2 className={styles.heading}>{title}</Markdown.h2>
                  <Markdown className={styles.description}>{description}</Markdown>
                  <Img
                    className={styles.image}
                    data={image}
                  />
                </div>
              ))}
            </div>
            <Quote data={quote} />
          </div>
        ))}
      </div>
    </section>
  );
}
