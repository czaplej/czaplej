import React, { Fragment } from 'react';

import { LinkHorizontal } from '@visx/shape';

function Link({ data, linkType, layout, orientation, stepPercent, ...props }) {
  return (
    <LinkHorizontal
      data={data}
      percent={stepPercent}
      stroke="#374469"
      strokeWidth="1"
      fill="none"
      {...props}
    />
  );
}

export default Link;
