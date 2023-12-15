import { useEffect, RefObject } from 'react';


export const useClickOutside = (
  ref: RefObject<Element>,
  onClick: () => void,
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref?.current?.contains(e.target as Node)) {
        onClick();
      }
    };
    window.document.body.addEventListener('click', listener);
    return () => window.document.body.removeEventListener('click', listener);
  }, [ onClick, ref ]);
};
