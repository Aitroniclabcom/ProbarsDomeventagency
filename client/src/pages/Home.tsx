import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventBuilder } from "@/components/EventBuilder";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Disc, Wine, ChevronDown, PenTool, Lightbulb, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.jpg";
import textureBg from "@/assets/texture-bg.jpg";
import cateringImg from "@/assets/gallery/buffet.jpg";
import musicImg from "@/assets/gallery/dj-turntable.jpg";
import designImg from "@/assets/design.png";
import decorImg from "@/assets/gallery/decor-red.jpg";
import consultingImg from "@/assets/consulting-team.jpg";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Gallery Images
import foodDetailImg from "@/assets/gallery/food-detail.jpg";
import cocktailArtImg from "@/assets/gallery/cocktail-art.jpg";
import appetizerImg from "@/assets/gallery/appetizer.jpg";
import champagneTowerImg from "@/assets/gallery/champagne-tower.jpg";
import buffetImg from "@/assets/gallery/buffet.jpg";
import champagneGlassesImg from "@/assets/gallery/champagne-glasses.jpg";
import pouringImg from "@/assets/gallery/pouring.jpg";
import weddingChampagneImg from "@/assets/gallery/wedding-champagne.jpg";
import fireShowImg from "@/assets/gallery/fire-show.jpg";

// Team Images
import denissImg from "@/assets/team/deniss.jpg";
import anastasijaImg from "@/assets/team/anastasija.jpg";
import olegsImg from "@/assets/team/olegs.jpg";
import andrisImg from "@/assets/team/andris.jpg";
import lauraImg from "@/assets/team/laura.jpg";
import vladislavsImg from "@/assets/team/vladislavs.jpg";

import certificate1 from "@/assets/certificates/certificate1.png";
import certificate2 from "@/assets/certificates/certificate2.jpg";
import certificate3 from "@/assets/certificates/certificate3.png";

// Partner Logos
import mvgroupLogo from "@/assets/partners/mvgroup.png";
import mcollectionLogo from "@/assets/partners/mcollection.png";
import lbcLogo from "@/assets/partners/lbc.png";
import latgolaLogo from "@/assets/partners/latgola.png";
import gemossLogo from "@/assets/partners/gemoss.png";
import boogieLogo from "@/assets/partners/boogie.png";
import parziediemLogo from "@/assets/partners/parziediem.png";
import slsLogo from "@/assets/partners/sls.png";

const partners = [
  { name: "MV Group", logo: mvgroupLogo },
  { name: "M Collections", logo: mcollectionLogo },
  { name: "Latgalian Bartenders Club", logo: lbcLogo },
  { name: "Park Hotel Latgola", logo: latgolaLogo },
  { name: "Gemoss", logo: gemossLogo },
  { name: "1st Boogie Garden", logo: boogieLogo },
  { name: "Par Ziediem", logo: parziediemLogo },
  { name: "Sound Light Serviss", logo: slsLogo },
];

export default function Home() {
  const [activeAboutIndex, setActiveAboutIndex] = useState<number | null>(null);
  const [expandedServiceIndex, setExpandedServiceIndex] = useState<number | null>(null);
  const [isCateringDetailsOpen, setIsCateringDetailsOpen] = useState(false);
  const [isMusicDetailsOpen, setIsMusicDetailsOpen] = useState(false);
  const [isDesignDetailsOpen, setIsDesignDetailsOpen] = useState(false);
  const [isDecorDetailsOpen, setIsDecorDetailsOpen] = useState(false);
  const [isConsultingDetailsOpen, setIsConsultingDetailsOpen] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Deniss Smirnovs",
      role: t("team.members.deniss.role"),
      image: denissImg,
      bio: t("team.members.deniss.bio"),
      fullBio: t("team.members.deniss.fullBio"),
    },
    {
      name: "Anastasija Kazarina",
      role: t("team.members.anastasija.role"),
      image: anastasijaImg,
      bio: t("team.members.anastasija.bio"),
      fullBio: t("team.members.anastasija.fullBio"),
    },
    {
      name: "Oļegs Porietis",
      role: t("team.members.olegs.role"),
      image: olegsImg,
      bio: t("team.members.olegs.bio"),
      fullBio: t("team.members.olegs.fullBio"),
    },
    {
      name: "Andris Konopackis",
      role: t("team.members.andris.role"),
      image: andrisImg,
      bio: t("team.members.andris.bio"),
      fullBio: t("team.members.andris.fullBio"),
    },
    {
      name: "Laura Rudko",
      role: t("team.members.laura.role"),
      image: lauraImg,
      bio: t("team.members.laura.bio"),
      fullBio: t("team.members.laura.fullBio"),
    },
    {
      name: "Vladislavs Saveljevs",
      role: t("team.members.vladislavs.role"),
      image: vladislavsImg,
      bio: t("team.members.vladislavs.bio"),
      fullBio: t("team.members.vladislavs.fullBio"),
    },
  ];

  const aboutPoints = [
    { title: t("about.points.1.title"), text: t("about.points.1.text") },
    { title: t("about.points.2.title"), text: t("about.points.2.text") },
    { title: t("about.points.3.title"), text: t("about.points.3.text") },
    { title: t("about.points.4.title"), text: t("about.points.4.text") },
    { title: t("about.points.5.title"), text: t("about.points.5.text") },
    { title: t("about.points.6.title"), text: t("about.points.6.text") },
  ];

  const toggleService = (index: number) => {
    setExpandedServiceIndex(expandedServiceIndex === index ? null : index);
  };

  const scrollToBuilder = () => {
      document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#222222] min-h-screen text-white font-sans selection:bg-[#8C080C] selection:text-white">
      <Navigation />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url(${heroBg})` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
            <div className="absolute inset-0 bg-black/60" /> 
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-serif tracking-tight mb-6 leading-tight"
          >
            {t("hero.title")}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl font-light tracking-[0.2em] mb-8 text-gray-200"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 1 }}
            onClick={scrollToBuilder}
            className="bg-[#8C080C] text-white px-10 py-4 text-sm tracking-[0.2em] hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C] mt-24 md:mt-32"
          >
            {t("hero.cta")}
          </motion.button>
        </div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
           <div className="w-[1px] h-20 bg-white/30"></div>
           <span className="text-[10px] tracking-widest uppercase">{t("hero.scroll")}</span>
        </motion.div>
      </section>

      {/* ABOUT & PHILOSOPHY */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${textureBg})`, backgroundSize: 'cover' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
             <div>
                <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif mb-8"
                >
                    {t("about.title")}<br/><span className="text-[#C0A07B] italic">{t("about.titleAccent")}</span>
                </motion.h2>
                <div className="w-20 h-[1px] bg-[#C0A07B] mb-8"></div>
             </div>
             <div>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-lg font-light leading-relaxed text-gray-300"
                >
                    {t("about.description")}
                </motion.p>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {aboutPoints.map((point, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-[#1a1a1a] p-8 border border-white/5 hover:border-[#C0A07B]/30 transition-all duration-500 min-h-[200px] flex flex-col justify-center cursor-pointer"
                    onMouseEnter={() => setActiveAboutIndex(i)}
                    onMouseLeave={() => setActiveAboutIndex(null)}
                    onClick={() => setActiveAboutIndex(activeAboutIndex === i ? null : i)}
                >
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-[#C0A07B] text-xs tracking-widest">0{i + 1}</span>
                        <Plus className={`w-4 h-4 text-[#C0A07B] transition-transform duration-300 ${activeAboutIndex === i ? 'rotate-45' : ''}`} />
                    </div>
                    <h3 className="text-xl font-serif mb-2 group-hover:text-[#C0A07B] transition-colors">{point.title}</h3>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAboutIndex === i ? 'max-h-[200px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">
                            {point.text}
                        </p>
                    </div>
                </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <a href="#contacts" className="text-xs tracking-[0.2em] border-b border-[#C0A07B] pb-1 hover:text-[#C0A07B] transition-colors uppercase">{t("about.contactUs")}</a>
          </div>
        </div>
      </section>

      {/* EVENT BUILDER */}
      <div id="builder">
        <EventBuilder />
      </div>

      {/* MODULES - CATERING */}
      <section className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
         <div className="bg-[#151515] p-12 md:p-24 flex flex-col justify-center">
            <Wine className="w-12 h-12 text-[#C0A07B] mb-8" />
            <h2 className="text-4xl font-serif mb-6">{t("services.catering.title")}</h2>
            <p className="text-gray-400 font-light mb-8 leading-relaxed">
                {t("services.catering.desc")}
            </p>
            <ul className="space-y-4 mb-10 text-sm font-light text-gray-300">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.catering.list1")}</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.catering.list2")}</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.catering.list3")}</li>
            </ul>
            
            <AnimatePresence>
                {isCateringDetailsOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden mb-8"
                    >
                         <div className="pt-4 pb-8 space-y-8 border-t border-white/10">
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.catering.howTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light">
                                    <li>{t("services.catering.how1")}</li>
                                    <li>{t("services.catering.how2")}</li>
                                    <li>{t("services.catering.how3")}</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.catering.advTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light list-disc pl-4">
                                    <li>{t("services.catering.adv1")}</li>
                                    <li>{t("services.catering.adv2")}</li>
                                    <li>{t("services.catering.adv3")}</li>
                                    <li>{t("services.catering.adv4")}</li>
                                </ul>
                            </div>
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex gap-4 items-center">
                <button 
                    onClick={() => setIsCateringDetailsOpen(!isCateringDetailsOpen)}
                    className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase"
                >
                    {isCateringDetailsOpen ? t("services.catering.close") : t("services.catering.more")}
                </button>
                <button 
                    onClick={scrollToBuilder}
                    className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]"
                >
                    {t("services.catering.add")}
                </button>
            </div>
         </div>
         <div className="relative h-[400px] md:h-auto">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cateringImg})` }}>
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
            </div>
         </div>
      </section>

      {/* MODULES - MUSIC */}
      <section className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
         <div className="relative h-[400px] md:h-auto order-2 md:order-1">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${musicImg})` }}>
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
            </div>
         </div>
         <div className="bg-[#1a1a1a] p-12 md:p-24 flex flex-col justify-center order-1 md:order-2">
            <Disc className="w-12 h-12 text-[#C0A07B] mb-8" />
            <h2 className="text-4xl font-serif mb-6">{t("services.music.title")}</h2>
            <p className="text-gray-400 font-light mb-8 leading-relaxed">
                {t("services.music.desc")}
            </p>
            <ul className="space-y-4 mb-10 text-sm font-light text-gray-300">
                <li className="flex items-start gap-3"><span className="w-1 h-1 bg-[#C0A07B] mt-2 shrink-0"></span><span>{t("services.music.list1")}</span></li>
                <li className="flex items-start gap-3"><span className="w-1 h-1 bg-[#C0A07B] mt-2 shrink-0"></span><span>{t("services.music.list2")}</span></li>
                <li className="flex items-start gap-3"><span className="w-1 h-1 bg-[#C0A07B] mt-2 shrink-0"></span><span>{t("services.music.list3")}</span></li>
                <li className="flex items-start gap-3"><span className="w-1 h-1 bg-[#C0A07B] mt-2 shrink-0"></span><span>{t("services.music.list4")}</span></li>
                <li className="flex items-start gap-3"><span className="w-1 h-1 bg-[#C0A07B] mt-2 shrink-0"></span><span>{t("services.music.list5")}</span></li>
            </ul>

            <AnimatePresence>
                {isMusicDetailsOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden mb-8"
                    >
                         <div className="pt-4 pb-8 space-y-8 border-t border-white/10">
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.music.howTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light">
                                    <li>{t("services.music.how1")}</li>
                                    <li>{t("services.music.how2")}</li>
                                    <li>{t("services.music.how3")}</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.music.advTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light list-disc pl-4">
                                    <li>{t("services.music.adv1")}</li>
                                    <li>{t("services.music.adv2")}</li>
                                    <li>{t("services.music.adv3")}</li>
                                    <li>{t("services.music.adv4")}</li>
                                </ul>
                            </div>
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex gap-4 items-center">
                <button 
                    onClick={() => setIsMusicDetailsOpen(!isMusicDetailsOpen)}
                    className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase"
                >
                    {isMusicDetailsOpen ? t("services.catering.close") : t("services.catering.more")}
                </button>
                <button 
                    onClick={scrollToBuilder}
                    className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]"
                >
                    {t("services.catering.add")}
                </button>
            </div>
         </div>
      </section>

      {/* MODULES - DESIGN */}
      <section className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
         <div className="bg-[#151515] p-12 md:p-24 flex flex-col justify-center">
            <PenTool className="w-12 h-12 text-[#C0A07B] mb-8" />
            <h2 className="text-4xl font-serif mb-6">{t("services.design.title")}</h2>
            <p className="text-gray-400 font-light mb-8 leading-relaxed">
                {t("services.design.desc")}
            </p>
            <ul className="space-y-4 mb-10 text-sm font-light text-gray-300">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.design.list1")}</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.design.list2")}</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.design.list3")}</li>
            </ul>
            
            <AnimatePresence>
                {isDesignDetailsOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden mb-8"
                    >
                         <div className="pt-4 pb-8 space-y-8 border-t border-white/10">
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.design.howTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light">
                                    <li>{t("services.design.how1")}</li>
                                    <li>{t("services.design.how2")}</li>
                                    <li>{t("services.design.how3")}</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.design.advTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light list-disc pl-4">
                                    <li>{t("services.design.adv1")}</li>
                                    <li>{t("services.design.adv2")}</li>
                                    <li>{t("services.design.adv3")}</li>
                                    <li>{t("services.design.adv4")}</li>
                                </ul>
                            </div>
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex gap-4 items-center">
                <button 
                    onClick={() => setIsDesignDetailsOpen(!isDesignDetailsOpen)}
                    className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase"
                >
                    {isDesignDetailsOpen ? t("services.catering.close") : t("services.catering.more")}
                </button>
                <button 
                    onClick={scrollToBuilder}
                    className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]"
                >
                    {t("services.catering.add")}
                </button>
            </div>
         </div>
         <div className="relative h-[400px] md:h-auto">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${designImg})` }}>
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
            </div>
         </div>
      </section>

      {/* MODULES - DECOR */}
      <section className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
         <div className="relative h-[400px] md:h-auto order-2 md:order-1">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${decorImg})` }}>
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
            </div>
         </div>
         <div className="bg-[#1a1a1a] p-12 md:p-24 flex flex-col justify-center order-1 md:order-2">
            <Lightbulb className="w-12 h-12 text-[#C0A07B] mb-8" />
            <h2 className="text-4xl font-serif mb-6">{t("services.decor.title")}</h2>
            <p className="text-gray-400 font-light mb-8 leading-relaxed">
                {t("services.decor.desc")}
            </p>
            <ul className="space-y-4 mb-10 text-sm font-light text-gray-300">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.decor.list1")}</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.decor.list2")}</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.decor.list3")}</li>
            </ul>

            <AnimatePresence>
                {isDecorDetailsOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden mb-8"
                    >
                         <div className="pt-4 pb-8 space-y-8 border-t border-white/10">
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.decor.howTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light">
                                    <li>{t("services.decor.how1")}</li>
                                    <li>{t("services.decor.how2")}</li>
                                    <li>{t("services.decor.how3")}</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.decor.advTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light list-disc pl-4">
                                    <li>{t("services.decor.adv1")}</li>
                                    <li>{t("services.decor.adv2")}</li>
                                    <li>{t("services.decor.adv3")}</li>
                                    <li>{t("services.decor.adv4")}</li>
                                </ul>
                            </div>
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex gap-4 items-center">
                <button 
                    onClick={() => setIsDecorDetailsOpen(!isDecorDetailsOpen)}
                    className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase"
                >
                    {isDecorDetailsOpen ? t("services.catering.close") : t("services.catering.more")}
                </button>
                <button 
                    onClick={scrollToBuilder}
                    className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]"
                >
                    {t("services.catering.add")}
                </button>
            </div>
         </div>
      </section>

      {/* MODULES - CONSULTING */}
      <section className="grid md:grid-cols-2 min-h-[600px]">
         <div className="bg-[#151515] p-12 md:p-24 flex flex-col justify-center">
            <Users className="w-12 h-12 text-[#C0A07B] mb-8" />
            <h2 className="text-4xl font-serif mb-6">{t("services.consulting.title")}</h2>
            <p className="text-gray-400 font-light mb-8 leading-relaxed">
                {t("services.consulting.desc")}
            </p>
            <ul className="space-y-4 mb-10 text-sm font-light text-gray-300">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.consulting.list1")}</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.consulting.list2")}</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.consulting.list3")}</li>
            </ul>
            
            <AnimatePresence>
                {isConsultingDetailsOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden mb-8"
                    >
                         <div className="pt-4 pb-8 space-y-8 border-t border-white/10">
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.consulting.howTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light">
                                    <li>{t("services.consulting.how1")}</li>
                                    <li>{t("services.consulting.how2")}</li>
                                    <li>{t("services.consulting.how3")}</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-[#C0A07B] font-serif mb-4">{t("services.consulting.advTitle")}</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-light list-disc pl-4">
                                    <li>{t("services.consulting.adv1")}</li>
                                    <li>{t("services.consulting.adv2")}</li>
                                    <li>{t("services.consulting.adv3")}</li>
                                    <li>{t("services.consulting.adv4")}</li>
                                </ul>
                            </div>
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex gap-4 items-center">
                <button 
                    onClick={() => setIsConsultingDetailsOpen(!isConsultingDetailsOpen)}
                    className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase"
                >
                    {isConsultingDetailsOpen ? t("services.catering.close") : t("services.catering.more")}
                </button>
                <button 
                    onClick={scrollToBuilder}
                    className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]"
                >
                    {t("services.catering.add")}
                </button>
            </div>
         </div>
         <div className="relative h-[400px] md:h-auto">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${consultingImg})` }}>
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
            </div>
         </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-[#151515] overflow-hidden">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">{t("gallery.title")}</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="col-span-2 row-span-2 relative group overflow-hidden"
                >
                     <img src={champagneTowerImg} alt="Champagne Tower" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[#C0A07B] tracking-widest text-sm uppercase">{t("gallery.moments")}</span>
                     </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative group overflow-hidden"
                >
                     <img src={cocktailArtImg} alt="Cocktail Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[#C0A07B] tracking-widest text-sm uppercase">{t("gallery.art")}</span>
                     </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative group overflow-hidden"
                >
                     <img src={foodDetailImg} alt="Food Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[#C0A07B] tracking-widest text-sm uppercase">{t("gallery.taste")}</span>
                     </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="col-span-2 relative group overflow-hidden"
                >
                     <img src={pouringImg} alt="Pouring Champagne" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[#C0A07B] tracking-widest text-sm uppercase">{t("gallery.spark")}</span>
                     </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative group overflow-hidden"
                >
                     <img src={appetizerImg} alt="Appetizer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="relative group overflow-hidden"
                >
                     <img src={champagneGlassesImg} alt="Champagne Glasses" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="relative group overflow-hidden"
                >
                     <img src={weddingChampagneImg} alt="Wedding Champagne Tower" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[#C0A07B] tracking-widest text-sm uppercase">{t("gallery.emotions")}</span>
                     </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="relative group overflow-hidden"
                >
                     <img src={fireShowImg} alt="Fire Show" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[#C0A07B] tracking-widest text-sm uppercase">{t("gallery.energy")}</span>
                     </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 bg-[#222222]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">{t("team.title")}</h2>
            <div className="w-20 h-[1px] bg-[#C0A07B] mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              {t("team.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setActiveTeamMember(activeTeamMember === i ? null : i)}
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <div className="absolute inset-0 bg-[#C0A07B] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-8 text-center transition-all duration-500 ${activeTeamMember === i ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                     <p className="text-gray-300 font-light italic leading-relaxed mb-4">
                        "{activeTeamMember === i ? member.fullBio : member.bio}"
                     </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif mb-1 group-hover:text-[#C0A07B] transition-colors">{member.name}</h3>
                <p className="text-xs tracking-widest text-gray-500 uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 bg-[#222222] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-16 text-gray-200">{t("partners.title")}</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center max-w-6xl mx-auto">
                {partners.map((partner, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex items-center justify-center p-4"
                    >
                        <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="max-h-32 w-auto object-contain transition-opacity duration-300 hover:opacity-50" 
                        />
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}