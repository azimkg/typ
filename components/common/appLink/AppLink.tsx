'use client';
import { FC, ReactNode } from 'react';
import classes from 'classnames';
import { LinkProps } from 'next/dist/client/link';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import cls from './appLink.module.css';


interface IAppLinkProps extends LinkProps {
  activeClassName?: string
  children: ReactNode
  className?: string
  href: string
}
const AppLink: FC<IAppLinkProps> = (props) => {
  const pathname = usePathname();
  const { locale } = useParams<{locale: string}>();
  const {
    children,
    className,
    activeClassName = '',
    href,
    ...otherProps
  } = props;
  return (
    <Link
      {...otherProps}
      href={href}
      locale={locale}
      className={classes(cls.link, { [ activeClassName ]: pathname.includes(href) }, className ?? '')}
    >
      {children}
    </Link>
  );
};

export default AppLink;
