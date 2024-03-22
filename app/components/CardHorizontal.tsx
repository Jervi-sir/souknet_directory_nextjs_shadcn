import { MapPinIcon } from "lucide-react"

export const CardHorizontal = () => {
  return (
    <>
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md dark:bg-black">
        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="/explore/1">
          <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
          <div className="absolute top-0 left-0 m-2 flex gap-1">
            <span className="rounded-full bg-black px-2 py-1 text-center text-sm font-medium text-white">Category</span>
            <span className="rounded-full bg-green-600 px-2 py-1 text-center text-sm font-medium text-white">Labellisée</span>
          </div>
        </a>
        <div className="mt-4 px-5 pb-2">
          <a href="/explore/1">
            <h5 className="text-xl tracking-tight text-slate-900 dark:text-white">Project Name</h5>
          </a>
          <div className="mt-2 mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <span className="text-sm text-slate-900">
                <MapPinIcon className="text-black dark:text-white"/>
              </span>
              <span className="text-black dark:text-white">location location</span>
            </span>
            <div className="flex items-center">
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}