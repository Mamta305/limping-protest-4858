import React from 'react'
import { Routes, Route } from "react-router-dom"
import Mainpage from '../Pages/Home';
import MultiStep from '../Pages/Login';
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Mainpage/>} />
                <Route path='/login' element={<MultiStep />} />
                </Routes>

        </div>
    )
}

export default AllRoutes;