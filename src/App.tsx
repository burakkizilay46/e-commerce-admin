import { Outlet, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import ProtectedLayout from "./layout/ProtectedLayout";
import Home from "./pages/home";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
