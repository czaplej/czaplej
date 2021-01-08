import React, { useState } from 'react';
import { SignupForm } from './formik-example';
import { Subject } from './subject';

export const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>FORMIK </h1>
      <button
        onClick={(event) => {
          setShow((prevState) => !prevState);
        }}
      >
        SHIW
      </button>
      <SignupForm />
      {show && <Subject />}
    </div>
  );
};

export default App;
