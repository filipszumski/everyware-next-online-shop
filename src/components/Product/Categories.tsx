import { GetProductQuery } from "@/graphql/generated/graphql";

type CategoriesProps = {
  categories: NonNullable<GetProductQuery["product"]>["categories"];
};

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div>
      <span>Categories: </span>
      {categories.map(({ name }) => (
        <span
          className="p-1 bg-primaryLight text-primary w-fit rounded-md mr-1"
          key={name}
        >
          {name}
        </span>
      ))}
    </div>
  );
};
