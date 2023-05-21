import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export function VStack (props: VStackProps) {
  const { align = 'start' } = props
  return <Flex {...props} direction="column" align={align}/>;
}
