import React from 'react';

import { wrapIcon } from '../wrapIcon';

export default wrapIcon(function AdvisorIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <title>Advisor Icon</title>
      <path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 9c4.42 0 8 2.387 8 5.333V20H4v-2.667C4 14.387 7.58 12 12 12z" />
    </svg>
  );
});
