import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block-wrapper"
    speed={1}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
  >
    <path d="M 81.842 42.546 c 2.42 0 4.78 -0.075 6.888 -0.234 a 0.612 0.612 0 1.662 0.61 v 11.594 a 0.61 0.61 0 1 -0.517 0.606 c -2.094 0.316 -4.556 0.465 -7.033 0.465 c -3.98 0 -7.944 -0.373 -10.362 -1.23 V 41.944 c 2.76 0.419 6.497 0.603 10.362 0.603 z" />
    <rect x="143" y="75" rx="0" ry="0" width="1" height="0" />
    <circle cx="136" cy="133" r="120" />
    <rect x="15" y="256" rx="10" ry="10" width="250" height="25" />
    <rect x="15" y="293" rx="10" ry="10" width="250" height="80" />
    <rect x="142" y="388" rx="20" ry="20" width="125" height="45" />
    <rect x="15" y="397" rx="8" ry="8" width="80" height="25" />
  </ContentLoader>
);

export default Skeleton;
