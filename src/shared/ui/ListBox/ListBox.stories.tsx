import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ListBox } from './ListBox'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox/>

export const Normal = Template.bind({})
Normal.args = {}
