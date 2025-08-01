import { GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4 } from "../../constants/images"
import { useScrollAnimation } from "../../Hook/AnimationHook"
import { FaPlus } from "react-icons/fa"

const Gallery = () => {
  const [ref1, animate1] = useScrollAnimation()
  const [ref2, animate2] = useScrollAnimation()
  const [ref3, animate3] = useScrollAnimation()
  const [ref4, animate4] = useScrollAnimation()
  const [ref5, animate5] = useScrollAnimation()

  return (
    <div className="font-display w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20 overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <div
          ref={ref1}
          className={`flex flex-col gap-4 sm:gap-6 md:row-span-1 ${animate1 ? "animate-ease-in-up duration-500" : ""}`}
        >
          <h2 className="">Online Gallery</h2>
          <p className="text-base lg:text-lg">
            A virtual collection of artworks by artists recently exhibited in the Siddhartha Art Gallery. Art Inquiries
            are also available.
          </p>
          <button className="btn">
            View All
          </button>
        </div>

        <div
          ref={ref2}
          className={`sm:col-span-2 md:col-span-1 md:row-span-2 ${animate2 ? "animate-ease-in-up duration-500" : ""}`}
        >
          <div className="h-full rounded-lg overflow-hidden">
            <div className="relative h-full aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={GalleryImg1}
                className="w-full max-w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                alt="Gallery 1"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FaPlus className="text-white text-3xl" />
              </div>
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold">By Kiran Manandhar</div>
            </div>
          </div>
        </div>

        <div ref={ref3} className={`${animate3 ? "animate-ease-in-right duration-300" : ""}`}>
          <div className="rounded-lg overflow-hidden">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={GalleryImg2}
                className="w-full max-w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                alt="Gallery 2"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FaPlus className="text-white text-3xl" />
              </div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold">By Kiran Manandhar</div>
            </div>
          </div>
        </div>

        <div ref={ref4} className={`${animate4 ? "animate-ease-in-left duration-200" : ""}`}>
          <div className="rounded-lg overflow-hidden">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={GalleryImg3}
                className="w-full max-w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                alt="Gallery 3"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FaPlus className="text-white text-3xl" />
              </div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold">By Kiran Manandhar</div>
            </div>
          </div>
        </div>

        <div ref={ref5} className={`${animate5 ? "animate-ease-in-right duration-200" : ""}`}>
          <div className="rounded-lg overflow-hidden">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={GalleryImg4}
                className="w-full max-w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                alt="Gallery 4"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FaPlus className="text-white text-3xl" />
              </div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold">By Kiran Manandhar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
