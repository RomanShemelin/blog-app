import { UserRole } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import ArticleEditPage from '@/pages/ArticleEditPage/ui/ArticleEditPage'
import ArticleDetailsPage from '@/pages/ArticlesDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbidenPage } from '@/pages/ForbidenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  ARTICLES_CREATE = 'articles_create',
  ARTICLES_EDIT = 'articles_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage/>
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage/>,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPage/>,
    authOnly: true
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: getRouteArticleDetails(':id'), 
    element: <ArticleDetailsPage/>,
    authOnly: true
  },
  [AppRoutes.ARTICLES_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage/>,
    authOnly: true
  },
  [AppRoutes.ARTICLES_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage/>,
    authOnly: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: <AdminPanelPage/>,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN]
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbidenPage/>
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage/>
  }
}
