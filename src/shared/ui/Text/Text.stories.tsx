import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Text, TextTheme } from './Text'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Exampe title',
  text: 'Exampe some test description ...'
}
export const Error = Template.bind({})
Error.args = {
  title: 'Exampe title',
  text: 'Exampe some test description ...',
  theme: TextTheme.ERROR
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
  title: 'Exampe title'
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
  text: 'Exampe some test description ...'
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
