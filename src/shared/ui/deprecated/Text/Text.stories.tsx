import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Text, TextSize, TextTheme } from './Text'

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

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Example title',
  text: 'Exampe some test description ...',
  size: TextSize.L
}
export const SizeM = Template.bind({})
SizeM.args = {
  title: 'Example title',
  text: 'Exampe some test description ...',
  size: TextSize.M
}
export const SizeS = Template.bind({})
SizeS.args = {
  title: 'Example title',
  text: 'Exampe some test description ...',
  size: TextSize.S
}
