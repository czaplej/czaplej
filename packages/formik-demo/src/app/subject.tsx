import React, { memo, useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';
import { useBehaviorSubject } from '@czaplej/use-behavior-subject';

type SubjectProps = {};
const beh$ = new BehaviorSubject({ value: '111111' });
export const Subject = memo((props: SubjectProps) => {
  const { state, setState } = useBehaviorSubject({ subject: beh$ });
  console.log(beh$);
  return (
    <div>
      {JSON.stringify(beh$.getValue())} SUBJECT {JSON.stringify(state)}
      <input
        type="text"
        onChange={(e) => {
          setState({ value: e.currentTarget.value });
        }}
      />
    </div>
  );
});
