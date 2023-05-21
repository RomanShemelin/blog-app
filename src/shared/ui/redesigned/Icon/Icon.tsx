import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}
interface NonClicableIconProps extends IconBaseProps {
  clicable?: false
}
interface ClicableBaseProps extends IconBaseProps {
  clicable: true
  onClick: () => void
}

type IconProps = NonClicableIconProps | ClicableBaseProps

export function Icon (props: IconProps) {
  const { className, Svg, width = 32, height = 32, clicable, ...otherProps } = props;

  const icon = (
    <Svg
      className={classNames(cls.Icon, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  )

  if (clicable) {
    return (
      <button
        type="button"
        className={cls.button}
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    )
  }

  return icon
}
