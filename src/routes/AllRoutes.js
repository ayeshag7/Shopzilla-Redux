import { Routes, Route } from "react-router-dom";
import { Cart, ProductList } from "../pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<ProductList title="Home"/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  )
}
