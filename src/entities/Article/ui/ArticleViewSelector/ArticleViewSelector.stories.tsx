import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
