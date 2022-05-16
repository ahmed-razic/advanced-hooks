import { useState, useEffect, useRef } from 'react';

function UseRefExample2() {
  const [text, setText] = useState('');
  const renders = useRef(1);
  const prevText = useRef('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevText.current = text;
  }, [text]);

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h1>PrevText: {prevText.current}</h1>
      <input
        type='text'
        name='text'
        id='text'
        value={text}
        className='form-control mb-3'
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
export default UseRefExample2;
