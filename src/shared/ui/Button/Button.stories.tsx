import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button, themeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: themeButton.CLEAR
}
export const OutlineLight = Template.bind({})
OutlineLight.args = {
  children: 'Text',
  theme: themeButton.OUTlINE
}
export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: themeButton.OUTlINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
