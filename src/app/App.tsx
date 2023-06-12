import { getUserInited, userActions } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppToolbar } from './lib/useAppToolbar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);
  const toolBar = useAppToolbar()

  useEffect(() => {
    if (!inited) {
      dispatch(userActions.initAuthData());
    }
  }, [dispatch, inited]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <div id='app' className={classNames('app', {}, [theme])}>
          <Suspense fallback=''>
            <Navbar />
            <div className='content-page'>
              <Sidebar />
              {inited && <AppRouter />}
            </div>
          </Suspense>
        </div>
      }
      on={
        <div id='app' className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback=''>
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={toolBar}
            />
          </Suspense>
        </div>
      }
    />
  );
};

export default App;
