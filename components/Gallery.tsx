/* eslint-disable @next/next/no-img-element */
export default function Gallery() {
  return (
    <div id="gallery" className="bg-white bg-opacity-10 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-400 tracking-wide uppercase">Gallery</h2>
          <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Our Artistic Creations</p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative h-64 overflow-hidden rounded-lg transform transition duration-500 hover:scale-105">
              <img
                src={`/placeholder.svg?height=256&width=384`}
                alt={`Gallery item ${item}`}
                // layout="fill"
                // objectFit="cover"
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

