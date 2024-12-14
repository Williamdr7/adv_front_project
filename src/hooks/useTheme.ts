
export function useTheme() {
  if (process.env.MODERN_TARGET === 'browser') {
    localStorage.setItem('X_THEME', 'dryve');
  }
  const theme = {
    colors: {
      primary: {
        1: '#001b7c',
        2: '#002892',
        3: '#0039b7',
        4: '#014edc',
        5: '#0065ff',
        6: '#3e93fe',
        7: '#66aeff',
        8: '#99cdff',
        9: '#cce8fe',
        10: '#eaf9ff',
      },
      secondary: {
        1: '#050b25',
        2: '#09102c',
        3: '#0f1837',
        4: '#142141',
        5: '#1d2c4b',
        6: '#506793',
        7: '#809bca',
        8: '#b3caec',
        9: '#d8e5f6',
        10: '#f1f8fe',
      },
      neutrals: {
        1: '#31131d',
        2: '#3b2027',
        3: '#493336',
        4: '#564a4a',
        5: '#666666',
        6: '#a3a3a3',
        7: '#d1d1d1',
        8: '#efefef',
        9: '#f7f7f7',
        10: '#f9f9f9',
      },
      response: {
        success: '#36b37e',
        warning: '#ffab00',
        danger: '#ff5630',
      },
      mono: {
        white: '#ffffff',
        black: '#000000',
      },
    },
    elevation: {
      1: '0 1px 4px rgba(0, 0, 0, 0.08)',
      2: '0 2px 6px rgba(0, 0, 0, 0.08)',
      3: '0 4px 10px rgba(0, 0, 0, 0.08)',
      4: '0 6px 14px rgba(0, 0, 0, 0.08)',
      5: '0 8px 18px rgba(0, 0, 0, 0.08)',
      none: '0 0px 0px rgba(0, 0, 0, 0.00)',
    },
    fontSizes: {
      heading: {
        1: '48px',
        2: '40px',
        3: '32px',
        4: '24px',
        5: '20px',
        6: '16px',
      },
      paragraph: {
        large: '18px',
        medium: '16px',
        small: '14px',
        extraSmall: '12px',
        tiny: '10px',
      },
      label: {
        extraLarge: '20px',
        large: '18px',
        medium: '16px',
        small: '14px',
        extraSmall: '12px',
        tiny: '10px',
      },
    },
    fontWeights: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    lineHeights: {
      heading: {
        1: '48px',
        2: '40px',
        3: '32px',
        4: '24px',
        5: '20px',
        6: '16px',
      },
      paragraph: {
        large: '24px',
        medium: '22px',
        small: '20px',
        extraSmall: '16px',
        tiny: '14px',
      },
      label: {
        extraLarge: '20px',
        large: '18px',
        medium: '16px',
        small: '14px',
        extraSmall: '12px',
        tiny: '10px',
      },
    },
    opacity: {
      1: 0.1,
      2: 0.2,
      3: 0.3,
      4: 0.4,
      5: 0.5,
      6: 0.6,
      7: 0.7,
      8: 0.8,
      9: 0.9,
      none: 1,
    },
    radius: {
      none: '0px',
      extraSmall: '2px',
      small: '4px',
      medium: '6px',
      large: '8px',
      extraLarge: '10px',
      pill: '500px',
      circular: '50%',
    },
    screenSizes: {
      xxs: '480px',
      xs: '520px',
      sm: '768px',
      md: '992px',
      lg: '1280px',
      xl: '1440px',
      xxl: '1680px',
    },
    spacing: {
      none: '0px',
      atto: '2px',
      femto: '4px',
      pico: '6px',
      nano: '8px',
      micro: '12px',
      xxxs: '16px',
      xxs: '24px',
      xs: '32px',
      sm: '40px',
      md: '48px',
      lg: '56px',
      xl: '64px',
      xxl: '80px',
      xxxxl: '120px',
      huge: '160px',
      giant: '200px',
    },
  };
  return theme;
}