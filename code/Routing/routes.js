//// 1. Define route components.
//// These can be imported from other files
import dashboard from './../Pages/dashboard.vue'
import mixins from './../Pages/mixins.vue'
import lifecycle from './../Pages/vueLifecycle.vue'
import lodash from './../Pages/lodash.vue'
import arrowFunctions from './../Pages/arrowFunctions.vue'
import formValidation from './../Pages/formValidation.vue'
import modal from './../Pages/modalDemo.vue'
import templateLiterals from './../Pages/templateLiterals.vue'
import routerProps from './../Pages/routerProps.vue'
import ajaxRequests from './../Pages/ajaxRequests.vue'
import functionalPage from './../Pages/functionalCompsPage.vue'
import propSync from './../Pages/propSyncPage.vue'


const routes =[
    { name: '*', path: '*', component: dashboard },
    { name: 'dashboard', path: '/dashboard', component: dashboard },
    { name: 'mixins', path: '/mixins', component: mixins },
    { name: 'lifecycle', path: '/lifecycle', component: lifecycle },
    { name: 'lodash', path: '/lodash', component: lodash },
    { name: 'arrowFunctions', path: '/arrowfunctions', component: arrowFunctions },
    { name: 'formValidation', path: '/formvalidation', component: formValidation },
    { name: 'modal', path: '/modal', component: modal },
    { name: 'templateLiterals', path: '/templateliterals', component: templateLiterals },
    { name: 'routerProps', path: '/routerprops/:id', component: routerProps, props:true },
    { name: 'ajaxRequests', path: '/ajaxrequests', component: ajaxRequests },
    { name: 'functionalPage', path:'/functionalPage', component:functionalPage },
    { name: 'propSync', path:'/propSync', component:propSync}
  ]


export default routes

