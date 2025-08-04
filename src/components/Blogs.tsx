import { useTranslation } from "react-i18next";
import { blogs } from "../lib/helper";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 lg:px-40 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        {t("blog.title")}
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};
