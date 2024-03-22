import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckSquare, MapPinIcon, PhoneCall, User, Wifi } from "lucide-react"

export const DetailCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-3">
        <Card className="w-full p-0 flex flex-row items-center bg-[#DDF853]">
          <div className="2xl:w-[10%] px-5 flex justify-center">
            <CheckSquare />
          </div>
          <div>
            <CardHeader className="flex p-2 flex-row items-center gap-3">
              <h6>Labellisee</h6>
            </CardHeader>
            <CardFooter className="flex p-2 ">
              <h6>2023 - 2024</h6>
            </CardFooter>
          </div>
        </Card>

        <Card className="w-full p-0 flex flex-row items-center ">
          <div className="2xl:w-[10%] px-5 flex justify-center">
            <User />
          </div>
          <div>
            <CardHeader className="flex p-2 flex-row items-center gap-3">
              <h6>People</h6>
            </CardHeader>
            <CardFooter className="flex p-2 ">
              <h6>2</h6>
            </CardFooter>
          </div>
        </Card>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 items-start">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-gray-300 rounded-lg">
            <PhoneCall />
          </div>
          <span>+91 6584687</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-2 bg-gray-300 rounded-lg">
            <MapPinIcon />
          </div>
          <span>94QJ+X77, Location lcaiton locatoin</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-2 bg-gray-300 rounded-lg">
            <Wifi />
          </div>
          <span>www.sdfisjf.asd</span>
        </div>

      </CardContent>
    </Card>
  )
}