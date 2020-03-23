import Home from "./pages/Home";
import GameWords from "./pages/GameWords";
const routes = [
    {
        path: "/",
        component: Home,
        name: "home"
    },
    {
        path: "/game-words",
        component: GameWords,
        name: "game-words"
    }
];

export default routes;
