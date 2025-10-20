import { motion } from "motion/react";
import { MessageCircle, Lightbulb, HardHat, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    description: "We start by understanding your goals, preferences, and requirements."
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Concept & Design",
    description: "We develop detailed plans, visuals, and materials that align with your vision."
  },
  {
    number: "03",
    icon: HardHat,
    title: "Construction",
    description: "Our build team turns designs into reality with efficiency and quality control."
  },
  {
    number: "04",
    icon: Key,
    title: "Turnover",
    description: "We deliver your finished space, ready for use."
  }
];

export function Process() {
  return (
    <section className="bg-[#F5F3EF] py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-wide mb-6 opacity-60"
          >
            — HOW WE WORK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-2xl leading-tight"
          >
            OUR PROCESS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 md:mt-6 text-sm md:text-base opacity-70 max-w-xl"
          >
            Here's how we bring your ideas to life — from initial consultation to final handover.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border-2 border-black/5 p-6 md:p-8 rounded-sm hover:border-black/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background number */}
                <div className="absolute top-4 right-4 text-[6rem] md:text-[8rem] leading-none opacity-[0.03] select-none transition-all duration-300 group-hover:opacity-[0.06]">
                  {step.number}
                </div>
                
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="mb-4 md:mb-6"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-7 w-7 md:h-8 md:w-8 text-black group-hover:text-white transition-colors duration-300" />
                    </div>
                  </motion.div>
                  
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span className="text-xs tracking-widest opacity-40">{step.number}</span>
                    <div className="h-px flex-1 bg-black/10" />
                  </div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="mb-3 text-xl md:text-2xl"
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="text-sm leading-relaxed opacity-70"
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-20"
        >
          <div className="w-fit mx-auto rounded-sm border border-black/10 bg-white/70 backdrop-blur-sm px-1 py-4 md:px-1.5 md:py-5 text-center shadow-sm">
            <p
              className="inline whitespace-nowrap text-sm md:text-base tracking-wide text-black/80"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.35)" }}
            >
              Simple. Transparent. End-to-end.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}