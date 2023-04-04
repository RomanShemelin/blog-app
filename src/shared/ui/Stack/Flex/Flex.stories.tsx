/* eslint-disable i18next/no-literal-string */
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Flex } from './Flex'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({})
Row.args = {
  children: (
    <>
      <div>element</div>
      <div>element</div>
      <div>element</div>
      <div>element</div>
    </>
  )
}
export const Column = Template.bind({})
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>element</div>
      <div>element</div>
      <div>element</div>
      <div>element</div>
    </>
  )
}
export const ColumnGap16 = Template.bind({})
ColumnGap16.args = {
  direction: 'column',
  gap: '16',
  children: (
    <>
      <div>element</div>
      <div>element</div>
      <div>element</div>
      <div>element</div>
    </>
  )
}
export const RowGap4 = Template.bind({})
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div>element</div>
      <div>element</div>
      <div>element</div>
      <div>element</div>
    </>
  )
}
export const RowGap8 = Template.bind({})
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div>element</div>
      <div>element</div>
      <div>element</div>
      <div>element</div>
    </>
  )
}
export const RowGap16 = Template.bind({})
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div>element</div>
      <div>element</div>
      <div>element</div>
      <div>element</div>
    </>
  )
}
export const RowGap32 = Template.bind({})
RowGap32.args = {
  gap: '32',
  children: (
    <>
      <div>element</div>
      <div>element</div>
      <div>element</div>
      <div>element</div>
    </>
  )
}
