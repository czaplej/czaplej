import React, { Fragment } from 'react';
import { Group } from '@visx/group';

import { Node } from './Node';
import { getTopLeft } from './utils';

export function Nodes({ nodes, layout, orientation, onNodeClick }) {
  return (
    <Fragment>
      {nodes.map((node, i) => (
        <Group {...getTopLeft(node, layout, orientation)} key={i}>
          <Node
            node={node}
            layout={layout}
            orientation={orientation}
            onClick={() => onNodeClick(node)}
          />
        </Group>
      ))}
    </Fragment>
  );
}
