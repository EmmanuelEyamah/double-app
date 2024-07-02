import { authRoutes, siteRoutes } from "./app/routes";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./components/Layouts/auth/AuthLayout";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          {siteRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                key={route.path + "---" + index}
                element={<route.Component />}
              />
            );
          })}
          {authRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                key={route.path + "---" + index}
                element={
                  <AuthLayout>
                    <route.Component />
                  </AuthLayout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
