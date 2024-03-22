import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Flag } from "lucide-react";

export const TimelineCard = () => {
  const data = [
    {
      title: 'Title of section 1',
      date: '4 February, 2022',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      title: 'Title of section 1',
      date: '4 February, 2022',
      details: 'Lorem ipsum dolor sit amet, '
    },
  ];

  return (
    <>
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center gap-3">
          <h4>Timeline</h4>
        </CardHeader>
        <CardContent>
          <ol className="border-s-2 border-primary dark:border-primary-500">
            {
              data.map((e, index) => (
              <li>
                <div className="flex-start flex items-center">
                  <div
                    className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                  <h4 className="-mt-2 text-xl font-semibold">{e.title}</h4>
                </div>
                <div className="mb-6 ms-6 pb-6">
                  <a
                    href="#!"
                    className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    {e.date}
                  </a>
                  <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
                    {e.details}
                  </p>
                </div>
              </li>
              ))
            }
            <li>
              <div className="flex-start flex items-center">
                <div
                  className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                <div className="flex flex-row items-center gap-3">
                  <h4 className="-mt-2 text-xl font-semibold">
                    Start
                  </h4>
                  <Flag />
                </div>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>
    </>
  )
}