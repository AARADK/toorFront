// app/category-section/index.tsx
import { HomeTitle } from "../HomeTitle";
import { CategoryWrapper } from "./CategoryWrapper";

const CategorySection = () => {
  return (
    <section className="bg-gray-200 py-8">
      <HomeTitle title="Categories" />
      <CategoryWrapper />
    </section>
  );
};

export default CategorySection;
