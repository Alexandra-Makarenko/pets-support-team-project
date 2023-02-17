import React from 'react';
import ContentLoader from 'react-content-loader';

const NewsLoaderSmall = props => (
  <ContentLoader
    speed={2}
    viewBox="0 0 380 320"
    backgroundColor="#b5b5b5"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="380" height="24" />
    <rect x="0" y="33" rx="10" ry="10" width="380" height="24" />
    <rect x="0" y="66" rx="10" ry="10" width="380" height="24" />
    <rect x="0" y="105" rx="10" ry="10" width="380" height="154" />
    <rect x="0" y="293" rx="10" ry="10" width="380" height="24" />
  </ContentLoader>
);

export default NewsLoaderSmall;
