import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
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
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте'
      }
    ]

    if (userData) {
      sidebarItemList.push(
        {
          path: RoutePath.profile + userData?.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'Статьи',
          authOnly: true
        }
      )
    }
    return sidebarItemList
  }
)
