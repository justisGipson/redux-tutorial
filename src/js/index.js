import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;

store.subscribe(() => console.log("REDUX YO!"));

store.dispatch(addArticle({ title: "REDUX TUTORIAL", id: 1 }));

store.getState();
