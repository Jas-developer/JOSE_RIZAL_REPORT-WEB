
import { motion } from "framer-motion";

import ContactUsGraphic from "@/assets/Asimilation.png";
import { HText } from "@/shared/HText";





   
const ContactUS = () => {    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div >
             {/* HEADER */}
             <motion.div   initial="hidden" whileInView="visible" 
             viewport={{once:true, amount: 0.5}}
             transition={{ delay: 0.4, duration: 1}}
             variants={{ 
             hidden: {opacity: 0, x:-100},
             visible:{opacity: 1, x:0},
            }} className="md:w-3/5">
              <HText>
                <span className="text-primary-500">CONCLUSION</span> 
              </HText>
              <p className="my-5 text-lg">Let's digest all the idea that we have and put it into conlutions</p>
             </motion.div>
             {/* FORM AND IMAGE */}
             <div className="flex flex-col">
              <p>
                
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
             </div>
             <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"  initial="hidden" whileInView="visible" 
             viewport={{once:true, amount: 0.5}}
             transition={{ delay: 0.5, duration: 1}}
             variants={{ 
             hidden: {opacity: 0, y:-100},
             visible:{opacity: 1, y:0},
            }}>
        
          <h1></h1>
          
       <div className="flex flex-col gap-8">
          <p>Rizal's relationship with the Propaganda Movement was also significant. He was one of the movement's most prominent members, and he used his talents to advocate for the reforms that the propagandists sought. Rizal's work helped to raise awareness of the Philippine situation and to inspire the next generation of Filipino nationalists.
          </p>
   <p>Rizal's relationship with the Propaganda Movement was also significant. He was one of the movement's most prominent members, and he used his talents to advocate for the reforms that the propagandists sought. Rizal's work helped to raise awareness of the Philippine situation and to inspire the next generation of Filipino nationalists.
</p>
<p>Rizal's relationship with the Propaganda Movement was a complex one. He was a strong supporter of the movement's goals, but he was also critical of some of its methods. He believed that the propagandists should use peaceful means to achieve their goals, and he was opposed to violence and revolution.
</p>
<p>Despite his criticisms, Rizal remained a loyal member of the Propaganda Movement until his death. He believed that the movement was essential to the advancement of the Filipino people.
</p>
<p>Rizal's relationship with the Propaganda Movement was also significant because it helped to shape his own political philosophy. Rizal was a reformist, and he believed that the Philippines could achieve independence through gradual change. He was also a humanist, and he believed that all people deserved to be treated with dignity and respect.
</p>
<p>Rizal's legacy continues to inspire Filipinos today. He is remembered as a patriot, a hero, and a martyr. His work helped to lay the foundation for the Philippine Revolution and the eventual establishment of an independent Philippine state</p>
       </div>
                </motion.div>


              <motion.div className="relative mt-16 basis-2/5 md:mt-0"
              initial="hidden" whileInView="visible" 
             viewport={{once:true, amount: 0.5}}
             transition={{ delay: 0.2, duration: 0.5}}
             variants={{ 
             hidden: {opacity: 0, y:50},
             visible:{opacity: 1, y:0},
            }}>

               <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img src={ContactUsGraphic} alt="contact page graphic" className="w-full" />
               </div>
              </motion.div>

             </div>
            </motion.div>
        </section>
    )
};

export {ContactUS};