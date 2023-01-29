import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    cp: '375px',
    tl: '760px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  colors: {
    primary: {
      blue: '#0F52BA',
      white: '#FFFFFF',
      gray: '#EEEEEE'
    },
  },
  fonts: {
    body: 'Montserrat-Regular',
    heading: 'Montserrat-Regular',
  },
  fontWeight: {
    regular: 400,
    medium: 600,
    bold: 700,
  },
  textStyles: {
    logoMain: {
      fontSize: '40px',
      fontFamily: 'Montserrat-Regular',
      fontWeight: 600,
      lineHeight: '19px',
      color: '#FFFFFF',
    },
    logoSec: {
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '20px',
      lineHeight: '19px',
      color: '#FFFFFF',
      fontFamily: 'Montserrat-Thin',
    },
    cartDrawer: {
      fontWeight: 700,
      lineHeight: '32.91px',
      color: '#FFFFFF',
      fontFamily: 'Montserrat-Regular',
    },
    footer: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14.63px',
      fontFamily: 'Montserrat-Regular',
      color: "black"
    },
    productCard: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '19px',
      fontFamily: 'Montserrat-Regular',
      color: "black"
    },
    productCardDescription: {
      fontWeight: 300,
      fontSize: '10px',
      lineHeight: '12px',
      fontFamily: 'Montserrat-Regular',
      color: "black"
    },
    productCardPrice: {
      fontWeight: 700,
      fontSize: '15px',
      lineHeight: '15px',
      fontFamily: 'Montserrat-Regular',
      color: "#ffffff",
      align: 'left',
      verticalAlign: 'top',
      letterSpacing: '0px',
      alignItems: 'center',
      textAlign: 'center'
    },
    cartCardName: {
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '17px',
      fontFamily: 'Montserrat-Regular',
      color: "black"
    },
    cartCardPrice: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '17px',
      fontFamily: 'Montserrat-Bold',
      color: "black"
    },
    cartCardButton: {
      fontWeight: 550,
      fontSize: '12px',
      lineHeight: '9.75px',
      fontFamily: 'Montserrat-Regular',
      color: "black"
    },
    cartCardText: {
      fontWeight: 400,
      fontSize: '5px',
      lineHeight: '6.1px',
      fontFamily: 'Montserrat-Regular',
      color: "black"
    },
  },

  styles: {
    global: {
      'html, body': {
        height: '100%',
      },
      'a:hover': {
        textDecoration: 'none!important',
      },
      strong: {
        fontFamily: 'Montserrat-Regular',
      },
      b: {
        fontFamily: 'Montserrat-Regular',
      },
    },
  },
});
