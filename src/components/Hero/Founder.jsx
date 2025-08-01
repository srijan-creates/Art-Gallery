import { pattern, portrait } from '../../constants/images';
import { useScrollAnimation } from '../../Hook/AnimationHook';

const Founder = () => {
  const [ref, animate] = useScrollAnimation();

  return (
    <div className='relative font-display overflow-x-hidden'>
      <div className='absolute inset-0 opacity-10 -z-10 overflow-hidden'>
        <img src={pattern} alt="Background pattern" className='object-cover object-center w-full h-full' />
      </div>

      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center py-8 px-4 md:px-8'>
        <div className={`max-w-xs overflow-hidden rounded-2xl ${animate ? "animate-ease-in-left duration-200" : ""}`} ref={ref}>
          <img 
            src={portrait} 
            alt="Portrait of Sangeeta Rana Thapa" 
            className='w-full h-auto object-cover rounded-2xl aspect-[4/5] md:aspect-auto' 
          />
        </div>

        <div className={`flex flex-col gap-6 max-w-xl ${animate ? "animate-ease-in-right duration-200" : ""}`} ref={ref}>
          <span className='text-textcolor font-medium text-lg md:text-xl'>Founder/Director</span>
          <h2 className=''>
            Sangeeta Rana Thapa
          </h2>
          <p className='leading-relaxed text-base sm:text-lg text-justify'>
            Sangeeta Thapa founded Art Gallery in 1987 with eminent artist Shashikala Tiwari. She has curated over 600 shows of Nepali and international artists. She regularly gives consultations to collectors of Nepali art and initiates community art projects.
          </p>
          <button className='btn mt-4'>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Founder;