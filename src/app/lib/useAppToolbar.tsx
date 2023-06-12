import { AppRoutes } from '@/shared/config/routeConfig/routeConfig';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { type ReactElement } from 'react';

export function useAppToolbar () {
  const appRoute = useRouteChange()
  const toolbarByAppRoute: Partial<Record<AppRoutes, ReactElement>> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLES_DETAILS]: <ScrollToolbar />,
    [AppRoutes.MAIN]: <div>123</div>,
    [AppRoutes.ABOUT]: <div>123</div>
  };
  return toolbarByAppRoute[appRoute]
}
