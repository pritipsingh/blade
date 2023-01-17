import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const NavigationIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7071 2.29292C22.006 2.59175 22.0847 3.04618 21.9038 3.42811L12.9038 22.4281C12.7229 22.8098 12.3218 23.0368 11.9015 22.9952C11.4812 22.9535 11.1323 22.6523 11.0299 22.2426L9.1754 14.8246L1.75749 12.9702C1.34773 12.8677 1.04651 12.5189 1.00489 12.0986C0.963272 11.6782 1.19022 11.2771 1.57194 11.0963L20.5719 2.09629C20.9539 1.91538 21.4083 1.99409 21.7071 2.29292ZM4.95337 11.7076L10.2426 13.0299C10.6008 13.1195 10.8806 13.3992 10.9702 13.7575L12.2925 19.0467L18.8976 5.10241L4.95337 11.7076Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default NavigationIcon;