import React, { useState } from 'react';
import { Zoom } from '@visx/zoom';
import { localPoint } from '@visx/event';
import { RectClipPath } from '@visx/clip-path';

import { scaleLinear } from '@visx/scale';
import { ZoomProps } from '@visx/zoom/lib/Zoom';

const bg = '#0a0a0a';

const colorScale = scaleLinear<number>({ range: [0, 1], domain: [0, 1000] });
const sizeScale = scaleLinear<number>({ domain: [0, 600], range: [0.5, 8] });

export type ZoomIProps = Pick<ZoomProps, 'children'> & {
  width: number;
  height: number;
};

export function ZoomI({ width, height, children }: ZoomIProps) {
  const initialTransform = {
    scaleX: 1,
    scaleY: 1,
    translateX: width / 2,
    translateY: height / 2,
    skewX: 0,
    skewY: 0,
  };
  const [showMiniMap, setShowMiniMap] = useState<boolean>(false);
  return (
    <>
      <Zoom
        width={width}
        height={height}
        scaleXMin={1 / 2}
        scaleXMax={2}
        scaleYMin={1 / 2}
        scaleYMax={2}
        transformMatrix={initialTransform}
      >
        {(zoom) => (
          <div className="relative">
            <svg
              width={width}
              height={height}
              style={{ cursor: zoom.isDragging && 'grabbing' }}
            >
              <RectClipPath id="zoom-clip" width={width} height={height} />
              <rect width={width} height={height} rx={14} fill={bg} />

              <rect
                width={width}
                height={height}
                rx={1}
                fill="transparent"
                onTouchStart={zoom.dragStart}
                onTouchMove={zoom.dragMove}
                onTouchEnd={zoom.dragEnd}
                onMouseDown={zoom.dragStart}
                onMouseMove={zoom.dragMove}
                onMouseUp={zoom.dragEnd}
                onMouseLeave={() => {
                  if (zoom.isDragging) zoom.dragEnd();
                }}
                onDoubleClick={(event) => {
                  const point = localPoint(event) || { x: 0, y: 0 };
                  zoom.scale({ scaleX: 1.1, scaleY: 1.1, point });
                }}
              />
              <g transform={zoom.toString()}>{children(zoom)}</g>
              {showMiniMap && (
                <g
                  clipPath="url(#zoom-clip)"
                  transform={`
                    scale(0.25)
                    translate(${width * 4 - width - 60}, ${
                    height * 4 - height - 60
                  })
                  `}
                >
                  <rect width={width} height={height} fill="#1a1a1a" />
                  {children(zoom)}
                  <rect
                    width={width}
                    height={height}
                    fill="white"
                    fillOpacity={0.2}
                    stroke="white"
                    strokeWidth={4}
                    transform={zoom.toStringInvert()}
                  />
                </g>
              )}
            </svg>
            <div className="controls">
              <button
                className="btn btn-zoom"
                onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}
              >
                +
              </button>
              <button
                className="btn btn-zoom btn-bottom"
                onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}
              >
                -
              </button>
              <button className="btn btn-lg" onClick={zoom.center}>
                Center
              </button>
              <button className="btn btn-lg" onClick={zoom.reset}>
                Reset
              </button>
              <button className="btn btn-lg" onClick={zoom.clear}>
                Clear
              </button>
            </div>
            <div className="mini-map">
              <button
                className="btn btn-lg"
                onClick={() => setShowMiniMap(!showMiniMap)}
              >
                {showMiniMap ? 'Hide' : 'Show'} Mini Map
              </button>
            </div>
          </div>
        )}
      </Zoom>
      <style jsx>{`
        .btn {
          margin: 0;
          text-align: center;
          border: none;
          background: #2f2f2f;
          color: #888;
          padding: 0 4px;
          border-top: 1px solid #0a0a0a;
        }
        .btn-lg {
          font-size: 12px;
          line-height: 1;
          padding: 4px;
        }
        .btn-zoom {
          width: 26px;
          font-size: 22px;
        }
        .btn-bottom {
          margin-bottom: 1rem;
        }
        .description {
          font-size: 12px;
          margin-right: 0.25rem;
        }
        .controls {
          position: absolute;
          top: 15px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .mini-map {
          position: absolute;
          bottom: 25px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .relative {
          position: relative;
        }
      `}</style>
    </>
  );
}
