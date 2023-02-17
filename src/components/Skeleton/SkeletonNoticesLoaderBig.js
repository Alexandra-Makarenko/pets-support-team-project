import React from 'react';
import ContentLoader from 'react-content-loader';

const NoticesLoaderBig = props => (
  <ContentLoader
    speed={2}
    width={288}
    height={610}
    viewBox="0 0 288 610"
    backgroundColor="#b5b5b5"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="288" height="288" />
    <rect x="20" y="308" rx="10" ry="10" width="248" height="20" />
    <rect x="20" y="404" rx="10" ry="10" width="248" height="14" />
    <rect x="20" y="346" rx="10" ry="10" width="248" height="20" />
    <rect x="20" y="426" rx="10" ry="10" width="248" height="14" />
    <rect x="20" y="448" rx="10" ry="10" width="248" height="14" />
    <rect x="20" y="470" rx="10" ry="10" width="248" height="14" />
    <rect x="44" y="512" rx="20" ry="20" width="200" height="42" />
  </ContentLoader>
);

export default NoticesLoaderBig;
