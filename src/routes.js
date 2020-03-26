import Home from "./pages/Home";
import GameWords from "./pages/GameWords";
import Splash from "./pages/Splash";
import Info from "./pages/Info";
import Mascottes from "./pages/Mascottes";
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
    },
    {
        path: "/info",
        component: Info,
        name: "info"
    },
    {
        path: "/mascottes",
        component: Mascottes,
        name: "mascottes"
    }
];

export default routes;
