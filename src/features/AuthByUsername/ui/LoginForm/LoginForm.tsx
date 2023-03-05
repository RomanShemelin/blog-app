import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'

import { memo, type PropsWithChildren, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(
  ({ className, onSuccess }: PropsWithChildren<LoginFormProps>) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value))
    }, [dispatch])
    const onLoginClick = useCallback(async () => {
      const result = await dispatch(loginByUsername({ username, password }))
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess()
      }
    }, [dispatch, username, password, onSuccess])

    return (
      <DynamicModuleLoader
          reducers={initialReducers}
          removeAfterUnmount={true}>
        <div className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={t('authorization form')}/>
          {error && <Text text={t('wrong login or password')} theme={TextTheme.ERROR}/>}
          <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter username')}
                onChange={onChangeUsername}
                value={username}
              />
          <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter password')}
                onChange={onChangePassword}
                value={password}
              />
          <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTlINE}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={onLoginClick}
                disabled={isLoading}>
            {t('Enter')}
          </Button>
        </div>
      </DynamicModuleLoader>

    )
  }
)
export default LoginForm
