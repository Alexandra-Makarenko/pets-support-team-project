import React from 'react';
import ContentLoader from 'react-content-loader';

const FriendsLoaderSmall = props => (
  <ContentLoader
    speed={2}
    viewBox="0 0 280 192"
    backgroundColor="#b5b5b5"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="20" y="16" rx="8" ry="8" width="240" height="12" />
    <rect x="4" y="40" rx="20" ry="20" width="110" height="78" />
    <rect x="126" y="40" rx="5" ry="5" width="35" height="8" />
    <rect x="126" y="56" rx="5" ry="5" width="70" height="8" />
    <rect x="126" y="76" rx="5" ry="5" width="60" height="8" />
    <rect x="126" y="92" rx="5" ry="5" width="100" height="8" />
    <rect x="126" y="112" rx="5" ry="5" width="40" height="8" />
    <rect x="126" y="126" rx="5" ry="5" width="90" height="8" />
    <rect x="126" y="148" rx="5" ry="5" width="46" height="8" />
    <rect x="126" y="164" rx="5" ry="5" width="80" height="8" />
  </ContentLoader>
);

export default FriendsLoaderSmall;
