import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const ProfileCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-3">
        <CardTitle>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardTitle>
        <CardDescription className="text-xl font-bold">Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex lg:flex-row md:flex-col gap-3">
          <div className="relative flex flex-1 overflow-hidden rounded-xl" >
            <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
          </div>
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-3">
            <div className="relative flex overflow-hidden rounded-xl h-full w-full" style={{ height: '100%', width: '100%' }}>
              <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
            </div>
            <div className="relative flex overflow-hidden rounded-xl" style={{ height: '100%', width: '100%' }}>
              <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
            </div>
            <div className="relative flex overflow-hidden rounded-xl" style={{ height: '100%', width: '100%' }}>
              <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
            </div>
            <div className="relative flex overflow-hidden rounded-xl" style={{ height: '100%', width: '100%' }}>
              <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}