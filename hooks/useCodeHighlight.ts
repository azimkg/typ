import { useMemo, useRef } from 'react';
import hljs from 'highlight.js/lib/core';

import 'highlight.js/styles/default.css';


export type CodeHighlightLanguage = 'javascript' | 'php';

hljs.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript')
);
hljs.registerLanguage(
  'php',
  require('highlight.js/lib/languages/php')
);


export const useCodeHighlight = (code: string, language: CodeHighlightLanguage): {
    getCharacterClasses(lineIndex: number, columnIndex: number): string | undefined
} => {
  const tempElement = useRef(document.createElement('div'));

  const classes = useMemo(() => {
    const hightlightResult = hljs.highlight(code, { language });
    tempElement.current.innerHTML = hightlightResult.value;

    let lineIndex = 0;
    let columnIndex = 0;
    const result: string[][] = [];
    for (const childNode of Array.from(tempElement.current.childNodes)) {
      const nodeText = childNode instanceof HTMLElement ? childNode.innerText : (childNode.nodeType === Node.TEXT_NODE && childNode.textContent) ? childNode.textContent : '';

      for (const char of nodeText) {
        if (char === '\n') {
          lineIndex++;
          columnIndex = 0;
        } else {
          if (!result[lineIndex]) {
            result[lineIndex] = [];
          }

          result[lineIndex][columnIndex] = ((childNode instanceof HTMLElement) ? childNode.className : childNode.parentElement?.className) ?? '';
          columnIndex++;
        }
      }
    }

    return result;
  }, [ code, language ]);

  return useMemo(() => ({
    getCharacterClasses(lineIndex: number, characterIndex: number): string | undefined {
      return classes[lineIndex]?.[characterIndex];
    }
  }), [ classes ]);
};