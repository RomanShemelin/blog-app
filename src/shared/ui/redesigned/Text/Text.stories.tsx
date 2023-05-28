import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Text } from './Text'

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
  variant: 'error'
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
  size: 'l'
}
export const SizeM = Template.bind({})
SizeM.args = {
  title: 'Example title',
  text: 'Exampe some test description ...',
  size: 'm'
}
export const SizeS = Template.bind({})
SizeS.args = {
  title: 'Example title',
  text: 'Exampe some test description ...',
  size: 's'
}
