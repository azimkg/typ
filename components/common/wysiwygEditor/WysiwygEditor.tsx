import React, { useState, useEffect } from 'react';
import classes from 'classnames';
import cls from './wysiwygEditor.module.css';


interface FormattingOptions {
  bold: boolean;
  italic: boolean;
  underline: boolean;
}

interface CKEditorFormattingProps {
  value: string;
  onChange: (value: string) => void;
  className?:string
}

function CKEditorFormatting({ value, onChange, className }: CKEditorFormattingProps) {
  const [ content, setContent ] = useState(value);
  const [ formattingOptions, setFormattingOptions ] = useState<FormattingOptions>({
    bold: false,
    italic: false,
    underline: false,
  });

  useEffect(() => {
    const formattedContent = applyFormatting(content, formattingOptions);
    onChange(formattedContent);
  }, [ content, formattingOptions, onChange ]);

  const toggleFormatting = (format: keyof FormattingOptions) => {
    setFormattingOptions((prevOptions) => ({
      ...prevOptions,
      [format]: !prevOptions[format],
    }));
  };

  return (
    <div className={classes(className ?? '')}>
      <div>
        <button className={classes(cls.btn_word, { [cls.bold]: formattingOptions.bold },{ [cls.hover]: formattingOptions.bold })} onClick={() => toggleFormatting('bold')}>
          B
        </button>
        <button className={classes(cls.btn_word, { [cls.italic]: formattingOptions.italic }, { [cls.hover]: formattingOptions.italic })} onClick={() => toggleFormatting('italic')}>
          I
        </button>
        <button className={classes(cls.btn_word, { [cls.decoration]: formattingOptions.underline }, { [cls.hover]: formattingOptions.underline })} onClick={() => toggleFormatting('underline')}>
          U
        </button>
      </div>
    </div>
  );
}

function applyFormatting(content: string, formattingOptions: FormattingOptions): string {
  let formattedContent = content;

  if (formattingOptions.bold) {
    formattedContent = `<strong>${formattedContent}</strong>`;
  }

  if (formattingOptions.italic) {
    formattedContent = `<em>${formattedContent}</em>`;
  }

  if (formattingOptions.underline) {
    formattedContent = `<u>${formattedContent}</u>`;
  }

  return formattedContent;
}

export default CKEditorFormatting;
