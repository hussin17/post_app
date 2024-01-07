import './bootstrap';
import '../css/app.css';
import 'tailwindcss/tailwind.css';
import moduleData from '../../modules_statuses.json';
import 'https://checkout.razorpay.com/v1/checkout.js';

import { i18nVue, getActiveLanguage, isLoaded } from 'laravel-vue-i18n'

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link, usePage } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueLazyLoad from 'vue3-lazyload'
import { createPinia } from 'pinia'
//carousel
import VueSplide from '@splidejs/vue-splide';

// optionally import default styles
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";

delete L.Icon.Default.prototype._getIconUrl
let sub_domain_url = '';
let clearSlash =  import.meta.env.VITE_APP_DIR;
let subFolder = clearSlash.replaceAll("\\", "");

if(import.meta.env.VITE_APP_ENV == "production"){

    if(subFolder != null && subFolder != '')
    {
        sub_domain_url = '/'  + import.meta.env.VITE_APP_DIR;
    }
    else
    {
        sub_domain_url = '';
    }


}else{
    sub_domain_url = '';
}
L.Icon.Default.mergeOptions({
    iconRetinaUrl: sub_domain_url+'/images/assets/marker-icon-2x.png',
    iconUrl: sub_domain_url+'/images/assets/marker-icon.png',
    shadowUrl: sub_domain_url+'/images/assets/marker-shadow.png'
});

library.add(fas, fab, far);

// axios.defaults.headers.common['Authorization'] = 'Bearer zUMi0HNjAtnREMj3weG7XEv6ogEVovsf6eUFgOp4';

let modulesObject = Object.keys(moduleData);
// console.log(modulesObject);

function withVite(pages, name) {
    // console.log(pages)
    for (const path in pages) {
        if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
            return typeof pages[path] === 'function'
                ? pages[path]()
                : pages[path]
        }
    }

    throw new Error('Page not found: ' + name)
}

const pinia = createPinia()


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
// const base = 'http://localhost:8888/admin/';
createInertiaApp({
    title: (title) => `${title}`,
    // base,
    resolve: (name) => {
        let part = name.split("::")
        // console.log(part);

        try {
            return withVite(import.meta.glob('./Pages/**/*.vue'), name)
        } catch (e) {
            // console.log(e.message);
            return withVite(import.meta.glob('../../Modules/**/Resources/Pages/**/*.vue'), name)
        }
    },
    setup({ el, app, props, plugin }) {


            let sub_domain_url = '';
            let clearSlash =  import.meta.env.VITE_APP_DIR;
            let subFolder = clearSlash.replaceAll("\\", "");


            if(import.meta.env.VITE_APP_ENV == "production"){

                if(subFolder != null && subFolder != '')
                {
                    sub_domain_url = '/'  + import.meta.env.VITE_APP_DIR;
                }
                else
                {
                    sub_domain_url = '';
                }


            }else{
                sub_domain_url = '';
            }

            const base_url = sub_domain_url+"/api/v1.0"

            // let appDomain = import.meta.env.VITE_BASE_DOMAIN;

            // let clearSlash = import.meta.env.VITE_APP_DIR.replaceAll('/', '');
            // let subFolder = clearSlash.replaceAll("\\", "");

            // let apiurl = "";
            // if (!subFolder) {
            //     apiurl = appDomain;
            // } else {
            //     apiurl = appDomain + subFolder + '/';
            // }



        let activeLanguage = getActiveLanguage();
        if (localStorage.activeLanguage != null) {
            activeLanguage = localStorage.activeLanguage;
        } else {
            localStorage.activeLanguage = activeLanguage;
        }

        const apiToCall = base_url + '/mobile_language/langs?symbol=' + activeLanguage.toLowerCase();
        // console.log(apiToCall);

        axios.get(apiToCall).then(res => {
            // axios.get('@/lang').then(res => {
            return createApp({ render: () => h(app, props) })
                .use(plugin)
                .use(OpenLayersMap)
                .use( VueSplide ) //carousel
                .use(store)
                .use(CKEditor)
                .use(pinia)
                .use(VueLazyLoad, {
                    // options...
                })
                .use(i18nVue, {
                    lang: activeLanguage.toLowerCase(),
                    // loaded: isLoaded(),
                    fallbackLang: 'en',
                    // resolve: lang => {
                    //     const langs = import.meta.globEager('../../lang/*.json');
                    //     return langs[`../../lang/${lang}.json`].default;
                    // },
                    resolve: lang => {
                        // const langs = import.meta.globEager('../../lang/*.json');
                        return res.data;
                    },
                })
                .component('InertiaHead', Head)
                .component('InertiaLink', Link)
                .component('font-awesome-icon', FontAwesomeIcon)
                .component('Datepicker', Datepicker)
                .mixin({ methods: { route } })
                // .mixin({ methods: { route: window.route } })

                .mount(el)

        }).catch(error => {
            console.log('error at api call for lang');
            // console.log(error);
            return createApp({ render: () => h(app, props) })
                .use(plugin)
                .use(OpenLayersMap)
                .use( VueSplide ) //carousel
                .use(store)
                .use(CKEditor)
                .use(pinia)
                .use(VueLazyLoad, {
                    // options...
                })
                .use(i18nVue, {
                    lang: activeLanguage.toLowerCase(),
                    // loaded: isLoaded(),
                    fallbackLang: 'en',
                    resolve: lang => {
                        const langs = import.meta.globEager('../../lang/en.json');
                        return langs[`../../lang/${lang}.json`].default;
                    },
                    // resolve: lang => {
                    //     const langs = import.meta.globEager('../../lang/*.json');
                    //     return res.data;
                    // },
                })
                .component('InertiaHead', Head)
                .component('InertiaLink', Link)
                .component('font-awesome-icon', FontAwesomeIcon)
                .component('Datepicker', Datepicker)
                .mixin({ methods: { route } })
                // .mixin({ methods: { route: window.route } })

                .mount(el)
        });
    },
})

InertiaProgress.init({ color: '#1267dc', showSpinner: true, includeCSS: true });

// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => require(`./Pages/${name}.vue`),
//     setup({ el, app, props, plugin }) {
//         return createApp({ render: () => h(app, props) })
//             .use(plugin)
//             .mixin({ methods: { route } })
//             .mount(el);
//     },
// });

// InertiaProgress.init({ color: '#4B5563' });
