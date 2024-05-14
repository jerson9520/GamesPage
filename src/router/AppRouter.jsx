import {  Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { GamesRoutes } from "../games"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="/*" element={<GamesRoutes/>}/>
        </Routes>
    </>
  )
}
