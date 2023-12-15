import { ReactNode } from 'react';
import classes from 'classnames';
import RSelect, { GroupBase, Props } from 'react-select';
import './select.css';


export type OptionType = {
  value: string
  label: ReactNode
}
interface ISelectProps {
  options: OptionType[]
}
function Select<
  Option extends OptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: ISelectProps & Props<Option, IsMulti, Group>) {
  const {
    className,
  } = props;
  return (
    <RSelect
      {...props}
      className={classes(className ?? '', 'app_select')}
      classNamePrefix={'react-select'}
      unstyled
    />
  );
}

export default Select;
