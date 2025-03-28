
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { myAliases, iconSets } from '@/assets/icons/icons';


export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'md',
    aliases: myAliases,
    sets: iconSets,
  },

  theme: {
    defaultTheme: "light"
  },
})





