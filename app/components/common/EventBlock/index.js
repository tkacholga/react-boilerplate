import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import EventBlockWrapper, {
  IconWrapper,
  ContentWrapper,
  ButtonWrapper,
  Badge,
} from './eventBlock.style';

const EventBlock = ({
  className,
  icon,
  city,
  button,
  date,
  iconPosition,
  additionalContent,
  wrapperStyle,
  iconStyle,
  contentStyle,
  btnWrapperStyle,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['event__block'];

  // Add icon position class
  if (iconPosition) {
    addAllClasses.push(`icon_${iconPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // check icon value and add
  const Icon = icon && (
    <IconWrapper className="icon__wrapper" {...iconStyle}>
      {icon}
    </IconWrapper>
  );

  return (
    <EventBlockWrapper
      className={addAllClasses.join(' ')}
      {...wrapperStyle}
      {...props}
    >
      {Icon}

      {city || date || button ? (
        <Fragment>
          <ContentWrapper className="content__wrapper" {...contentStyle}>
            <Badge>VNDR</Badge>
            {city}
            {date}
            {button && (
              <ButtonWrapper className="button__wrapper" {...btnWrapperStyle}>
                {button}
              </ButtonWrapper>
            )}
          </ContentWrapper>
          {additionalContent}
        </Fragment>
      ) : (
        ''
      )}
    </EventBlockWrapper>
  );
};

EventBlock.propTypes = {
  /** ClassName of the EventBlock */
  className: PropTypes.string,

  /** city prop contain a react component. You can use our Heading component from reusecore */
  city: PropTypes.element,

  /** date prop contain a react component. You can use our Text component from reusecore */
  date: PropTypes.element,

  /** button prop contain a react component. You can use our Button component from reusecore */
  button: PropTypes.element,

  /** Set icon position of the EventBlock */
  iconPosition: PropTypes.oneOf(['top', 'left', 'right']),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: PropTypes.object,

  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle: PropTypes.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: PropTypes.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: PropTypes.object,
};

EventBlock.defaultProps = {
  iconPosition: 'top',
};

export default EventBlock;
