import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { AppLink } from './AppLink'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'widjet/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  variant: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text',
  variant: 'primary'
}
export const Red = Template.bind({})
Red.args = {
  children: 'Text',
  variant: 'red'
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
  variant: 'primary'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'Text',
  variant: 'primary'
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark = Template.bind({})
RedDark.args = {
  children: 'Text',
  variant: 'red'
}
RedDark.decorators = [ThemeDecorator(Theme.DARK)]
