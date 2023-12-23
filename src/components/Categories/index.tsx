import { FC, memo } from 'react';
import { CategoriesList } from './CategoriesList';
import { ICategoriesProps } from '../interface/interface';
import styles from './Categories.module.scss';

export const Categories: FC<ICategoriesProps> = memo(
  ({ value, onClickCategory }) => {
    return (
      <div className={styles.categories}>
        <ul>
          {CategoriesList.map((item, i) => (
            <li
              onClick={() => onClickCategory(item.id)}
              className={value === item.id ? `${styles.active}` : ''}
              key={i}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
