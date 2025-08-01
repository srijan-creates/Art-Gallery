import { useEffect, useRef, useState } from "react";

// export function useScrollAnimation() {
//   const ref = useRef(null);
//   const [animate, setAnimate] = useState(false);
//   const timeoutRef = useRef();

//   useEffect(() => {
//     function onScroll() {
//       if (!ref.current) return;
//       const rect = ref.current.getBoundingClientRect();
//       const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

//       if (isVisible && !animate) {
//         setAnimate(true);
//         clearTimeout(timeoutRef.current);
//       } else if (!isVisible && animate) {
//         clearTimeout(timeoutRef.current);
//         timeoutRef.current = setTimeout(() => setAnimate(false), 100);
//       }
//     }

//     window.addEventListener("scroll", onScroll);
//     window.addEventListener("resize", onScroll);
//     onScroll();

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//       clearTimeout(timeoutRef.current);
//     };
//   }, [animate]);

//   return [ref, animate];
// }



//One-Time Setup:



export function useScrollAnimation() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!ref.current || animate) return;

      const rect = ref.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        setAnimate(true);
      }
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [animate]);

  return [ref, animate];
}
