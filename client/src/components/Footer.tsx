import { Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import euFundLogo from "@/assets/eu-fund-logo.png";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer id="contacts" className="bg-black py-20 text-white border-t border-[#333]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          <div className="order-1 md:col-start-1 md:row-start-1">
            <h2 className="text-4xl font-serif mb-6 whitespace-pre-line">{t("footer.title")}</h2>
            <p className="font-light text-gray-400 max-w-md mb-8">
              {t("footer.desc")}
            </p>
            <div className="flex gap-4">
               <a 
                 href="https://www.instagram.com/d.o.m.eventagency" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#C0A07B] hover:border-[#C0A07B] hover:text-black transition-all cursor-pointer"
               >
                 <Instagram size={20} />
               </a>
               <a 
                 href="https://www.facebook.com/profile.php?id=61554741856673" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#C0A07B] hover:border-[#C0A07B] hover:text-black transition-all cursor-pointer"
               >
                 <Facebook size={20} />
               </a>
            </div>
          </div>

          <div className="order-2 md:col-start-2 md:row-start-1 flex flex-col gap-4 font-light text-left md:text-right md:items-end">
             <a href="mailto:d.o.m.eventagency@gmail.com" className="text-xl hover:text-[#C0A07B] transition-colors">d.o.m.eventagency@gmail.com</a>
             <a href="tel:+37126178575" className="text-xl hover:text-[#C0A07B] transition-colors">(+371) 26178575</a>
          </div>

          <div className="order-3 md:col-start-1 md:row-start-2 text-xs text-gray-500 font-light leading-relaxed">
              <p className="font-medium text-gray-400 mb-2">{t("footer.details.title")}</p>
              <p>{t("footer.details.name")}</p>
              <p>{t("footer.details.reg")}</p>
              <p>{t("footer.details.address")}</p>
              <p>{t("footer.details.bank")}</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
            <img src={euFundLogo} alt="ES Atveseļošanās fonds" className="h-12 object-contain" />
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
