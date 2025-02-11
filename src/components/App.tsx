import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

const Register = lazy(() => import("../pages/RegisterPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Dictionary = lazy(() => import("../pages/DictionaryPage"));
const Recommend = lazy(() => import("../pages/ReccomendPage"));
const Training = lazy(() => import("../pages/TrainingPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index path="dictionary" element={<Dictionary />} />
        <Route path="recommend" element={<Recommend />} />
        <Route path="training" element={<Training />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
