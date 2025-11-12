import { defineNuxtPlugin } from '#app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faCheck, faServer, faCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faArrowRight, faCheck, faServer, faCode, faUsers);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
