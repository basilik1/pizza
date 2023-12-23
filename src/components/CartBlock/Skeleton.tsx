import ContentLoader from 'react-content-loader';
import styles from './CartBlock.module.scss';
import { useState, useEffect } from 'react';

const CartLoader = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const eventTarget = event.target as Window;
      setWidth(eventTarget.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        {width < 451 ? (
          <ContentLoader
            speed={1}
            width={'100%'}
            height={'100%'}
            viewBox="0 0 450 650"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="6" y="5" rx="10" ry="10" width="170" height="30" />
            <circle cx="50" cy="140" r="40" />
            <rect x="112" y="111" rx="10" ry="10" width="186" height="20" />
            <rect x="5" y="186" rx="10" ry="10" width="389" height="30" />
            <rect x="274" y="4" rx="10" ry="10" width="170" height="30" />
            <rect x="12" y="580" rx="10" ry="10" width="176" height="30" />
            <rect x="263" y="580" rx="10" ry="10" width="176" height="30" />
            <rect x="111" y="145" rx="10" ry="10" width="262" height="20" />
            <circle cx="47" cy="285" r="40" />
            <rect x="112" y="256" rx="10" ry="10" width="186" height="20" />
            <rect x="5" y="331" rx="10" ry="10" width="389" height="30" />
            <rect x="111" y="290" rx="10" ry="10" width="262" height="20" />
            <circle cx="46" cy="427" r="40" />
            <rect x="112" y="398" rx="10" ry="10" width="186" height="20" />
            <rect x="5" y="473" rx="10" ry="10" width="389" height="30" />
            <rect x="111" y="432" rx="10" ry="10" width="262" height="20" />
          </ContentLoader>
        ) : width < 900 ? (
          <ContentLoader
            speed={1}
            width={'100%'}
            height={'100%'}
            viewBox="0 0 580 650"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="6" y="5" rx="10" ry="10" width="170" height="30" />
            <circle cx="45" cy="178" r="40" />
            <rect x="117" y="148" rx="10" ry="10" width="262" height="25" />
            <rect x="117" y="186" rx="10" ry="10" width="437" height="30" />
            <rect x="402" y="10" rx="10" ry="10" width="170" height="30" />
            <circle cx="43" cy="295" r="40" />
            <rect x="115" y="265" rx="10" ry="10" width="262" height="25" />
            <rect x="115" y="303" rx="10" ry="10" width="437" height="30" />
            <circle cx="50" cy="415" r="40" />
            <rect x="122" y="385" rx="10" ry="10" width="262" height="25" />
            <rect x="122" y="423" rx="10" ry="10" width="437" height="30" />
            <rect x="22" y="573" rx="10" ry="10" width="176" height="45" />
            <rect x="395" y="572" rx="10" ry="10" width="176" height="45" />
          </ContentLoader>
        ) : (
          <ContentLoader
            speed={1}
            width={'100%'}
            height={'100%'}
            viewBox="0 0 800 650"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <circle cx="40" cy="137" r="40" />
            <rect x="485" y="140" rx="10" ry="10" width="310" height="30" />
            <rect x="100" y="110" rx="10" ry="10" width="150" height="25" />
            <rect x="100" y="143" rx="10" ry="10" width="250" height="30" />
            <circle cx="40" cy="266" r="40" />
            <rect x="485" y="270" rx="10" ry="10" width="310" height="30" />
            <rect x="100" y="240" rx="10" ry="10" width="150" height="25" />
            <rect x="100" y="272" rx="10" ry="10" width="250" height="30" />
            <circle cx="40" cy="396" r="40" />
            <rect x="485" y="400" rx="10" ry="10" width="310" height="30" />
            <rect x="100" y="370" rx="10" ry="10" width="150" height="25" />
            <rect x="100" y="402" rx="10" ry="10" width="250" height="30" />
            <rect x="5" y="595" rx="15" ry="15" width="155" height="55" />
            <rect x="5" y="5" rx="10" ry="10" width="150" height="45" />
            <rect x="620" y="595" rx="15" ry="15" width="155" height="55" />
            <rect x="620" y="5" rx="10" ry="10" width="180" height="45" />
          </ContentLoader>
        )}
      </div>
    </div>
  );
};
export default CartLoader;
