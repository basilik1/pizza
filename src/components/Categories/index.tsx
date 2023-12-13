import { FC /* useState */ } from 'react';

const Categories: FC = ({ value, onClickCategory }) => {
  // const [activeCategory, setActiveCategory] = useState(0);
  const categories = [
    { name: 'Все', id: 0 },
    { name: 'Мясные', id: 1 },
    { name: 'Вегетарианская', id: 2 },
    { name: 'Гриль', id: 3 },
    { name: 'Острые', id: 4 },
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
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
};

export default Categories;
