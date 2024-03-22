import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardVertical } from "./components/CardVertical";
import { CardHorizontal } from "./components/CardHorizontal";
import { Filter, SlidersHorizontal } from "lucide-react";

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">

        <div className="flex w-full items-center space-x-2">
          <Input type="email" placeholder="Search" className="flex-1" />
          <Button type="submit">Search</Button>
          <Button type="button" variant="outline" className="p-2">
            <SlidersHorizontal className="dark:text-white" /> 
          </Button>
        </div>
          <div className="flex flex-wrap gap-2">
            {
              ['Startup', 'Communication', 'Manufactures', 'Agency', 'Innovation', 'Badge']
              .map((e, index) => (
                <figure key={index} className="shrink-0">
                  <Badge variant="secondary" >{ e }</Badge>
                </figure>
              ))
            }
          </div>

        <div className="pt-3">
          <h2 className="text-2xl font-bold tracking-tight">
            Newest Businesses 2 👋
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5">
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
          </div>
        </div>

        <div className="pt-3">
          <h2 className="text-2xl font-bold tracking-tight">
            Newest Businesses 👋
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5">
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
          </div>
        </div>

      </div>
    </ScrollArea>
  );
}
