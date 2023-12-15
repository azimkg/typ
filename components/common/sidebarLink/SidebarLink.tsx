'use client';
import { FC, ReactNode } from 'react';
import classes from 'classnames';
import Progress from 'common/progress/Progress';
import { LinkProps } from 'next/dist/client/link';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import cls from './sidebarLink.module.css';


type Params = {
  locale: string
  type: string
}
interface ISidebarLinkProps extends LinkProps {
  href: string
  path: string
  children: ReactNode
  progress?: number | number []
}
const SidebarLink: FC<ISidebarLinkProps>= ({ href, children, path, progress }) => {
  const { locale, type } = useParams<Params>();
  return (
    <Link
      href={`${path}/${href}`}
      locale={locale}
      className={classes(
        cls.link,
        { [cls.active]: href === type },
        { [cls.with_progress ]: href === type && progress }
      )}
    >
      {children}
      <Progress
        className={classes(cls.progress, { [cls.progress_show]: progress && href === type })}
        type={'circle'}
        percent={progress}
        withPercent
        strokeWidth={6}
        trailWidth={6}
        height={40}
      />
    </Link>
  );
};

export default SidebarLink;
