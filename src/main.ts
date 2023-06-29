import Vue, {createApp} from "vue";
import performance from './components/index'

import App from './App.vue'

const app = createApp(App).use(
    performance
)
// 挂载到id=app的节点上面
app.mount('#app')