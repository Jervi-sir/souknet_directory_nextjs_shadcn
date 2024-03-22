import { Icons } from "@/components/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckSquare, Flag, MapPinIcon, PhoneCall, User, User2, Wifi } from "lucide-react"
import { TimelineCard } from "./TimelineCard"
import { DetailCard } from "./DetailCard"
import { ProfileCard } from "./ProfileCard"
import { OwnerCard } from "./OwnerCard"

export const Registered = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <ProfileCard />
        <DetailCard />
        <TimelineCard />
        <OwnerCard />
      </div>
    </>
  )
}
