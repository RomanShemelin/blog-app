import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile
} from '@/shared/config/routeConfig/routeConfig';
import { type SidebarItemType } from '../types/sidebar';
import MainIconDeprecated from '@/shared/assets/icons/Main.svg'
import AboutIconDeprecated from '@/shared/assets/icons/About.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/Profile.svg'
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg'

import MainIcon from '@/shared/assets/icons/home.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import { toggleFeatures } from '@/shared/lib/features';

export const getSideBarItems = createSelector(
  getUserAuthData,
  (userData) => {
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
)
