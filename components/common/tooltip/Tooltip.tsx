'use client';
import React from 'react';
import { ITooltip, Tooltip } from 'react-tooltip';
import cls from './tooltip.module.css';


const TooltipContent: React.FC<ITooltip> = ({ className, ...props }) => {
  return (
    <Tooltip place={'top'} {...props} className={cls.tooltip} arrowColor={'var(--bg-modal)'} />
  );
};

export default TooltipContent;