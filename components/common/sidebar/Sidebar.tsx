import { FC } from 'react';
import SidebarLink from 'common/sidebarLink/SidebarLink';
import { TFunction } from 'i18next';
import cls from './sidebar.module.css';


interface ISidebar {
  t: TFunction
}
const Sidebar: FC<ISidebar> = ({ t }) => {
  return (
    <div className={cls.template}>
      <p>{t('lessons-page.sidebar.education')}</p>
      <div>
        <SidebarLink href={'basic'} path={'/lessons'} progress={40}>
          {t('lessons-page.sidebar.basic')}
        </SidebarLink>
        <SidebarLink href={'medium'} path={'/lessons'} progress={40}>
          {t('lessons-page.sidebar.medium')}
        </SidebarLink>
        <SidebarLink href={'advanced'} path={'/lessons'}>
          {t('lessons-page.sidebar.advanced')}
        </SidebarLink>
      </div>
      <p>{t('lessons-page.sidebar.practice')}</p>
      <div>
        <SidebarLink href={'practice'} path={'/lessons'}>
          {t('lessons-page.sidebar.problems-keyboard')}
        </SidebarLink>
      </div>
      <p>{t('lessons-page.sidebar.tests')}</p>
      <div>
        <SidebarLink href={'time'} path={'/tests'}>
          <div>
            <span>{t('time')}</span>
            <span className={cls.desc}>{t('time-during')}</span>
          </div>
        </SidebarLink>
        <SidebarLink href={'word'} path={'/tests'}>
          <div>
            <span> {t('word')}</span>
            <span className={cls.desc}>{t('without-time-limits')}</span>
          </div>
        </SidebarLink>
      </div>

    </div>
  );
};

export default Sidebar;
