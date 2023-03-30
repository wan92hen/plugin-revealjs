import { definePlugin } from "@halo-dev/console-shared";
import { markRaw } from "vue";
import revealjs from "./components/revealjs.vue";
import "./style.css";

export default definePlugin({
  extensionPoints: {
    "editor:create": () => {
      return [
        {
          name: "revealjs",
          displayName: "revealjs",
          component: markRaw(revealjs),
          rawType: "revealjs",
        },
      ];
    },
  },
});
