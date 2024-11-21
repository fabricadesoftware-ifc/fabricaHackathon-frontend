import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const darkCustom = {
  dark: true,
  colors: {
    background: '#18142b',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-gradient':
      'radial-gradient(147.74% 409.03% at -2.67% 59.14%, #FE5C2B 0%, rgba(254, 92, 43, 0.37) 50%)',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'darkCustom',
    themes: {
      darkCustom
    }
  },
  components,
  directives
})

export default vuetify
