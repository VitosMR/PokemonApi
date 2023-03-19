import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutPokemonPages from "./../pages/AboutPokemonPages/AboutPokemonPages";

export default function AppRouter(){
    return(
        <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/about/:id' element = {<AboutPokemonPages/>} />
        </Routes>
    );
}