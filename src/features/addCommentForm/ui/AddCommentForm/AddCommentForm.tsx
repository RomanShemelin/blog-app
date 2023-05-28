import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  type ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/deprecated/Button/Button';
import { Input } from '@/shared/ui/deprecated/Input/Input';
import {
  getCommentFormText
} from '../../model/selectors/addCommmentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducers
} from '@/features/addCommentForm/model/slices/addCommentFormSlice';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducers
};

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        data-testid="AddCommentForm"
        justify="between"
        max
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          data-testid="AddCommentForm.Input"
          className={cls.input}
          placeholder={t('Add comment')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button data-testid="AddCommentForm.Button" onClick={onSendHandler}>{t('Send')}</Button>
      </HStack>
    </DynamicModuleLoader>
  );
}
export default memo(AddCommentForm)
