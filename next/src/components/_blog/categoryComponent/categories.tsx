'use client';

import { type MouseEvent, type TouchEvent, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './categoryComponent.module.scss';
import { type Categories } from '@/types/_global/Categories';

export default function Categories({
  categories,
  selectedCategory,
  urlBasis,
  page = 1,
  urlId,
}: {
  categories: Categories[];
  selectedCategory?: string;
  urlBasis?: string;
  page?: number;
  urlId?: string;
}) {
  const categoriesRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleDragMove = (pageX, elementRef: React.RefObject<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = pageX - elementRef.current.offsetLeft;
    const walk = x - startX;
    elementRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragStart = (pageX, elementRef: React.RefObject<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(pageX - elementRef.current.offsetLeft);
    setScrollLeft(elementRef.current.scrollLeft);
  };

  const handleInteractionStart = (event: MouseEvent | TouchEvent, elementRef: React.RefObject<HTMLDivElement>) => {
    handleDragStart((event as MouseEvent).pageX || (event as TouchEvent).touches[0].pageX, elementRef);
  };

  const handleInteractionMove = (event: MouseEvent | TouchEvent, elementRef: React.RefObject<HTMLDivElement>) => {
    handleDragMove((event as MouseEvent).pageX || (event as TouchEvent).touches[0].pageX, elementRef);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={styles.categories}
      ref={categoriesRef}
      onMouseDown={(event: MouseEvent) => handleInteractionStart(event, categoriesRef)}
      onMouseMove={(event: MouseEvent) => handleInteractionMove(event, categoriesRef)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(event: TouchEvent) => handleInteractionStart(event, categoriesRef)}
      onTouchMove={(event: TouchEvent) => handleInteractionMove(event, categoriesRef)}
      onTouchEnd={handleDragEnd}
    >
      {categories.map(({ name, slug }, i) => (
        <div
          className={styles.item}
          key={i}
          data-selected={slug.current == selectedCategory}
        >
          <Link
            href={
              slug.current != selectedCategory
                ? page == 1
                  ? `${urlBasis}/kategoria/${slug.current}/${urlId}`
                  : `${urlBasis}/kategoria/${slug.current}/${page}/${urlId}`
                : page == 1
                  ? `${urlBasis}/${urlId}`
                  : `${urlBasis}/strona/${page}/${urlId}`
            }
            className={styles.link}
          >
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}
