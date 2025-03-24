import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/welcome"
import { CustomerNavBar } from "../components/navbar/CustomerNavBar"

export const CustomerViews = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <CustomerNavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
            </Route>
        </Routes>
    )
}