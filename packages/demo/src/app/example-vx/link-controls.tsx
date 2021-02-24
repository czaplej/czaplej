import React, { ChangeEvent } from 'react';
import { BehaviorSubject } from 'rxjs';
import {
  useBehaviorSubjectDispatch,
  useBehaviorSubjectSelector,
} from '@czaplej/use-behavior-subject';

const controlStyles = { fontSize: 10 };

export type Subject$Props = {
  layout: string;
  orientation: string;
  linkType: string;
  stepPercent: number;
};
type Props = {
  subject$: BehaviorSubject<Subject$Props>;
};

export function LinkControls({ subject$ }: Props) {
  const dispatch = useBehaviorSubjectDispatch(subject$);
  const selector = useBehaviorSubjectSelector((state) => state, subject$);
  const { layout, linkType, orientation, stepPercent } = selector;
  const handleUpdate = (
    e: ChangeEvent<HTMLSelectElement>,
    name: keyof Subject$Props
  ) => {
    dispatch({ [name]: e.target.value });
  };
  return (
    <div style={controlStyles}>
      <label>layout:</label>&nbsp;
      <select
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => handleUpdate(e, 'layout')}
        value={layout}
      >
        <option value="cartesian">cartesian</option>
        <option value="polar">polar</option>
      </select>
      &nbsp;&nbsp;
      <label>orientation:</label>&nbsp;
      <select
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => handleUpdate(e, 'orientation')}
        value={orientation}
        disabled={layout === 'polar'}
      >
        <option value="vertical">vertical</option>
        <option value="horizontal">horizontal</option>
      </select>
      &nbsp;&nbsp;
      <label>link:</label>&nbsp;
      <select
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => handleUpdate(e, 'linkType')}
        value={linkType}
      >
        <option value="diagonal">diagonal</option>
        <option value="step">step</option>
        <option value="curve">curve</option>
        <option value="line">line</option>
      </select>
      {linkType === 'step' && layout !== 'polar' && (
        <>
          &nbsp;&nbsp;
          <label>step:</label>&nbsp;
          <input
            onClick={(e) => e.stopPropagation()}
            type="range"
            min={0}
            max={1}
            step={0.1}
            onChange={(e) => dispatch({ stepPercent: Number(e.target.value) })}
            value={stepPercent}
            disabled={linkType !== 'step' || layout === 'polar'}
          />
        </>
      )}
    </div>
  );
}
