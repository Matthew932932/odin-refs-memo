import { useRef, useEffect, useState, memo, useMemo } from "react";

function ButtonComponentEx1() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return <button ref={buttonRef}>Click Me!</button>;
}

// You should not do this and only use useRef for non-destructive DOM operations, but just an example:
function ButtonComponentEx2() {
    const buttonRef = useRef(null);
  
    useEffect(() => {
        buttonRef.current.focus();
        buttonRef.current.textContent = "Hey, I'm different!";
        let timeout = setTimeout(() => {
          buttonRef.current.textContent = "Click Me!";
        }, 2000);
      
        return () => {
          clearTimeout(timeout);
        };
      }, []);
      
  
    return <button ref={buttonRef}>Click Me!</button>;
  }

  
//   const ButtonComponent = ({ children, onClick }) => {
//     let i = 0;
//     let j = 0;
//     const ITERATION_COUNT = 20_000;
//     while (i < ITERATION_COUNT) {
//       while (j < ITERATION_COUNT) {
//         j += 1;
//       }
//       i += 1;
//       j = 0;
//     }
  
//     return (
//       <button type="button" onClick={onClick}>
//         {children}
//       </button>
//     );
//   };

// eslint-disable-next-line react/function-component-definition, react/prop-types
const ButtonComponent = memo(({ children, onClick }) => {
    // To simulate a very slow render
    let i = 0;
    let j = 0;
    // increase iteration count for more lag
    const ITERATION_COUNT = 10_000;
    while (i < ITERATION_COUNT) {
      while (j < ITERATION_COUNT) {
        j += 1;
      }
      i += 1;
      j = 0;
    }
  
    return (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    );
  });

  
  export default function Counter() {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount((prevState) => prevState + 1);
    };

    const memoizedHandleClick = useMemo(() => handleClick, []);
  
    return (
      <div>
        <h1>{count}</h1>
        <ButtonComponent onClick={memoizedHandleClick}>Click me!</ButtonComponent>
      </div>
    );
  }
  