import { createStore } from "vuex";
import main from "./user/index.js";

const store = createStore({
  modules: {
    main,
  },
});

export default store;
