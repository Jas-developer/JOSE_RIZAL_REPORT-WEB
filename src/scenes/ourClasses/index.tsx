import { SelectedPage } from "@/shared/type";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import {motion} from "framer-motion";
import { HText } from "@/shared/HText";
import { ClassType } from "@/shared/type";
import { Class } from "./Class";


const classes: Array<ClassType> = [
  {
    name : "Weight Traning classes",
    description: "lorem15 I will be a software engineer before this month end",
    image: image1,
  },
  {
    name : "Yoga classes",
    description: "lorem15 I will be a software engineer before this month end",
    image: image2,
  },
  {
    name : "Ab Core classes",
    description: "lorem15 I will be a software engineer before this month end",
    image: image3,
  },
  {
    name : "Adventure classes",
    description: "lorem15 I will be a software engineer before this month end",
    image: image4,
  },
  {
    name : "Fitness Traning classes",
    description: "lorem15 I will be a software engineer before this month end",
    image: image5,
  },
  {
    name : "Traning classes",
    description: "lorem15 I will be a software engineer before this month end",
    image: image6,
  }
];


type Props = {
   setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage} : Props) => {
    return (
        <section  id="ourclasses" className="w-full bg-primary-100 py-40">
          <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
           

           <motion.div className="mx-auto w-5/6"   initial="hidden" whileInView="visible" 
             viewport={{once:false, amount: 0.5}}
             transition={{ delay: 0.2, duration: 1}}
             variants={{ 
             hidden: {opacity: 0, x:-50},
             visible:{opacity: 1, x:0},
            }}>
            <div className="md:w-3/5">
                <HText> Our Classes</HText>
                <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quisquam minima numquam, mollitia hic beatae.</p>
            </div>
           </motion.div>
           <div className="mt-10 h-[353px] w-full  overflow-y-hidden ">
              <ul className="w-[2800px] whitespace-nowrap">
               {classes.map((item : ClassType,index) => (
                <Class 
                description={item.description}
                image={item.image}
                name={item.name} key={`${item.name}-${index}`}/>
               ))}
              </ul>
           </div>
          </motion.div>
        </section>
    )
}

export { OurClasses };