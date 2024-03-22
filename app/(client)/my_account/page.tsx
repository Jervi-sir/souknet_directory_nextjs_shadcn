import BreadCrumb from "@/components/breadcrumb";
import { CreateProfileOne } from "@/components/forms/user-profile-stepper/create-profile";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Registered } from "./registered/registered";

const breadcrumbItems = [{ title: "My Profile", link: "/dashboard/profile" }];
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Registered />
      </div>
    </ScrollArea>
  );
}

/*
<ProductForm
  categories={[
    { _id: "shirts", name: "shirts" },
    { _id: "pants", name: "pants" },
  ]}
  initialData={null}
  key={null}
/>
*/
