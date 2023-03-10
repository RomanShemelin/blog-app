import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ProfileCard } from './ProfileCard'
import avatar from 'shared/assets/tests/storybook.jpg'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard{...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    firstname: 'Igor',
    lastname: 'Potov',
    country: Country.RUSSIA,
    city: 'Moscow',
    currency: Currency.RUB,
    avatar
  }
}
export const withError = Template.bind({})
withError.args = {
  error: 'true'
}

export const Loading = Template.bind({})
Loading.args = { isLoading: true }
