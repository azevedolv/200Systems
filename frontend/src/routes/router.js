import { Routes, Route } from "react-router-dom"
import Admin from "../pages/Admin/Admin"
import IndexPage from "../pages/Index/IndexPage"



const Router = () =>{
return (

<Routes>
<Route index element={<IndexPage />} />
<Route path="/admin" element={<Admin />} />

</Routes>

)
}

export default Router 