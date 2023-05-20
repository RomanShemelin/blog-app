import { type FeatureFlags } from '@/shared/types/featureFlags';

// фичи в ходе сессии не меняются
let featureFlags: FeatureFlags;

export function setFeatureFlags (newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}
export function getFeatureFlags (flag: keyof FeatureFlags) {
  return featureFlags?.[flag]
}
