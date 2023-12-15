'use client';

import { FC, SVGProps } from 'react';
import Aim from '@icons/aim.svg';
import Clock from '@icons/clock.svg';
import Clock2 from '@icons/clock2.svg';
import Speed from '@icons/speed.svg';
import Star from '@icons/start.svg';
import Success from '@icons/success.svg';
import { iconPath } from 'common/icon/types';


const icons: Record<iconPath, FC<SVGProps<SVGSVGElement>>> = {
  [iconPath.START_ICON]: Star,
  [iconPath.CLOCK_ICON]: Clock,
  [iconPath.CLOCK2_ICON]: Clock2,
  [iconPath.SUCCESS_ICON]: Success,
  [iconPath.SPEED_ICON]: Speed,
  [iconPath.AIM_ICON]: Aim,
};
interface IIconProps extends SVGProps<SVGSVGElement> {
  pathIcon: iconPath
}
const Icon = ({ pathIcon, ...other }: IIconProps) => {
  const SVG = icons[pathIcon];
  return <SVG {...other} />;
};

export default Icon;
