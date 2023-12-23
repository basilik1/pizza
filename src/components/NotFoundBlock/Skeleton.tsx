import ContentLoader from 'react-content-loader';
import styles from './NotFoundBlock.module.scss';

const NotFoundLoader = () => (
  <div className={styles.root}>
    <ContentLoader
      speed={1}
      width="100%"
      height={'100%'}
      viewBox="0 0 800 250"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="160" y="10" rx="10" ry="10" width="500" height="50" />
      <rect x="260" y="75" rx="10" ry="10" width="300" height="40" />
      <rect x="0" y="190" rx="10" ry="10" width="215" height="50" />
    </ContentLoader>
  </div>
);
export default NotFoundLoader;
