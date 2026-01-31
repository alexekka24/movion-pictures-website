const founders = [
  {
    name: "Dikshant Banthia",
    role: "Cinematographer, Colorist & Editor",
    description:
      "I'm a passionate aspiring filmmaker driven by a profound love for the art of visual storytelling, encompassing cinematography, editing, and color grading. With a creative mindset and an unwavering work ethic, Dikshant is positioned to make a meaningful impact on the landscape of filmmaking. He embraces the realm of dreams and channels his vision through the lens, consistently striving to create cinematic magic that resonates with audiences on a profound level.",
    image: "/src/assets/images/founders/founder1.JPG",
  },
  {
    name: "AMIT KALA",
    role: "Creative Producer, Writer & Actor",
    description:
      "I'm a soulful actor and a creative producer who values the enduring magic of dreams. Collaborating with a talented team, he believes in turning dreams into workable realities. Amit's short films and music videos have travelled the world, collecting awards along the way. His work has garnered acclaim at the prestigious Dada Saheb Phalke Film Festival, in addition to being streamed on prestigious OTT platforms, and gaining a niche following among audiences.",
    image: "/src/assets/images/founders/founder2.JPG",
  },
  {
    name: "Aaron Justine",
    role: "Cinematographer, Director & Editor",
    description:
      "With a meticulous eye for detail and a passion for creativity, I approach every frame with careful consideration. Whether behind the camera or in the editing room, I envision the final product, ensuring a seamless and captivating storytelling experience. Committed to pushing boundaries while maintaining the highest standards of quality, I bring a blend of precision and creativity to every project at Movion Pictures.",
    image: "/src/assets/images/founders/founder3.JPG",
  },
];

import { motion, useTransform } from "framer-motion"
import { useRef } from "react"

export function DesktopFounders() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="relative h-screen bg-black text-white">
      <div className="sticky top-0 h-screen flex items-center px-24">
        <div className="grid grid-cols-3 gap-16 w-full">
          {founders.map((f, i) => (
            <FounderSpotlight
              key={f.name}
              founder={f}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FounderSpotlight({ founder }) {

  return (
    <motion.div
      className="flex flex-col gap-8"
    >
      <div className="h-[55vh] rounded-3xl overflow-hidden">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-contain rounded-3xl hover:scale-105 transition-transform duration-500 cursor-pointer"
        />
      </div>

      <div className="space-y-4">
        <p className="uppercase text-sm tracking-widest text-white/50">
          {founder.role}
        </p>
        <h3 className="text-3xl font-semibold">{founder.name.toUpperCase()}</h3>
        <p className="text-white/70 leading-relaxed line-clamp-4 font-light">
          {founder.description}
        </p>
      </div>
    </motion.div>
  )
}

export function MobileFounders() {
  return (
    <section className="relative bg-black text-white">
      {founders.map((founder) => (
        <motion.section
          key={founder.name}
          className="sticky top-0 h-screen flex flex-col gap-4 bg-black"
        >
          <div className="w-full object-contain flex justify-center items-center overflow-hidden bg-black">
            <img
            src={founder.image}
            alt={founder.name}
            className="w-full object-contain"
          />
          </div>

          <div className="px-8 flex flex-col justify-center gap-4 bg-black">
            <p className="uppercase text-sm tracking-widest text-white/50">
              {founder.role}
            </p>
            <h3 className="text-4xl font-semibold">{founder.name.toUpperCase()}</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              {founder.description}
            </p>
          </div>
        </motion.section>
      ))}
    </section>
  )
}


export function FoundersSection() {
  return (
    <>
      <div className="h-[20vh] flex items-center justify-center bg-black text-white">
        <h1 className="text-6xl font-bold">Our Founders</h1>
      </div>
      <div className="hidden md:block">
        <DesktopFounders />
      </div>

      <div className="md:hidden">
        <MobileFounders />
      </div>
    </>
  )
}
