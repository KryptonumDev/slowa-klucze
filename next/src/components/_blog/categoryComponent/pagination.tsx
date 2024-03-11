import Link from 'next/link';
import { useMemo } from 'react';
import { blogsPerPage } from '../../../app-config';
import styles from './categoryComponent.module.scss';

export default function Pagination({
  currentPage,
  itemCount,
  urlBasis,
  selectedCategory,
  urlId,
}: {
  currentPage: number;
  itemCount: number;
  urlBasis: string;
  selectedCategory: string;
  urlId: string;
}) {
  const pagesCount = useMemo(() => {
    return Math.ceil(itemCount / Number(blogsPerPage));
  }, [itemCount]);

  const buttons = useMemo(() => {
    const arr = [];
    for (let i = 0; i < pagesCount; i++) {
      arr.push(i + 1);
    }
    return arr as number[];
  }, [pagesCount]);

  if (pagesCount < 2) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.center}>
        {pagesCount < 6 ? (
          <>
            {buttons.map((el) => (
              <Link
                className={currentPage === el ? styles.active : ''}
                key={el}
                href={
                  selectedCategory
                    ? el === 1
                      ? `${urlBasis}/kategoria/${selectedCategory}/${urlId}`
                      : `${urlBasis}/kategoria/${selectedCategory}/${el}/${urlId}`
                    : el === 1
                      ? `${urlBasis}/${urlId}`
                      : `${urlBasis}/strona/${el}/${urlId}`
                }
              >
                {el}
              </Link>
            ))}
          </>
        ) : (
          <>
            {currentPage > 3 && (
              <Link
                className={currentPage === 1 ? styles.active : ''}
                href={selectedCategory ? `${urlBasis}/kategoria/${selectedCategory}/${urlId}` : `${urlBasis}/${urlId}`}
              >
                {1}
              </Link>
            )}
            {currentPage > 4 && <div className={styles.not}>...</div>}

            {buttons.map((el, index) => {
              if (currentPage < 4 && index < 6) {
                return (
                  <Link
                    className={currentPage === el ? styles.active : ''}
                    key={el}
                    href={
                      selectedCategory
                        ? el === 1
                          ? `${urlBasis}/kategoria/${selectedCategory}/${urlId}`
                          : `${urlBasis}/kategoria/${selectedCategory}/${el}/${urlId}`
                        : el === 1
                          ? `${urlBasis}/${urlId}`
                          : `${urlBasis}/strona/${el}/${urlId}`
                    }
                  >
                    {el}
                  </Link>
                );
              }
              if (currentPage > pagesCount - 3 && index > pagesCount - 7) {
                return (
                  <Link
                    className={currentPage === el ? styles.active : ''}
                    key={el}
                    href={
                      selectedCategory
                        ? `${urlBasis}/kategoria/${selectedCategory}/${el}/${urlId}`
                        : `${urlBasis}/strona/${el}/${urlId}`
                    }
                  >
                    {el}
                  </Link>
                );
              }
              if (index >= currentPage - 3 && index <= currentPage + 1) {
                return (
                  <Link
                    href={
                      selectedCategory
                        ? `${urlBasis}/kategoria/${selectedCategory}/${el}/${urlId}`
                        : `${urlBasis}/strona/${el}/${urlId}`
                    }
                    className={currentPage === el ? styles.active : ''}
                    key={el}
                  >
                    {el}
                  </Link>
                );
              }
              return null;
            })}

            {(currentPage === 1 || pagesCount - currentPage > 3) && <div className={styles.not}>...</div>}
            {(currentPage === 1 || pagesCount - currentPage > 2) && (
              <Link
                href={
                  selectedCategory
                    ? `${urlBasis}/kategoria/${selectedCategory}/${pagesCount}/${urlId}`
                    : `${urlBasis}/strona/${pagesCount}/${urlId}`
                }
                className={currentPage === pagesCount ? styles.active : ''}
              >
                {pagesCount}
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}
