import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserTree from "./pages/UserTree";
import NotFound from "./pages/NotFound";

import Admin from "./pages/admin/Admin";
import Appearance from "./pages/admin/Appearance";
import Analytics from "./pages/admin/Analytics";
import Settings from "./pages/admin/Settings";

import PublicLayout from "./components/layout/PublicLayout";
import AuthLayout from "./components/layout/AuthLayout";
import AdminLayout from "./components/layout/AdminLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/login" element={<AuthLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/register" element={<AuthLayout />}>
            <Route index element={<Register />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path="appearance" element={<Appearance />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/:username" element={<UserTree />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
