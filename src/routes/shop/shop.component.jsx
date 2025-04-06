import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.css";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
