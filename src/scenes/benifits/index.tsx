
import { HText } from "@/shared/HText";
import { SelectedPage } from "@/shared/type";
import { HomeModernIcon,UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import {motion } from 'framer-motion';
import { BenifitType } from "@/shared/type";
import { Benefit } from "./Benefit";
import { ActionButton } from "@/shared/ActionButton";
import BenifitPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Asimilation from "@/assets/Asimilation.png"


const benifits : Array<BenifitType> = [
  {
   icon: <HomeModernIcon  className="h-6 w-6"  />,
   title: "Birth",
   description: "born June 19, 1861, Calamba, Philippines—died December 30, 1896, Manila "
  },
   {
   icon: <UserGroupIcon  className="h-6 w-6"  />,
   title: "Jose Rizal Parents",
   description: "Jose Rizal was the seventh of the eleven children of Francisco Mercado Rizal and Teodora Alonso Realonda."
  },
   {
   icon: <AcademicCapIcon  className="h-6 w-6"  />,
   title: "Educations",
   description: "During the latter part of 1882, Rizal enrolled in the Universidad Central de Madrid (Central University of Madrid) and took up two courses: medicine and philosophy and letters. In 1884, Rizal was awarded the Licentiate in Medicine and in 1885, he was conferred the degree of Licentiate in Philosophy and Letters."
  },
]


const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren:0.2  }
  }
}




type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}
const Benifits = ({setSelectedPage}: Props) => {
    return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
          <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
          className="">
            {/* header */}
           <motion.div 
           initial="hidden" whileInView="visible" 
             viewport={{once:false, amount: 0.5}}
             transition={{ delay: 0.4, duration: 1}}
             variants={{ 
             hidden: {opacity: 0, x:-50},
             visible:{opacity: 1, x:0},
            }}
           className="md:my-5 md:w-3/5">
            <HText>José Protasio Rizal Mercado y Alonso Realonda</HText>
            <p className="my-5 text-sm "> 
           José Protasio Rizal Mercado y Alonso Realonda was a Filipino nationalist, writer and polymath active at the end of the Spanish colonial period of the Philippines. He is considered a national hero of the Philippines.</p>
           </motion.div>
           {/* benifits */}
           <motion.div variants={container} viewport={ {once:false, amount: 0.5}} whileInView="visible" initial="hidden" className="  md:flex item-center justify-between gap-8 mt-5">
            {benifits.map((benefit: BenifitType) => (
              <Benefit setSelectedPage={setSelectedPage} description={benefit.description} title={benefit.title} icon={benefit.icon}  key={benefit.title}  />
            ))}
           </motion.div>
           
           {/* graphics and description */}
            <div className="md:flex mt-16 items-center justify-between gap-20 md:mt-28 ">
              {/* graphic */}
              <img src={BenifitPageGraphic} alt="" className="mx-auto" />
              {/* description */}
              <div>
                {/* title */}
                <div className="relative">
                  <div className="before:absolute  before:content-abstractwaves before:-left-20 before:z-[1]  before:-top-20"></div>
                 <motion.div  initial="hidden" whileInView="visible" 
                  viewport={{once:false, amount: 0.5}}
                  transition={{ delay: 0.4, duration: 1}}
                  variants={{ 
                  hidden: {opacity: 0, x:-50},
                  visible:{opacity: 1, x:0},
                  }}>
                   <HText>
                   
                    <span className="text-primary-500">PROPAGANDA MOVEMENT</span>
                  </HText>
                 </motion.div>
                </div>
                {/* description */}
                <motion.div   initial="hidden" whileInView="visible" 
             viewport={{once:false, amount: 0.5}}
             transition={{ delay: 0.2, duration: 1}}
             variants={{ 
             hidden: {opacity: 0, x:-50},
             visible:{opacity: 1, x:0},
            }}>
                  <p className="mt-5">The Propaganda Movement was a reform movement in the Philippines that arose in the late 19th century. It was led by a group of young Filipino intellectuals who were educated in Europe. The propagandists advocated for assimilation, which is the process of Filipinos becoming fully integrated into Spanish society. They believed that this could be achieved through education, representation in the Spanish government, and the separation of church and state.
</p>
                </motion.div>
              {/* button */}
               <div className="relative mt-16"> 
                <div className="before:absolute before:-bottom-20 before:right-20 before:z-[1] before:content-sparkles">
                 <ActionButton setSelectedPage={setSelectedPage}>
                  Learn more.
                 </ActionButton>
                </div>


               </div>
    
              </div>
            </div>
             {/* 2 */}

               <div className="md:flex mt-16 items-center justify-between gap-20 md:mt-28 ">
              {/* graphic */}
              <img src={Asimilation} alt="" className="mx-auto" />
              {/* description */}
              <div>
                {/* title */}
                <div className="relative">
                  <div className="before:absolute  before:content-abstractwaves before:-left-20 before:z-[1]  before:-top-20"></div>
                 <motion.div  initial="hidden" whileInView="visible" 
                  viewport={{once:false, amount: 0.5}}
                  transition={{ delay: 0.4, duration: 1}}
                  variants={{ 
                  hidden: {opacity: 0, x:-50},
                  visible:{opacity: 1, x:0},
                  }}>
                   <HText>
                   
                    <span className="text-primary-500 ">PRINCIPLES OF ASSIMILATION
</span>
                  </HText>
                 </motion.div>
                </div>
                {/* description */}
                <motion.div   initial="hidden" whileInView="visible" 
             viewport={{once:false, amount: 0.5}}
             transition={{ delay: 0.2, duration: 1}}
             variants={{ 
             hidden: {opacity: 0, x:-50},
             visible:{opacity: 1, x:0},
            }}>
                <p className="mt-5">The principle of assimilation advocated by the Propaganda Movement was based on the belief that Filipinos were capable of becoming full members of Spanish society. They argued that Filipinos were just as intelligent and capable as Spaniards, and that they should be granted the same rights and privileges.
</p>
                </motion.div>
              {/* button */}
               <div className="relative mt-16"> 
                <div className="before:absolute before:-bottom-20 before:right-20 before:z-[1] before:content-sparkles">
                 <ActionButton setSelectedPage={setSelectedPage}>
                  Learn more.
                 </ActionButton>
                </div>


               </div>
    
              </div>
            </div>
        





          </motion.div>
     </section>
    )
}






export {Benifits};