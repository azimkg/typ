import { forwardRef, InputHTMLAttributes } from 'react';
import classes from 'classnames';
import cls from './input.module.css';


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}
const Input = forwardRef<HTMLInputElement, IInputProps>((props , ref) =>  {
  const {
    label,
    error,
    className,
    ...rest
  } = props;
  return (
    <div className={classes(cls.input, { [cls.input_error]: error }, className)}>
      <span className={ label ? cls.label: ''}>{label}</span>
      <div>
        <span>*{error}</span>
        <input {...rest} ref={ref} />
      </div>
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
