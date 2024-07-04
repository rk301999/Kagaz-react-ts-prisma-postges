

const SkeletonPost = () => {
  return (
    <div className="border-b py-8 px-2 animate-pulse w-[590px]">
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
    </div>
  )
}

export const SkeletonPostId =()=>{
  return <div className='w-screen h-screen flex items-center justify-center bg-signup '>
  <div className=' w-[90%]  h-screen py-16'>
    <div className='grid grid-rows-6 lg:grid-cols-6 gap-10'>
        <div className='row-span-4 lg:col-span-4  flex flex-col gap-6'>
            
            <h1 className='h-4 bg-gray-300 rounded-full w-48'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
            <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
        </div>
         <div className=' row-span-2 lg:col-span-2 flex flex-col gap-2  shadow-xl px-3 py-7 h-fit rounded-2xl'>
            <h1 className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24 mb-4'></h1>
            <div className='flex gap-4 items-center'>
                <p className="h-2.5 w-2.5 bg-gray-300 rounded-full "></p>
                <div className='flex flex-col gap-2'>
                    <h1 className='h-4 bg-gray-300 rounded-full w-48'></h1>
                    <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
                    <h1 className='h-2.5 bg-gray-300 rounded-full w-full'></h1>
                </div>
            </div>
         </div>
    </div>
  </div>
  </div>  
}

export default SkeletonPost
