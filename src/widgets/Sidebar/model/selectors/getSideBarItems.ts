import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile
} from '@/shared/config/routeConfig/routeConfig';
import { type SidebarItemType } from '../types/sidebar';
import MainIcon from '@/shared/assets/icons/Main.svg'
import AboutIcon from '@/shared/assets/icons/About.svg'
import ProfileIcon from '@/shared/assets/icons/Profile.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'

export const getSideBarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'Главная'
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О сайте'
      }
    ]

    if (userData) {
      sidebarItemList.push(
        {
          path: getRouteProfile(userData?.id),
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true
        },
        {
          path: getRouteArticles(),
          Icon: ArticleIcon,
          text: 'Статьи',
          authOnly: true
        }
      )
    }
    return sidebarItemList
  }
)
