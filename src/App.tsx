import { Outlet, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import ProtectedLayout from "./layout/ProtectedLayout";
import Home from "./pages/home";

import Variants from "./pages/variants";
import NewVariant from "./pages/variants/newVariant";
import EditVariant from "./pages/variants/editVariant";

import Categories from "./pages/categories";
import Brands from "./pages/brands";
import Products from "./pages/products";
import Settings from "./pages/settings";
import NewCategory from "./pages/categories/newCategory";
import EditCategory from "./pages/categories/editCategory";
import Orders from "./pages/orders";
import Campaigns from "./pages/campaigns";
import Members from "./pages/members";
import NewProduct from "./pages/products/newProduct";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <ProtectedLayout />
            </DefaultLayout>
          }
        >
          <Route path="/home" element={<Outlet />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/variants" element={<Outlet />}>
            <Route index element={<Variants />} />
            <Route path="new" element={<NewVariant />} />
            <Route path=":id/edit" element={<EditVariant />} />
          </Route>
          <Route path="/categories" element={<Outlet />}>
            <Route index element={<Categories />} />
            <Route path="new" element={<NewCategory />} />
            <Route path=":id/edit" element={<EditCategory />} />
          </Route>
          <Route path="/brands" element={<Outlet />}>
            <Route index element={<Brands />} />
          </Route>
          <Route path="/products" element={<Outlet />}>
            <Route index element={<Products />} />
            <Route path="new" element={<NewProduct />} />ƒ
          </Route>
          <Route path="/settings" element={<Outlet />}>
            <Route index element={<Settings />} />
          </Route>
          <Route path="/orders" element={<Outlet />}>
            <Route index element={<Orders />} />
          </Route>
          <Route path="/campaigns" element={<Outlet />}>
            <Route index element={<Campaigns />} />
          </Route>
          <Route path="/members" element={<Outlet />}>
            <Route index element={<Members />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
