import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CheckSquare, Facebook, Linkedin, Mail, MapPinIcon, PhoneCall, User, Wifi } from "lucide-react"

export const OwnerCard = () => {
  const website = 'http://example.com/link/to/document';
  const people = [
    {
      img: '/avatars/03.png',
      name: 'KHEIRO KHAROBI KHEIRODIN',
      position: 'KKK',
      phone: '+21358468',
      facebook: 'asd',
      linkedin: 'asd',
      email: 'asd'
    }, {
      img: '/avatars/03.png',
      name: 'Lunai',
      position: 'Dubai Nigg',
      phone: '+21358468',
      facebook: 'asd',
      linkedin: 'asd',
      email: 'asd'
    }, {
      img: '/avatars/03.png',
      name: 'Jervi Sir',
      position: 'Slave',
      phone: '+21358468',
      facebook: 'asd',
      linkedin: 'asd',
      email: 'asd'
    },
  ]

  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle>Business Members</CardTitle>
        <CardDescription>
          Anyone with the link can view this document.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input value={ website } readOnly />
          <Button variant="secondary" className="shrink-0">
            Copy Link
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">People with access</h4>
          <div className="grid gap-6">
            {
              people.map((e, index) => (
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={ e.img } />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                      { e.name }
                      </p>
                      <p className="text-sm text-muted-foreground">{ e.position }</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1">
                    <Button className="p-2">
                      <PhoneCall size={20} />
                      <a href={`tel:${ e.phone }`}></a>
                    </Button>
                    <Button className="p-2">
                      <Facebook size={20} />
                      <a href={`tel:${ e.phone }`}></a>
                    </Button>
                    <Button className="p-2">
                      <Linkedin size={20} />
                      <a href={`tel:${ e.phone }`}></a>
                    </Button>
                    <Button className="p-2">
                      <Mail size={20} />
                      <a href={`tel:${ e.phone }`}></a>
                    </Button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </CardContent>
    </Card>
    </>
  )
}