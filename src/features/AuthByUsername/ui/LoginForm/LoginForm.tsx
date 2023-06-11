import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'

import { memo, type PropsWithChildren, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input/Input'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { Button } from '@/shared/ui/redesigned/Button'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'

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
    const forceUpdate = useForceUpdate()

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
        forceUpdate()
      }
    }, [dispatch, username, password, onSuccess, forceUpdate])

    return (
      <DynamicModuleLoader
          reducers={initialReducers}
          removeAfterUnmount={true}
        >
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <VStack gap="16" className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('authorization form')}/>
                {error && <Text text={t('wrong login or password')} variant='error'/>}
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
                  variant='outline'
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={onLoginClick}
                  disabled={isLoading}>
                  {t('Enter')}
                </Button>

              </VStack>
            }
            off={ <div className={classNames(cls.LoginForm, {}, [className])}>
              <TextDeprecated title={t('authorization form')}/>
              {error && <TextDeprecated text={t('wrong login or password')} theme={TextTheme.ERROR}/>}
              <InputDeprecated
                  type="text"
                  className={cls.input}
                  placeholder={t('Enter username')}
                  onChange={onChangeUsername}
                  value={username}
                />
              <InputDeprecated
                  type="text"
                  className={cls.input}
                  placeholder={t('Enter password')}
                  onChange={onChangePassword}
                  value={password}
                />
              <ButtonDeprecated
                  className={cls.loginBtn}
                  theme={ButtonTheme.OUTlINE}
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={onLoginClick}
                  disabled={isLoading}>
                {t('Enter')}
              </ButtonDeprecated>
            </div>}
          />

      </DynamicModuleLoader>

    )
  }
)
export default LoginForm
