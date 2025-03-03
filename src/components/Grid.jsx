export default function Grid() {
    return (
      <div className="flex justify-center items-center">
        
        <div className="bg-gray-50 py-24 sm:py-32 sm:max-w-screen-md w-full h-screen">
        <div className='text-center'>
      <h2 className="text-3xl font-bold mb-5 text-white">Gallery</h2>
      <p className='text-grey '>Welcome to our world.</p>
      </div>
      <div class="grid grid-flow-col grid-rows-3 gap-8 py-8 w-full h-full px-5 ">
  <div class="bg-primary sm:row-span-3 w-full h-full rounded-3xl"></div>
  <div class="bg-primary sm:col-span-2 w-full h-full rounded-3xl "></div>
  <div class="bg-primary sm:col-span-2 sm:row-span-2 w-full h-full rounded-3xl"></div>
</div>
      </div>
      </div>
    )
  }
  