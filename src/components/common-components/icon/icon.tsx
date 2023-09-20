import PropTypes from 'prop-types';
import * as iconData from './icon-data';
import styles from './icon.module.scss';

type iconProps = {
  id: string;
  dataTestId?: string;
  color: string;
  size: number;
  name: string;
  strikeThrough: boolean;
};

/** Constants **/
const VIEWBOX_DEFAULT = 40;

/** Icon Component **/
const Icon = (props: iconProps) => {
  const { id, color } = props;
  const size = `${props.size}px`;
  const sizeStyle = {
    height: size,
    width: size
  };

  const getSvg = (name: string) => {
    const icon = iconData.iconsByName(name);
    const strikeThroughIcon = props.strikeThrough
      ? iconData.iconsByName('strike_through')
      : null;

    if (icon !== undefined) {
      const viewHeight = Object.prototype.hasOwnProperty.call(
        icon,
        'viewHeight'
      )
        ? icon.viewHeight
        : VIEWBOX_DEFAULT;
      const viewWidth = Object.prototype.hasOwnProperty.call(icon, 'viewWidth')
        ? icon.viewWidth
        : VIEWBOX_DEFAULT;
      // const svgStyle = Object.prototype.hasOwnProperty.call(icon, 'style')
      //   ? icon.style
      //   : null;
      const embedColor = Object.prototype.hasOwnProperty.call(
        icon,
        'pathColors'
      );

      return (
        <svg
          width={viewWidth}
          height={viewHeight}
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          version="1.1"
          aria-hidden
          fill="currentColor"
          focusable={false}
          xmlns="http://www.w3.org/2000/svg"
          // style={svgStyle}
        >
          <g stroke="none" strokeWidth="1" fillRule="evenodd">
            {icon.paths.map((path, index) => (
              <path
                key={index}
                d={path}
                fill={
                  color.length
                    ? color
                    : embedColor
                    ? icon.pathColors[index]
                    : 'inherit'
                }
              />
            ))}
            {strikeThroughIcon && (
              <path
                d={strikeThroughIcon.paths[0]}
                fill={strikeThroughIcon.pathColors[0]}
              />
            )}
          </g>
        </svg>
      );
    } else {
      return (
        <div
          style={{
            textAlign: 'center',
            fontSize: '200%'
          }}
        >
          ?
        </div>
      );
    }
  };

  return (
    <div
      {...(id && { id })}
      className={styles.icon}
      data-testid={props.dataTestId}
    >
      <div style={sizeStyle} className={`${styles.svg_wrapper}`}>
        {getSvg(props.name)}
      </div>
    </div>
  );
};

export default Icon;

Icon.defaultProps = {
  name: '',
  size: 24,
  color: '',
  id: '',
  strikeThrough: false,
  dataTestId: undefined
};

Icon.propType = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  id: PropTypes.string,
  strikeThrough: PropTypes.bool,
  dataTestId: PropTypes.string
};
