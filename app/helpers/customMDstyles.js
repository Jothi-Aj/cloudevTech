import {
  buttonBorder,
  darkBlack,
  nunitobold,
  buttonTextColor,
  buttonbg,
  buttonRipple,
  fontQsbold,
  darkWhite,
  darkBlue,
  darkRed,
  mariner,
  disablebtn,
  buttonPrimaryColor,
  buttonSecondaryColor,
} from 'helpers/variables';

export const buttonStyles = {
  labelStyle: {
    backgroundColor: mariner,
    color: buttonTextColor,
    height: '70px',
    letterSpacing: '2px',
    borderRadius: '0px',
    padding: '0px 15px',
    fontFamily: fontQsbold,
    fontSize: '12px',
    maxWidth: '340px',
    textTransform: 'uppercase',
    lineHeight: '50px',
    opacity: 0.15,
  },
  primaryLabel: {
    border: '1px',
    borderColor: mariner,
    backgroundColor: buttonbg,
    color: buttonPrimaryColor,
    height: '50px',
    letterSpacing: '-0.6px',
    borderRadius: '22px',
    padding: '14px 5px',
    fontFamily: nunitobold,
    fontSize: '16px',
    minWidth: '100%',
    textTransform: 'capitalize',
    lineHeight: '24px',
    zIndex: 0,
  },
  teritaryLabel: {
    border: '2px',
    borderColor: mariner,
    backgroundColor: '#F59700',
    color: '#fff',
    height: 'auto',
    minHeight: '50px',
    letterSpacing: '1px',
    padding: '16px 5px 16px',
    fontFamily: nunitobold,
    borderRadius: '4px',
    fontSize: '12px',
    minWidth: '100%',
    textTransform: 'uppercase',
    lineHeight: '24px',
    zIndex: 1,
  },
  disableLabel: {
    border: '1px',
    borderColor: mariner,
    backgroundColor: disablebtn,
    color: darkWhite,
    height: 'auto',
    minHeight: '50px',
    letterSpacing: '-0.6px',
    borderRadius: '22px',
    padding: '14px 5px',
    fontFamily: nunitobold,
    fontSize: '16px',
    minWidth: '100%',
    textTransform: 'capitalize',
    lineHeight: '24px',
    zIndex: 0,
  },
  secondaryLabel: {
    border: '2px solid',
    borderColor: buttonBorder,
    backgroundColor: darkWhite,
    color: buttonSecondaryColor,
    height: '50px',
    letterSpacing: '-0.6px',
    borderRadius: '22px',
    padding: '10px 5px',
    fontFamily: nunitobold,
    fontSize: '16px',
    minWidth: '100%',
    textTransform: 'capitalize',
    lineHeight: '24px',
    zIndex: 0,
    hoverColor: darkWhite,
  },
  facebookLable: {
    backgroundColor: darkBlue,
    color: darkWhite,
    height: '50px',
    letterSpacing: '2px',
    borderRadius: '0px',
    padding: '0px 15px',
    fontFamily: fontQsbold,
    fontSize: '12px',
    maxWidth: '340px',
    textTransform: 'uppercase',
    lineHeight: '50px',
    marginBottom: '25px',
  },
  googleLable: {
    backgroundColor: darkRed,
    color: darkWhite,
    height: '50px',
    letterSpacing: '2px',
    borderRadius: '0px',
    padding: '0px 15px',
    fontFamily: fontQsbold,
    fontSize: '12px',
    maxWidth: '340px',
    textTransform: 'uppercase',
    lineHeight: '50px',
  },
};

export const rippleColor = buttonRipple;
export const hoverColor = '#F59700';
export const hoverColorBlack = darkBlack;
