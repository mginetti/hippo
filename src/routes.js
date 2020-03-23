import Home from "./pages/Home";
import GameWords from "./pages/GameWords";
import Splash from "./pages/Splash";
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
    },
    {
        path: "/splash",
        component: Splash,
        name: "splash"
    }
];

export default routes;
