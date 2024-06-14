import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { NutriValues } from "./pages/NutriValues";
import { Upgrade } from "./pages/Upgrade";
import { PageNotFound } from "./pages/PageNotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/nutritional-values" element={<NutriValues />} />
        <Route path="/upgrade" element={<Upgrade />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
