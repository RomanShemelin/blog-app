import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/About.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg';
import MainIconDeprecated from '@/shared/assets/icons/Main.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/Profile.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile
} from '@/shared/config/routeConfig/routeConfig';
import { type SidebarItemType } from '../types/sidebar';

import ArticleIcon from '@/shared/assets/icons/article.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import { toggleFeatures } from '@/shared/lib/features';
import { useSelector } from 'react-redux';

export const useSideBarItems = () => {
  const userData = useSelector(getUserAuthData);
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => MainIcon,
        off: () => MainIconDeprecated
      }),
      text: 'Главная'
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => AboutIcon,
        off: () => AboutIconDeprecated
      }),
      text: 'О сайте'
    }
  ]

  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData?.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated
        }),
        text: 'Профиль',
        authOnly: true
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ArticleIcon,
          off: () => ArticleIconDeprecated
        }),
        text: 'Статьи',
        authOnly: true
      }
    )
  }
  return sidebarItemList
}
