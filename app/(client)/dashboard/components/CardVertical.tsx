import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const CardVertical = () => {
  return (
    <>
      <Card className="flex items-center">
        <a className="relative m-3 flex overflow-hidden rounded-xl" href="#" style={{height: 100, width: 100}}>
          <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
        </a>
        <div >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>

          </CardHeader>
          <CardContent className="p-2">
            <div className="text-md font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </div>
      </Card>
    </>
  )
}