import { Palette, Zap, Heart } from 'lucide-react'

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white bg-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-yellow-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            A better way to showcase your art
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                <Palette className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-white">Unique Designs</p>
              <p className="mt-2 ml-16 text-base text-gray-300">
                Our designs are one-of-a-kind, tailored to your artistic vision.
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                <Zap className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-white">Fast Performance</p>
              <p className="mt-2 ml-16 text-base text-gray-300">
                Lightning-fast websites that load in the blink of an eye.
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-white">Made with Love</p>
              <p className="mt-2 ml-16 text-base text-gray-300">
                We pour our hearts into every project, ensuring top-notch quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

