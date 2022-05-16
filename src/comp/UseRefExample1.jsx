import { useRef } from 'react';

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    console.log(inputRef.current);
    inputRef.current.style.backgroundColor = 'red';
    inputRef.current.value = 'Hello, World';
    paraRef.current.innerText = 'My name is Ibrahim';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-control mb-2'
          ref={inputRef}
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <p
        ref={paraRef}
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        My name is Ahmed
      </p>
    </div>
  );
}
export default UseRefExample1;
