import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";

import { TabList } from "@/components/Tabs/TabsList";
import { ProductWithMarkdown } from "@/graphql/products/types";

import { TabListElement } from "../../Tabs/Tab";
import { Markdown } from "../Markdown";
import { ProductReview } from "./ProductReview";

export type TabsProps = {
  longDescription: ProductWithMarkdown["longDescription"];
  reviews: ProductWithMarkdown["reviews"];
};

export const ProductTabs = ({ longDescription, reviews }: TabsProps) => {
  return (
    <div className="col-span-1 md:col-span-2 gap-4 flex flex-wrap">
      <TabGroup>
        <TabList className="w-fit mb-4">
          <TabListElement>Description</TabListElement>
          <TabListElement disabled={!reviews.length}>Reviews</TabListElement>
        </TabList>
        <TabPanels className="basis-full">
          <TabPanel className="p-2">
            {<Markdown>{longDescription}</Markdown>}
          </TabPanel>
          <TabPanel as="ul" className="grid grid-cols-1 gap-4">
            {reviews.map((review) => (
              <ProductReview key={review.id} review={review} />
            ))}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};
