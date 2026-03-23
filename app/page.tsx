"use client";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventBuilder } from "@/components/EventBuilder";
import { CartDrawer } from "@/components/CartDrawer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Disc, Wine, ChevronDown, PenTool, Lightbulb, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const partners = [
  { name: "MV Group", logo: "/assets/partners/mvgroup.png" },
  { name: "M Collections", logo: "/assets/partners/mcollection.png" },
  { name: "Latgalian Bartenders Club", logo: "/assets/partners/lbc.png" },
  { name: "Park Hotel Latgola", logo: "/assets/partners/latgola.png" },
  { name: "Gemoss", logo: "/assets/partners/gemoss.png" },
  { name: "1st Boogie Garden", logo: "/assets/partners/boogie.png" },
  { name: "Par Ziediem", logo: "/assets/partners/parziediem.png" },
  { name: "Sound Light Serviss", logo: "/assets/partners/sls.png" },
];

const teamMembers = [
  { name: "Deniss Smirnovs", roleKey: "team.members.deniss.role", image: "/assets/team/deniss.jpg", bioKey: "team.members.deniss.bio", fullBioKey: "team.members.deniss.fullBio" },
  { name: "Anastasija Kazarina", roleKey: "team.members.anastasija.role", image: "/assets/team/anastasija.jpg", bioKey: "team.members.anastasija.bio", fullBioKey: "team.members.anastasija.fullBio" },
  { name: "Oļegs Porietis", roleKey: "team.members.olegs.role", image: "/assets/team/olegs.jpg", bioKey: "team.members.olegs.bio", fullBioKey: "team.members.olegs.fullBio" },
  { name: "Andris Konopackis", roleKey: "team.members.andris.role", image: "/assets/team/andris.jpg", bioKey: "team.members.andris.bio", fullBioKey: "team.members.andris.fullBio" },
  { name: "Laura Rudko", roleKey: "team.members.laura.role", image: "/assets/team/laura.jpg", bioKey: "team.members.laura.bio", fullBioKey: "team.members.laura.fullBio" },
  { name: "Vladislavs Saveljevs", roleKey: "team.members.vladislavs.role", image: "/assets/team/vladislavs.jpg", bioKey: "team.members.vladislavs.bio", fullBioKey: "team.members.vladislavs.fullBio" },
];

const galleryImages = [
  { src: "/assets/gallery/food-detail.jpg", alt: "Food detail" },
  { src: "/assets/gallery/cocktail-art.jpg", alt: "Cocktail art" },
  { src: "/assets/gallery/appetizer.jpg", alt: "Appetizer" },
  { src: "/assets/gallery/champagne-tower.jpg", alt: "Champagne tower" },
  { src: "/assets/gallery/buffet.jpg", alt: "Buffet" },
  { src: "/assets/gallery/champagne-glasses.jpg", alt: "Champagne glasses" },
  { src: "/assets/gallery/pouring.jpg", alt: "Pouring" },
  { src: "/assets/gallery/wedding-champagne.jpg", alt: "Wedding champagne" },
  { src: "/assets/gallery/fire-show.jpg", alt: "Fire show" },
];

export default function HomePage() {
  const [activeAboutIndex, setActiveAboutIndex] = useState<number | null>(null);
  const [expandedServiceIndex, setExpandedServiceIndex] = useState<number | null>(null);
  const [isCateringDetailsOpen, setIsCateringDetailsOpen] = useState(false);
  const [isMusicDetailsOpen, setIsMusicDetailsOpen] = useState(false);
  const [isDesignDetailsOpen, setIsDesignDetailsOpen] = useState(false);
  const [isDecorDetailsOpen, setIsDecorDetailsOpen] = useState(false);
  const [isConsultingDetailsOpen, setIsConsultingDetailsOpen] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  const { t } = useLanguage();

  const aboutPoints = [
    { title: t("about.points.1.title"), text: t("about.points.1.text") },
    { title: t("about.points.2.title"), text: t("about.points.2.text") },
    { title: t("about.points.3.title"), text: t("about.points.3.text") },
    { title: t("about.points.4.title"), text: t("about.points.4.text") },
    { title: t("about.points.5.title"), text: t("about.points.5.text") },
    { title: t("about.points.6.title"), text: t("about.points.6.text") },
  ];

  const scrollToBuilder = () => {
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#222222] min-h-screen text-white font-sans selection:bg-[#8C080C] selection:text-white">
      <Navigation />
      <CartDrawer />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(/assets/hero-bg-new.jpg)` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-5xl md:text-8xl font-serif tracking-tight mb-6 leading-tight">
            {t("hero.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl md:text-2xl font-light tracking-[0.2em] mb-8 text-gray-200">
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

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(/assets/texture-bg.jpg)`, backgroundSize: "cover" }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-serif mb-8">
                {t("about.title")}<br /><span className="text-[#C0A07B] italic">{t("about.titleAccent")}</span>
              </motion.h2>
              <div className="w-20 h-[1px] bg-[#C0A07B] mb-8"></div>
            </div>
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg font-light leading-relaxed text-gray-300">
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
                  <Plus className={`w-4 h-4 text-[#C0A07B] transition-transform duration-300 ${activeAboutIndex === i ? "rotate-45" : ""}`} />
                </div>
                <h3 className="text-xl font-serif mb-2 group-hover:text-[#C0A07B] transition-colors">{point.title}</h3>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAboutIndex === i ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{point.text}</p>
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

      {/* CATERING */}
      <section id="services" className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
        <div className="bg-[#151515] p-12 md:p-24 flex flex-col justify-center">
          <Wine className="w-12 h-12 text-[#C0A07B] mb-8" />
          <h2 className="text-4xl font-serif mb-6">{t("services.catering.title")}</h2>
          <p className="text-gray-400 font-light mb-8 leading-relaxed">{t("services.catering.desc")}</p>
          <ul className="space-y-4 mb-10 text-sm font-light text-gray-300">
            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.catering.list1")}</li>
            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.catering.list2")}</li>
            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#C0A07B]"></span>{t("services.catering.list3")}</li>
          </ul>
          <AnimatePresence>
            {isCateringDetailsOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5 }} className="overflow-hidden mb-8">
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
            <button onClick={() => setIsCateringDetailsOpen(!isCateringDetailsOpen)} className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase">
              {isCateringDetailsOpen ? t("services.catering.close") : t("services.catering.more")}
            </button>
            <button onClick={scrollToBuilder} className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]">
              {t("services.catering.add")}
            </button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-auto">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/assets/gallery/buffet.jpg)` }}>
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
        <div className="relative h-[400px] md:h-auto order-2 md:order-1">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/assets/gallery/dj-turntable.jpg)` }}>
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>
        <div className="bg-[#1a1a1a] p-12 md:p-24 flex flex-col justify-center order-1 md:order-2">
          <Disc className="w-12 h-12 text-[#C0A07B] mb-8" />
          <h2 className="text-4xl font-serif mb-6">{t("services.music.title")}</h2>
          <p className="text-gray-400 font-light mb-8 leading-relaxed">{t("services.music.desc")}</p>
          <ul className="space-y-4 mb-10 text-sm font-light text-gray-300">
            <li className="flex items-start gap-3"><span className="w-1 h-1 bg-[#C0A07B] mt-2 shrink-0"></span><span>{t("services.music.list1")}</span></li>
            <li className="flex items-start gap-3"><span className="w-1 h-1 bg-[#C0A07B] mt-2 shrink-0"></span><span>{t("services.music.list2")}</span></li>
            <li className="flex items-start gap-3"><span className="w-1 h-1 bg-[#C0A07B] mt-2 shrink-0"></span><span>{t("services.music.list3")}</span></li>
          </ul>
          <div className="flex gap-4 items-center">
            <button onClick={() => setIsMusicDetailsOpen(!isMusicDetailsOpen)} className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase">
              {isMusicDetailsOpen ? t("services.music.close") : t("services.music.more")}
            </button>
            <button onClick={scrollToBuilder} className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]">
              {t("services.music.add")}
            </button>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
        <div className="bg-[#151515] p-12 md:p-24 flex flex-col justify-center">
          <PenTool className="w-12 h-12 text-[#C0A07B] mb-8" />
          <h2 className="text-4xl font-serif mb-6">{t("services.design.title")}</h2>
          <p className="text-gray-400 font-light mb-8 leading-relaxed">{t("services.design.desc")}</p>
          <div className="flex gap-4 items-center">
            <button onClick={() => setIsDesignDetailsOpen(!isDesignDetailsOpen)} className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase">
              {isDesignDetailsOpen ? t("services.design.close") : t("services.design.more")}
            </button>
            <button onClick={scrollToBuilder} className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]">
              {t("services.design.add")}
            </button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-auto">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/assets/design.png)` }}>
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>
      </section>

      {/* DECOR */}
      <section className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
        <div className="relative h-[400px] md:h-auto order-2 md:order-1">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/assets/gallery/decor-red.jpg)` }}>
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>
        <div className="bg-[#1a1a1a] p-12 md:p-24 flex flex-col justify-center order-1 md:order-2">
          <Lightbulb className="w-12 h-12 text-[#C0A07B] mb-8" />
          <h2 className="text-4xl font-serif mb-6">{t("services.decor.title")}</h2>
          <p className="text-gray-400 font-light mb-8 leading-relaxed">{t("services.decor.desc")}</p>
          <div className="flex gap-4 items-center">
            <button onClick={() => setIsDecorDetailsOpen(!isDecorDetailsOpen)} className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase">
              {isDecorDetailsOpen ? t("services.decor.close") : t("services.decor.more")}
            </button>
            <button onClick={scrollToBuilder} className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]">
              {t("services.decor.add")}
            </button>
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
        <div className="bg-[#151515] p-12 md:p-24 flex flex-col justify-center">
          <Users className="w-12 h-12 text-[#C0A07B] mb-8" />
          <h2 className="text-4xl font-serif mb-6">{t("services.consulting.title")}</h2>
          <p className="text-gray-400 font-light mb-8 leading-relaxed">{t("services.consulting.desc")}</p>
          <div className="flex gap-4 items-center">
            <button onClick={() => setIsConsultingDetailsOpen(!isConsultingDetailsOpen)} className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase">
              {isConsultingDetailsOpen ? t("services.consulting.close") : t("services.consulting.more")}
            </button>
            <button onClick={scrollToBuilder} className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]">
              {t("services.consulting.add")}
            </button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-auto">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/assets/consulting-team.jpg)` }}>
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">{t("gallery.title") || "GALERIJA"}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {galleryImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative aspect-square overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 bg-[#222222]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">{t("team.title") || "MŪSU KOMANDA"}</h2>
          <div className="grid md:grid-cols-3 gap-1">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                onClick={() => setActiveTeamMember(activeTeamMember === i ? null : i)}
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-serif text-xl">{member.name}</h3>
                  <p className="text-[#C0A07B] text-xs tracking-widest mt-1">{t(member.roleKey)}</p>
                </div>
                <div className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-8 text-center transition-all duration-500 ${activeTeamMember === i ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}>
                  <h3 className="text-white font-serif text-xl mb-2">{member.name}</h3>
                  <p className="text-[#C0A07B] text-xs tracking-widest mb-4">{t(member.roleKey)}</p>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {activeTeamMember === i ? t(member.fullBioKey) : t(member.bioKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">{t("certificates.title") || "SERTIFIKĀTI"}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["/assets/certificates/certificate1.png", "/assets/certificates/certificate2.jpg", "/assets/certificates/certificate3.png"].map((cert, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#222] p-4 border border-white/5">
                <img src={cert} alt={`Certificate ${i + 1}`} className="w-full h-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">{t("partners.title") || "PARTNERI"}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center justify-center p-4 opacity-60 hover:opacity-100 transition-opacity">
                <img src={partner.logo} alt={partner.name} className="max-h-16 w-auto object-contain filter invert" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
