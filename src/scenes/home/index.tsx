import { SelectedPage } from '@/shared/type';
import { ActionButton } from '@/shared/ActionButton';
import HomPageText from "@/assets/HomePageText.png";
import HomPageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from '@/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {motion} from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export const Home = ({setSelectedPage}: Props) => {

  const isAboveMediumScreen  = useMediaQuery("(min-width:1060px)");




  return (
        <section className='gap-16 bg-gray-20 py-10 md:h-full  md:pb-0 ' id='home'>
    {/* IMAGE AND MAIN  header*/}
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}   className='md:flex   mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/* main header */}
           <div className='z-10 mt-32 md:basis-3/5'>
            {/* headings */}
            <motion.div initial="hidden" whileInView="visible" 
             viewport={{once:true, amount: 0.5}}
             transition={{duration: 1}}
             variants={{ 
             hidden: {opacity: 0, x:-100},
             visible:{opacity: 1, x:0},
            }} className='md:-mt-20'>
             
            <div className='relative'>
            <div className="before:absolute  before:-left-20 before:z-[-1] before:-top-20 md:before:content-evolvetext">
            <img src={HomPageText} alt="home page text" />
            </div>
            </div>
            <p className="mt-8 text-sm">
                  Our objective is to explain the principle of assimilation advocated by the Propaganda Movement.
                 Appraise Rizal's relationship with the Propaganda Movement.

            </p>
            </motion.div>

            {/* actions */}
            <motion.div 
             initial="hidden" whileInView="visible" 
             viewport={{once:true, amount: 0.5}}
             transition={{ delay: 0.4, duration: 1}}
             variants={{ 
             hidden: {opacity: 0, x:-100},
             visible:{opacity: 1, x:0},
            }}
            
            className='mt-8  flex items-center gap-8 md:justify-start '>
                
                  <AnchorLink href={`#${SelectedPage.Benifits}`} onClick={() => setSelectedPage(SelectedPage.Benifits)} className='  text-sm font-bold text-primary-500 underline hover:text-secondary-500'>
                 <p>Learn More</p>
                </AnchorLink>
              
            </motion.div>
        </div>
        {/* image */}
        <div className='md:ml-40 md:mt-16 md:justify-items-end   flex basis-3/5 justify-center md:z-10'>
        <img src={HomPageGraphic} alt="homepage graphic" />
        </div>
    </motion.div>

    {/* sponsors */}
        
    { isAboveMediumScreen && (
        <div className='h-[150px] w-full bg-primary-100 py-20'>
            <div className='mx-auto w-5/6'>
                <div className='flex w-3/5 items-center ju  justify-between  gap-8'>
                  <div className='flex flex-col justify-center  font-bold text-2xl'><span className='text-green-600'>AUTHOR</span><span>BSCS - JASON EVARISTO</span></div>
                     <div className='flex flex-col justify-center  font-bold text-2xl'><span className='text-green-600'>AUTHOR</span><span>BSIT - NEO LESTER PEGASON</span></div>
                </div>
            </div>
        </div>
    )  }
    </section>
  )
}