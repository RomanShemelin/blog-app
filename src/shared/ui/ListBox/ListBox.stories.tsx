import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ListBox } from './ListBox'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [
    Story => <div style={{ padding: 100 }}><Story/></div>
  ]
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}/>

export const Normal = Template.bind({})
Normal.args = {
  value: 'test',
  items: [
    {
      content: 'test exaple', value: '123'
    },
    {
      content: 'test exaple', value: '123'
    }
  ]
}
export const TopLefat = Template.bind({})
TopLefat.args = {
  value: 'test',
  direction: 'top left',
  items: [
    {
      content: 'test exaple', value: '123'
    },
    {
      content: 'test exaple', value: '123'
    }
  ]
}
export const TopRight = Template.bind({})
TopRight.args = {
  value: 'test',
  direction: 'top right',
  items: [
    {
      content: 'test exaple', value: '123'
    },
    {
      content: 'test exaple', value: '123'
    }
  ]
}
export const BottomLeft = Template.bind({})
BottomLeft.args = {
  value: 'test',
  direction: 'bottom left',
  items: [
    {
      content: 'test exaple', value: '123'
    },
    {
      content: 'test exaple', value: '123'
    }
  ]
}
export const BottomRight = Template.bind({})
BottomRight.args = {
  value: 'test',
  direction: 'bottom right',
  items: [
    {
      content: 'test exaple', value: '123'
    },
    {
      content: 'test exaple', value: '123'
    }
  ]
}
