/* eslint-disable unused-imports/no-unused-vars */
import {
  extendTheme,
  ComponentStyleConfig,
  theme as baseTheme
} from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#000000')(props)
    }
  })
};

const components: Record<string, ComponentStyleConfig> = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: { base: 20, md: '2.5rem' },
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('black', 'white')(props),
      textUnderlineOffset: 3
    })
  },
  Input: {
    defaultProps: (props: StyleFunctionProps) => ({
      mx: 'auto',
      my: '5',
      w: '500px',
      color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'blackAlpha.900',
      focusBorderColor: props.colorMode === 'dark' ? 'red.500' : 'red.200',
      _placeholder: { color: 'inherit' }
    }),
    baseStyle: (props: StyleFunctionProps) => ({
      mx: 'auto',
      my: '5',
      w: '500px',
      color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'blackAlpha.900',
      focusBorderColor: props.colorMode === 'dark' ? 'red.500' : 'red.200',
      _placeholder: { color: 'inherit' }
    }),

    variants: {
      flushed: (props: StyleFunctionProps) => ({
        mx: 'auto',
        my: '5',
        w: '500px',
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'blackAlpha.900',
        focusBorderColor: props.colorMode === 'dark' ? 'red.500' : 'red.200',
        _placeholder: { color: 'inherit' }
      })
    }
  }
};

const fonts = {
  heading: 'monospace'
};

const colors = {
  grassTeal: '#88ccca'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme(
  {
    config,
    styles,
    components: {
      Heading: {
        variants: {
          'section-title': {
            textDecoration: 'underline',
            fontSize: { base: 20, md: '2.5rem' },
            textUnderlineOffset: 6,
            textDecorationColor: '#525252',
            textDecorationThickness: 4,
            marginTop: 3,
            marginBottom: 4
          }
        }
      },
      Link: {
        baseStyle: props => ({
          color: mode('black', 'white')(props),
          textUnderlineOffset: 3
        })
      },
      Input: {
        baseStyle: {
          w: '500px'
        },

        variants: {
          flushed: props => ({
            mx: 'auto',
            my: '5',
            w: '500px',
            color:
              props.colorMode === 'dark' ? 'whiteAlpha.900' : 'blackAlpha.900',
            focusBorderColor:
              props.colorMode === 'dark' ? 'red.500' : 'red.200',
            _placeholder: { color: 'inherit' }
          })
        }
      }
    },
    fonts,
    colors
  },
  baseTheme
);
export default theme;
