import { Navigate, Route, Routes } from "react-router-dom";
import { CallOfDutty, Esports, Game, Search } from "../pages";
import { Navbar } from "../../ui";


export const GamesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
        <Routes>
            <Route path="esports" element={<Esports/>}/>
            <Route path="callofdutty" element={<CallOfDutty/>}/>

            <Route path="search" element={<Search/>}/>
            <Route path="game" element={<Game/>}/>

            <Route path="/" element={<Navigate to="/esports"/>}/>
        </Routes>
        </div>

    </>
  )
}
