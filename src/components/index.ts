import type {App} from "vue"

const install = function(app: App) {
    app.config.globalProperties.$performance = {
        data: "performance"
    }
}

export default {
    install
}