import BlogEntries from './blogEntries';
import Categories from './categories';
import styles from './categoryComponent.module.scss';
import Pagination from './pagination';
import { type Category } from '@/types/_blog/Category';

export default function CategoryComponent({
  data: { blogEntries, categories, totalCount },
  urlBasis,
  page = 1,
  selectedCategory,
}: {
  data: Category;
  urlBasis: string;
  page?: number;
  selectedCategory?: string;
}) {
  return (
    <section
      className={styles.categoryComponent}
      id='wpisy'
    >
      <header>
        <h2 className={styles.heading}>Kategorie</h2>
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          urlBasis={urlBasis}
          page={page}
          urlId='#wpisy'
        />
      </header>
      <BlogEntries blogEntries={blogEntries} />
      <Pagination
        currentPage={page}
        itemCount={totalCount}
        urlBasis={urlBasis}
        selectedCategory={selectedCategory}
        urlId='#wpisy'
      />
    </section>
  );
}
