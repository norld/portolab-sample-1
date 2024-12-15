export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to</span>{' '}
                <span className="block text-yellow-400 xl:inline">ArtistikDesign</span>
              </h1>
              <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Where creativity meets functionality. We craft unique digital experiences that inspire and engage.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <svg className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F2C94C" d="M39.5,-65.3C50.2,-56.7,57.1,-44.1,62.6,-31C68.1,-17.9,72.2,-4.3,71.3,9.1C70.5,22.5,64.7,35.7,55.6,46.3C46.5,56.9,34.1,64.9,20.5,69.4C6.9,73.9,-7.9,74.9,-21.2,70.7C-34.5,66.6,-46.3,57.3,-56.3,46.1C-66.3,34.8,-74.5,21.6,-77.5,6.9C-80.5,-7.8,-78.3,-23.9,-70.6,-36.8C-62.9,-49.6,-49.8,-59.1,-36.3,-66.4C-22.8,-73.6,-8.9,-78.6,3.4,-84.1C15.8,-89.6,31.6,-95.6,39.5,-65.3Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  )
}

