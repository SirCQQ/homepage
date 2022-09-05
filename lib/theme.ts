import {
  extendTheme,
  useColorModeValue,
  ThemeExtension,
  ThemeOverride
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#000000')(props)
    }
  })
};

const components = {
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
    variant: {
      flushed: props => ({
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

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
