"use client";
import { Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { usePayloadSettings } from "@/components/PayloadDataProvider";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();
  const payloadSettings = usePayloadSettings();
  const footer = payloadSettings?.footer;

  return (
    <footer id="contacts" className="bg-black py-20 text-white border-t border-[#333]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div>
            <h2 className="text-4xl font-serif mb-6 whitespace-pre-line">{footer?.tagline ?? t("footer.title")}</h2>
            <p className="font-light text-gray-400 max-w-md mb-8">{t("footer.desc")}</p>
            <div className="flex gap-4">
              <a href={footer?.socialLinks?.find((s: { platform?: string }) => s.platform?.toLowerCase() === "instagram")?.url ?? "https://www.instagram.com/d.o.m.eventagency"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#C0A07B] hover:border-[#C0A07B] hover:text-black transition-all cursor-pointer">
                <Instagram size={20} />
              </a>
              <a href={footer?.socialLinks?.find((s: { platform?: string }) => s.platform?.toLowerCase() === "facebook")?.url ?? "https://www.facebook.com/profile.php?id=61554741856673"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#C0A07B] hover:border-[#C0A07B] hover:text-black transition-all cursor-pointer">
                <Facebook size={20} />
              </a>
            </div>
            <div className="mt-4 flex flex-col gap-4 font-light lg:hidden">
              <a href="mailto:d.o.m.eventagency@gmail.com" className="text-left text-xl hover:text-[#C0A07B] transition-colors">d.o.m.eventagency@gmail.com</a>
              <a href="tel:+37126178575" className="text-left text-xl hover:text-[#C0A07B] transition-colors">(+371) 26178575</a>
            </div>
            <div className="mt-10 text-xs text-gray-500 font-light leading-relaxed lg:mt-12">
              {footer?.tagline && (
                <p className="font-medium text-gray-400 mb-2">{footer.tagline}</p>
              )}
              {!footer?.tagline && <p className="font-medium text-gray-400 mb-2">{t("footer.details.title")}</p>}
              <p>{t("footer.details.name")}</p>
              <p>{t("footer.details.reg")}</p>
              <p>{t("footer.details.address")}</p>
              <p>{t("footer.details.bank")}</p>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-4 font-light text-right items-end self-start text-xl">
            <a href="mailto:d.o.m.eventagency@gmail.com" className="hover:text-[#C0A07B] transition-colors">d.o.m.eventagency@gmail.com</a>
            <a href="tel:+37126178575" className="hover:text-[#C0A07B] transition-colors">(+371) 26178575</a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
            <Image src="/assets/eu-fund-logo.png" alt="ES Atveseļošanās fonds" width={120} height={48} className="h-12 w-auto object-contain" />
            <p className="text-xs text-gray-500 font-light leading-relaxed max-w-3xl">
              SIA Probar reģ.nr 40203160448 Atveseļošanās fonda ietvaros veic ieguldījumu komercdarbības procesu uzlabošanā.
              Atbalstāmā darbība: jaunu digitālo risinājumu izstrāde.
              Risinājums: e-komercijas risinājums{" "}
              <a href="http://www.domeventagency.com/" target="_blank" rel="noopener noreferrer" className="text-[#C0A07B] hover:underline">
                www.domeventagency.com
              </a>
            </p>
          </div>
          <div className="flex justify-between items-center text-gray-600 font-sans tracking-widest uppercase">
            <span className="text-xs">{t("footer.copyright")}</span>
            <span className="text-[10px]">{t("footer.designed")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
