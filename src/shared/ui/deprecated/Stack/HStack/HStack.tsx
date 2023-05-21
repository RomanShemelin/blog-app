import { Flex, type FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export function HStack (props: HStackProps) {
  return <Flex direction="row" {...props} />;
}
