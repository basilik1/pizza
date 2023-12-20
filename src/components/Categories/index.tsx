import { FC, memo } from 'react';
import { CategoriesList } from './CategoriesList';
import { ICategoriesProps } from '../interface/interface';
// import styles from './Categories.module.scss'

const Categories: FC<ICategoriesProps> = memo(({ value, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {CategoriesList.map((item, i) => (
          <li
            onClick={() => onClickCategory(item.id)}
            className={value === item.id ? 'active' : ''}
            key={i}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
