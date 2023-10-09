import { SelectedPage } from "@/shared/type";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";

import {motion} from "framer-motion";
import { HText } from "@/shared/HText";
import { ClassType } from "@/shared/type";
import { Class } from "./Class";


const classes: Array<ClassType> = [
  {
    name : "SLIDE 1",
    description: "  The propagandists believed that assimilation could be achieved through education. They advocated for the establishment of a secular public education system that would be open to all Filipinos. They also believed that Filipinos should be allowed to study in Europe, where they could be exposed to the latest ideas and technologies.",
    image: image1,                                      

  },
  {
    name : "SLIDE 2",
    description: "Another important goal of the propagandists was representation in the Spanish government. They believed that Filipinos should have a voice in the government that ruled them. They advocated for the creation of a Philippine representation in the Spanish Cortes, or parliament. ",
    image: image2,
  },
  {
    name : "SLIDE 3",
    description: "Finally, the propagandists also advocated for the separation of church and state. They believed that the Catholic Church had too much power in the Philippines, and that this power was being used to oppress the people. They called for the end of the friarocracy, and for the establishment of a secular government.",
    image: image3,
  },
 
];

const classes2: Array<ClassType> = [
  {
    name : "SLIDE 1",
    description: " José Rizal was one of the most prominent members of the Propaganda Movement. He was a prolific writer and speaker, and he used his talents to advocate for the reforms that the propagandists sought.",
    image: image1,                                      

  },
  {
    name : "SLIDE 2",
    description: "Rizal's most famous work is the novel Noli Me Tangere, which is a powerful exposé of the corruption and oppression of the Spanish colonial government. He also wrote several essays and articles on the Philippine situation, in which he argued for the need for assimilation and reform.",
    image: image2,
  },
  {
    name : "SLIDE 3",
    description: "Rizal's relationship with the Propaganda Movement was complex. He was a strong supporter of the movement's goals, but he was also critical of some of its methods. He believed that the propagandists should use peaceful means to achieve their goals, and he was opposed to violence and revolution.",
    image: image3,
  },
 
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
                <HText>Principle of Assimilation</HText>
                <p className="py-5 text-xl">Let's Dive deeper to Principle of Assimilation
</p>
            </div>
           </motion.div>
           <div className="mt-10 h-[353px] w-full items-center flex  md:grid grid-cols-3 md:justify-center  overflow-y-hidden ">
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

          {/* Rizal's Relationship with the Propaganda Movement
 */}
             <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)} className="mt-12">
           

           <motion.div className="mx-auto w-5/6"   initial="hidden" whileInView="visible" 
             viewport={{once:false, amount: 0.5}}
             transition={{ delay: 0.2, duration: 1}}
             variants={{ 
             hidden: {opacity: 0, x:-50},
             visible:{opacity: 1, x:0},
            }}>
            <div className="md:w-3/5">
                <HText>Rizal's Relationship with the Propaganda Movement
</HText>
                <p className="py-5 text-xl">Let's Dive deeper to Rizal's Relationship with the Propaganda Movement

</p>
            </div>
           </motion.div>
           <div className="mt-10 h-[353px] w-full items-center flex  md:grid grid-cols-3 md:justify-center  overflow-y-hidden ">
              <ul className="w-[2800px] whitespace-nowrap">
               {classes2.map((item : ClassType,index) => (
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