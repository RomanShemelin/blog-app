import { getUserAuthData, getUserRoles, type UserRole } from '@/entities/User';
import { getRouteAdmin, getRouteMain } from '@/shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

export function RequireAuth ({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles)

  const hasRequireRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some(requireRoles => {
      const hasRole = userRoles?.includes(requireRoles)
      return hasRole
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequireRoles) {
    return <Navigate to={getRouteAdmin()} state={{ from: location }} replace />;
  }
  return children;
}
