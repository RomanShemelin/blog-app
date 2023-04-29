/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesDetailsComments } from './ArticlesDetailsComments';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticlesDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesDetailsComments>;

const Template: ComponentStory<typeof ArticlesDetailsComments> = (args) => (
  <ArticlesDetailsComments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  id: '1'
};
Normal.decorators = [StoreDecorator({})];
