import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
import "./assets/normalize.css";
const app = createApp(App);

app.use(router);
app.use(
  createVuestic({
    config: {
      colors: {
        primary: "#5FD068",
        secondary: "#4B8673",
        custom: "#ffff",
      },
    },
  })
);
app.mount("#app");
