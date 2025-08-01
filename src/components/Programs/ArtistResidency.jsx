import { background1 } from "../../constants/images"
import { useScrollAnimation } from "../../Hook/AnimationHook"

const ArtistResidency = () => {
    const [ref, animate] = useScrollAnimation();
  return (
    <div className="max-w-7xl mx-auto font-display px-4 sm:px-6 lg:px-8">
      <h2 className="text-center md:mx-auto">Artist Residency Programs</h2>

      <div ref={ref} className="mt-8">
        <img 
          src={background1} 
          alt="Artist Residency" 
          className={`float-left w-full sm:w-80 md:w-96 lg:w-2xl h-48 sm:h-64 md:h-80 lg:h-96 object-cover mr-0 sm:mr-4 md:mr-6 mb-4 ${animate ? "animate-ease-in-left duration-300" : ""}`} 
        />
        <p className={`text-base sm:text-lg leading-relaxed text-justify ${animate ? "animate-ease-in-up duration-300" : ""}`}>At the heart of our commitment to nurturing creativity is the Artist Residency Program, designed to support both emerging and established artists from Nepal and around the world. This unique initiative offers selected artists an opportunity to immerse themselves in Kathmandu's vibrant cultural landscape while developing their artistic practice in a supportive and inspiring environment.

Participants in the residency program receive dedicated studio space, access to essential materials, and technical support tailored to their specific needs. Beyond the physical resources, the program provides a platform for meaningful engagement with the local community, including opportunities to collaborate with fellow artists, educators, and cultural organizations.

Our residency encourages artists to experiment with new mediums, techniques, and ideas, fostering a dynamic atmosphere where innovation thrives. Through workshops, open studios, and artist talks, residents share their creative journeys, sparking dialogue and exchange that enriches both the artists and the community at large.

By bridging local traditions with contemporary global perspectives, the residency program plays a vital role in advancing Kathmandu's contemporary art scene, supporting the emergence of new voices and contributing to the ongoing evolution of artistic expression in Nepal.

We invite passionate creators to apply and become part of this transformative experience — a place where art, culture, and community converge to inspire change and celebrate creativity.</p>
  
        </div>
    </div>
  )
}

export default ArtistResidency