import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Avatar } from './Avatar'
import AvatarImg from './storybook.jpg'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'widjet/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 150,
  src: AvatarImg
}
export const Small = Template.bind({})
Small.args = {
  size: 50,
  src: AvatarImg
}