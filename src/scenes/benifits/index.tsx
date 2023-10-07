
import { HText } from "@/shared/HText";
import { SelectedPage } from "@/shared/type";
import { HomeModernIcon,UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import {motion } from 'framer-motion';
import { BenifitType } from "@/shared/type";
import { Benefit } from "./Benefit";
import { ActionButton } from "@/shared/ActionButton";
import BenifitPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benifits : Array<BenifitType> = [
  {
   icon: <HomeModernIcon  className="h-6 w-6"  />,
   title: "State of the Art Facilities",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro maiores, cupiditate laboriosam pariatur aliquam "
  },
   {
   icon: <UserGroupIcon  className="h-6 w-6"  />,
   title: "100's of Diverse Classes",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro maiores, cupiditate laboriosam pariatur aliquam "
  },
   {
   icon: <AcademicCapIcon  className="h-6 w-6"  />,
   title: "Expert and pro trainers",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro maiores, cupiditate laboriosam pariatur aliquam "
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
    <section id="benifits" className="mx-auto min-h-full w-5/6 py-20">
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
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm "> 
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.</p>
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
                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                    <span className="text-primary-500"> FIT.</span>
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
                  <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil nesciunt recusandae error totam cumque porro, libero aut esse assumenda!</p>
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero perferendis ducimus cum!</p>
                </motion.div>
              {/* button */}
               <div className="relative mt-16"> 
                <div className="before:absolute before:-bottom-20 before:right-20 before:z-[1] before:content-sparkles">
                 <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
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