import React, { useMemo } from 'react';
import { Group } from '@visx/group';
import { Tree, hierarchy } from '@visx/hierarchy';
import { HierarchyPointNode } from '@visx/hierarchy/lib/types';
import { LinkHorizontal } from '@visx/shape';
import { LinearGradient } from '@visx/gradient';
import { useForceUpdate } from './use-force-update';
import { LinkControls, Subject$Props } from './link-controls';
import { BehaviorSubject } from 'rxjs';
import { getLinkComponent } from './get-link-component';
import { useBehaviorSubjectSelector } from '@czaplej/use-behavior-subject';
import { pointRadial } from 'd3-shape';
import { responseTree } from './data';
import { ZoomI } from './zoom';

const peach = '#fd9b93';
const pink = '#fe6e9e';
const blue = '#03c0dc';
const green = '#26deb0';
const plum = '#71248e';
const lightpurple = '#374469';
const white = '#ffffff';
export const background = '#272b4d';

interface TreeNode {
  name: string;
  isExpanded?: boolean;
  children?: this[];
}

type HierarchyNode = HierarchyPointNode<TreeNode>;

const rawTree: TreeNode = {
  name: 'T',
  children: [
    {
      name: 'A',
      children: [
        { name: 'A1' },
        { name: 'A2' },
        { name: 'A3' },
        {
          name: 'C',
          children: [
            {
              name: 'C1',
            },
            {
              name: 'D',
              children: [
                {
                  name: 'D1',
                },
                {
                  name: 'D2',
                },
                {
                  name: 'D3',
                },
              ],
            },
          ],
        },
      ],
    },
    { name: 'Z' },
    {
      name: 'B',
      children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],
    },
  ],
};

/** Handles rendering Root, Parent, and other Nodes. */
function Node({
  node,
  forceUpdate,
}: {
  node: HierarchyNode;
  forceUpdate: () => void;
}) {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const isRoot = node.depth === 0;
  const isParent = !!node.children;

  if (isRoot) return <RootNode node={node} />;
  if (isParent) return <ParentNode node={node} forceUpdate={forceUpdate} />;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={background}
        stroke={green}
        strokeWidth={1}
        strokeDasharray="2,2"
        strokeOpacity={0.6}
        rx={10}
        onClick={() => {
          alert(`clicked: ${JSON.stringify(node.data.name)}`);
        }}
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        fill={green}
        style={{ pointerEvents: 'none' }}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

function RootNode({ node }: { node: HierarchyNode }) {
  return (
    <Group top={node.x} left={node.y}>
      <circle r={12} fill="url('#lg')" />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={plum}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

function ParentNode({
  node,
  forceUpdate,
}: {
  node: HierarchyNode;
  forceUpdate: () => void;
}) {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={background}
        stroke={blue}
        strokeWidth={1}
        onClick={() => {
          node.data.isExpanded = !node.data.isExpanded;
          console.log(node);
          forceUpdate();
          // alert(`clicked: ${JSON.stringify(node.data.name)}`);
        }}
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={white}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };

export type TreeProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

const subject$ = new BehaviorSubject<Subject$Props>({
  layout: 'cartesian',
  orientation: 'horizontal',
  linkType: 'diagonal',
  stepPercent: 0.5,
});

export function Example({ width, height, margin = defaultMargin }: TreeProps) {
  const forceUpdate = useForceUpdate();
  const {
    linkType,
    orientation,
    layout,
    stepPercent,
  } = useBehaviorSubjectSelector((state) => state, subject$);

  const data = hierarchy(responseTree, (d) =>
    d.isExpanded ? null : d.children
  );
  const LinkComponent = getLinkComponent({ layout, linkType, orientation });
  let origin: { x: number; y: number };
  let sizeWidth: number;
  let sizeHeight: number;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  if (layout === 'polar') {
    origin = {
      x: innerWidth / 2,
      y: innerHeight / 2,
    };
    sizeWidth = 2 * Math.PI;
    sizeHeight = Math.min(innerWidth, innerHeight) / 2;
  } else {
    origin = { x: 0, y: 0 };
    if (orientation === 'vertical') {
      sizeWidth = innerWidth;
      sizeHeight = innerHeight;
    } else {
      sizeWidth = innerHeight;
      sizeHeight = innerWidth;
    }
  }
  return width < 10 ? null : (
    <div>
      <LinkControls subject$={subject$} />
      <ZoomI width={width} height={height}>
        {(zoom) => (
          <>
            <LinearGradient id="lg" from={peach} to={pink} />
            {/*<rect width={width} height={height} rx={14} fill={background} />*/}
            <Tree<TreeNode>
              root={data}
              nodeSize={[1000, 500]}
              separation={(a, b) => (a.parent === b.parent ? 1 : 1) / a.depth}
            >
              {(tree) => (
                <Group top={origin.y} left={origin.x}>
                  {tree.links().map((link, i) => (
                    <LinkComponent
                      key={i}
                      data={link}
                      percent={stepPercent}
                      stroke="rgb(254,110,158,0.6)"
                      strokeWidth="1"
                      fill="none"
                    />
                  ))}

                  {tree.descendants().map((node, key) => {
                    const width = 200;
                    const height = 80;

                    let top: number;
                    let left: number;
                    if (layout === 'polar') {
                      const [radialX, radialY] = pointRadial(node.x, node.y);
                      top = radialY;
                      left = radialX;
                    } else if (orientation === 'vertical') {
                      top = node.y;
                      left = node.x;
                    } else {
                      top = node.x;
                      left = node.y;
                    }

                    return (
                      <Group top={top} left={left} key={key}>
                        {node.depth === 0 && (
                          <circle
                            r={12}
                            fill="url('#links-gradient')"
                            onClick={(e) => {
                              console.log(node);
                              node.data.isExpanded = !node.data.isExpanded;
                              forceUpdate();
                            }}
                          />
                        )}
                        <rect
                          height={height}
                          width={width}
                          y={-height / 2}
                          x={-width / 2}
                          fill="#272b4d"
                          stroke={node.data?.children ? '#03c0dc' : '#26deb0'}
                          strokeWidth={1}
                          strokeDasharray={node.data?.children ? '0' : '2,2'}
                          strokeOpacity={node.data?.children ? 1 : 0.6}
                          rx={node.data.children ? 0 : 10}
                          onClick={(e) => {
                            e.persist();
                            console.log(node);
                            node.data.isExpanded = !node.data.isExpanded;
                            forceUpdate();
                          }}
                        />
                        <text
                          dy=".33em"
                          fontSize={9}
                          fontFamily="Arial"
                          textAnchor="middle"
                          style={{ pointerEvents: 'none' }}
                          fill={
                            node.depth === 0
                              ? '#71248e'
                              : node.children
                              ? 'white'
                              : '#26deb0'
                          }
                        >
                          {node.data.nazwa}
                        </text>
                      </Group>
                    );
                  })}
                </Group>
              )}
            </Tree>
          </>
        )}
      </ZoomI>
    </div>
  );
}
