export const theme = {
  layer: {
    background: 'transparent',
  },

  global: {
    font: {
      family: 'Poppins',
      height: '1.5',
      weight: '400',
    },

    colors: {
      focus: '#f5d040',
      brand: '#104065',
      'accent-1': '#f5d040',
      'accent-2': '#25bbc5',
      'text-dark-grey': '#3b4649',
      'text-white': '#fff',
      border: '#fff',
      placeholder: 'rgba(255,255,255, .8)',
    },

    elevation: {
      light: {
        custom: '0 0 30px 10px #e5e5e5',
        yellowDesktopShadow: '25px 25px 2px 1px #fae79f',
        yellowMobileShadow: '10px 10px 2px 1px #fae79f',
      },
    },
    breakpoints: {
      extraSmall: { value: 576 },
      xSmall: { value: 700 },
      small: { value: 768 },
      mobile: { value: 780 },
      bMobile: { value: 900 },
      sTablet: { value: 990 },
      tablet: { value: 1050 },
      tabletOrMobile: { value: 1110 },
      desktopOrTablet: { value: 1210 },
      large: {},
    },

    edgeSize: {
      xxsmall: '0.188rem',
      xsmall: '0.375rem',
      small: '0.75rem',
      medium: '1.5rem',
      large: '3rem',
      xlarge: '6rem',
    },
  },

  button: {
    disabled: {
      extend: {
        cursor: 'not-allowed',
      },
    },
  },

  text: {
    small: {
      size: '0.875rem',
      height: '1.5',
    },
    medium: {
      size: '1rem',
      height: '1.5',
    },
    large: {
      size: '1.125rem',
      height: '1.5',
    },
    xlarge: {
      size: '1.25rem',
      height: '1.5',
    },
    xxlarge: {
      size: '1.5rem',
      height: '1.5',
    },
  },

  paragraph: {
    small: {
      size: '0.875rem',
      height: '1.5',
    },
    medium: {
      size: '1rem',
      height: '1.5',
    },
    large: {
      size: '1.125rem',
      height: '1.5',
    },
    xlarge: {
      size: '1.25rem',
      height: '1.5',
    },
    xxlarge: {
      size: '1.5rem',
      height: '1.5',
    },
  },

  heading: {
    color: 'brand',
    level: {
      1: {
        font: {
          weight: 700,
        },
        medium: {
          size: '2.5rem',
          height: '1.5',
        },
      },
      2: {
        font: {
          weight: 500,
        },
        medium: {
          size: '2.25rem',
          height: '1.5',
        },
        small: {
          size: '1rem',
          height: '1.5',
        },
      },
      3: {
        font: {
          weight: 500,
        },
        medium: {
          size: '1.875rem',
          height: '1.5',
        },
      },
      4: {
        font: {
          weight: 600,
        },
        medium: {
          size: '1.5rem',
          height: '1.5',
        },
      },
      5: {
        font: {
          weight: 400,
        },
        medium: {
          size: '1.25rem',
          height: '1.5',
        },
      },
    },
    responsiveBreakpoint: 'sTablet',
  },

  formField: {
    disabled: {
      background: {
        opacity: 1,
      },
    },
  },
};
