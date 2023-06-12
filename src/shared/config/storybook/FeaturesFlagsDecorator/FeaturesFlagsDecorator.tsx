import '@/app/styles/index.scss'
import { setFeatureFlags } from '@/shared/lib/features'
import { type FeatureFlags } from '@/shared/types/featureFlags'
import { type Story } from '@storybook/react'

export const FeaturesFlagsDecorator = (features: FeatureFlags) => (StoryComponent: Story) => {
  setFeatureFlags(features)
  return <StoryComponent/>
}
