import BreadCrumb from "@/components/breadcrumb";
import { ProductForm } from "@/components/forms/product-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Registered } from "../../my_account/registered/registered";

export default function Page() {
  const breadcrumbItems = [
    { title: "Search", link: "/explore" },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        <Registered />
      </div>
    </ScrollArea>
  );
}
