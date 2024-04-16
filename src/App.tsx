import { Outlet, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import ProtectedLayout from "./layout/ProtectedLayout";
import Home from "./pages/home";

import Variants from "./pages/variants";
import NewVariant from "./pages/variants/newVariant";
import EditVariant from "./pages/variants/editVariant";
import Supplier from "./pages/supplier";
import Categories from "./pages/categories";
import Products from "./pages/products";
import Settings from "./pages/settings";
import NewCategory from "./pages/categories/newCategory";
import EditCategory from "./pages/categories/editCategory";
import Orders from "./pages/orders";
import Campaigns from "./pages/campaigns";
import Members from "./pages/members";
import NewProduct from "./pages/products/newProduct";
import Comments from "./pages/comments";
import NewMember from "./pages/members/newMember";
import EditMember from "./pages/members/editMember";
import EditBrand from "./pages/brands/editBrand";
import NewBrand from "./pages/brands/newBrand";
import Brands from "./pages/brands";
import NewOrder from "./pages/orders/newOrder";
import EditOrder from "./pages/orders/editOrder";
import NewCampaign from "./pages/campaigns/newCampaign";
import EditCampaign from "./pages/campaigns/editCampaign";
import NewComment from "./pages/comments/newComment";
import EditComment from "./pages/comments/editComment";
import LoginView from "./pages/auth/login";
import NewSupplier from "./pages/supplier/newSupplier";
import EditSupplier from "./pages/supplier/editSupplier";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Outlet />}>
          <Route path="login" element={<LoginView />} />
        </Route>

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
            <Route path="new" element={<NewBrand />} />
            <Route path=":id/edit" element={<EditBrand />} />
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
            <Route path="new" element={<NewOrder />} />
            <Route path=":id/edit" element={<EditOrder />} />
          </Route>
          <Route path="/campaigns" element={<Outlet />}>
            <Route index element={<Campaigns />} />
            <Route path="new" element={<NewCampaign />} />
            <Route path=":id/edit" element={<EditCampaign />} />
          </Route>
          <Route path="/members" element={<Outlet />}>
            <Route index element={<Members />} />
            <Route path="new" element={<NewMember />} />
            <Route path=":id/edit" element={<EditMember />} />
          </Route>
          <Route path="/comments" element={<Outlet />}>
            <Route index element={<Comments />} />
            <Route path="new" element={<NewComment />} />
            <Route path=":id/edit" element={<EditComment />} />
          </Route>
          <Route path="/supplier" element={<Outlet />}>
            <Route index element={<Supplier />} />
            <Route path="new" element={<NewSupplier />} />
            <Route path=":id/edit" element={<EditSupplier />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
