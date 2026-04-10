"use client";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventBuilder } from "@/components/EventBuilder";
import { CartDrawer } from "@/components/CartDrawer";
import { motion } from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { usePayloadPage } from "@/components/PayloadDataProvider";
import { ServiceSections } from "@/components/ServiceSections";
import { resolveServiceSections } from "@/lib/resolveServiceSections";

export default function HomePage() {
  const payloadData = usePayloadPage();
  const heroBlock = payloadData?.layout?.find((b: any) => b.blockType === "hero");
  const teamBlock = payloadData?.layout?.find((b: any) => b.blockType === "team");
  const galleryBlock = payloadData?.layout?.find((b: any) => b.blockType === "gallery");
  const partnersBlock = payloadData?.layout?.find((b: any) => b.blockType === "partners");
  const eventBuilderBlock = payloadData?.layout?.find((b: any) => b.blockType === "eventBuilder");

  const partnerLogoMap: Record<string, string> = {
    "MV Group": "/assets/partners/mvgroup.png",
    "M Collections": "/assets/partners/mcollection.png",
    "Latgalian Bartenders Club": "/assets/partners/lbc.png",
    "Park Hotel Latgola": "/assets/partners/latgola.png",
    Gemoss: "/assets/partners/gemoss.png",
    "1st Boogie Garden": "/assets/partners/boogie.png",
    "Par Ziediem": "/assets/partners/parziediem.png",
    "Sound Light Serviss": "/assets/partners/sls.png",
  };

  const teamImageMap: Record<string, string> = {
    "Deniss Smirnovs": "/assets/team/deniss.jpg",
    "Anastasija Kazarina": "/assets/team/anastasija.jpg",
    "Oļegs Porietis": "/assets/team/olegs.jpg",
    "Andris Konopackis": "/assets/team/andris.jpg",
    "Laura Rudko": "/assets/team/laura.jpg",
    "Vladislavs Saveljevs": "/assets/team/vladislavs.jpg",
  };

  const partners: { name: string; logo: string }[] = partnersBlock?.partners?.length
    ? partnersBlock.partners.map((p: any) => ({
        name: p.name,
        logo: p.logo?.url ?? partnerLogoMap[p.name] ?? "",
      }))
    : [
        { name: "MV Group", logo: "/assets/partners/mvgroup.png" },
        { name: "M Collections", logo: "/assets/partners/mcollection.png" },
        { name: "Latgalian Bartenders Club", logo: "/assets/partners/lbc.png" },
        { name: "Park Hotel Latgola", logo: "/assets/partners/latgola.png" },
        { name: "Gemoss", logo: "/assets/partners/gemoss.png" },
        { name: "1st Boogie Garden", logo: "/assets/partners/boogie.png" },
        { name: "Par Ziediem", logo: "/assets/partners/parziediem.png" },
        { name: "Sound Light Serviss", logo: "/assets/partners/sls.png" },
      ];

  const teamMembers: {
    name: string
    roleKey: string
    image: string
    bioKey: string
    fullBioKey: string
  }[] = teamBlock?.members?.length
    ? teamBlock.members.map((m: any) => ({
        name: m.name,
        roleKey: m.role ?? "",
        image: m.image?.url ?? teamImageMap[m.name] ?? "/assets/team/placeholder.jpg",
        bioKey: m.bio ?? "",
        fullBioKey: m.fullBio ?? "",
      }))
    : [
        { name: "Deniss Smirnovs", roleKey: "team.members.deniss.role", image: "/assets/team/deniss.jpg", bioKey: "team.members.deniss.bio", fullBioKey: "team.members.deniss.fullBio" },
        { name: "Anastasija Kazarina", roleKey: "team.members.anastasija.role", image: "/assets/team/anastasija.jpg", bioKey: "team.members.anastasija.bio", fullBioKey: "team.members.anastasija.fullBio" },
        { name: "Oļegs Porietis", roleKey: "team.members.olegs.role", image: "/assets/team/olegs.jpg", bioKey: "team.members.olegs.bio", fullBioKey: "team.members.olegs.fullBio" },
        { name: "Andris Konopackis", roleKey: "team.members.andris.role", image: "/assets/team/andris.jpg", bioKey: "team.members.andris.bio", fullBioKey: "team.members.andris.fullBio" },
        { name: "Laura Rudko", roleKey: "team.members.laura.role", image: "/assets/team/laura.jpg", bioKey: "team.members.laura.bio", fullBioKey: "team.members.laura.fullBio" },
        { name: "Vladislavs Saveljevs", roleKey: "team.members.vladislavs.role", image: "/assets/team/vladislavs.jpg", bioKey: "team.members.vladislavs.bio", fullBioKey: "team.members.vladislavs.fullBio" },
      ];

  const galleryImages: { src: string; alt: string }[] = galleryBlock?.images?.length
    ? galleryBlock.images.map((img: any) => ({
        src: img.image?.url ?? "",
        alt: img.caption ?? "",
      }))
    : [
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

  const [activeAboutIndex, setActiveAboutIndex] = useState<number | null>(null);
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  const { t } = useLanguage();
  // Payload data available: payloadData?.layout

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

  const serviceSections = resolveServiceSections(payloadData?.layout as unknown[] | undefined, t);

  return (
    <div className="bg-[#222222] min-h-screen max-w-full overflow-x-hidden text-white font-sans selection:bg-[#8C080C] selection:text-white">
      <Navigation />
      <CartDrawer />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/assets/hero-bg-new.jpg)` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-5xl md:text-8xl font-serif tracking-tight mb-6 leading-tight">
            {t("hero.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl md:text-2xl font-light tracking-[0.2em] mb-8 text-gray-200">
            {heroBlock?.subheading ?? t("hero.subtitle")}
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

      <div id="services">
        <ServiceSections sections={serviceSections} onAddToBuilder={scrollToBuilder} />
      </div>

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
                  <p className="text-[#C0A07B] text-xs tracking-widest mt-1">{teamBlock?.members?.length ? member.roleKey : t(member.roleKey)}</p>
                </div>
                <div className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-8 text-center transition-all duration-500 ${activeTeamMember === i ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}>
                  <h3 className="text-white font-serif text-xl mb-2">{member.name}</h3>
                  <p className="text-[#C0A07B] text-xs tracking-widest mb-4">{teamBlock?.members?.length ? member.roleKey : t(member.roleKey)}</p>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {teamBlock?.members?.length
                      ? activeTeamMember === i
                        ? member.fullBioKey
                        : member.bioKey
                      : activeTeamMember === i
                        ? t(member.fullBioKey)
                        : t(member.bioKey)}
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
