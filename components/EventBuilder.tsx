"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, ArrowRight, Minus, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { usePayloadPage } from "@/components/PayloadDataProvider";

export function EventBuilder() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();
  const payloadData = usePayloadPage();
  const eventBuilderBlock = payloadData?.layout?.find((b: { blockType?: string }) => b.blockType === "eventBuilder");

  const getServiceData = (key: string, fallbackTitle: string, fallbackDesc: string) => {
    const payloadService = eventBuilderBlock?.services?.find((s: { key?: string }) => s.key === key);
    return {
      title: payloadService?.title ?? fallbackTitle,
      description: payloadService?.description ?? fallbackDesc,
    };
  };

  const services = [
    { id: "drinks", ...getServiceData("drinks", t("builder.services.drinks.title"), t("builder.services.drinks.desc")) },
    { id: "food", ...getServiceData("food", t("builder.services.food.title"), t("builder.services.food.desc")) },
    { id: "decor", ...getServiceData("decor", t("builder.services.decor.title"), t("builder.services.decor.desc")) },
    { id: "music", ...getServiceData("music", t("builder.services.music.title"), t("builder.services.music.desc")) },
    { id: "logistics", ...getServiceData("logistics", t("builder.services.logistics.title"), t("builder.services.logistics.desc")) },
  ];

  const toggleExpand = (id: string) => setExpandedId(expandedId === id ? null : id);
  const toggleSelection = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) { newSelected.delete(id); } else { newSelected.add(id); }
    setSelectedIds(newSelected);
  };
  const selectedServices = services.filter((s) => selectedIds.has(s.id));

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      toast({ title: t("builder.modal.error"), description: t("builder.modal.fillRequired"), variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, services: selectedServices.map((s) => s.title) }),
      });
      if (!response.ok) throw new Error("Failed to send");
      toast({ title: t("builder.modal.success"), description: t("builder.modal.successDesc") });
      setFormData({ name: "", email: "", phone: "" });
      setSelectedIds(new Set());
    } catch (error) {
      toast({ title: t("builder.modal.error"), description: t("builder.modal.errorDesc"), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(false);
    }
  };

  return (
    <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">{eventBuilderBlock?.heading ?? t("builder.title")}</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className={`border border-white/10 transition-all duration-300 ${selectedIds.has(service.id) ? "border-[#C0A07B]/50 bg-[#C0A07B]/5" : "bg-[#222222]"}`}>
                <div className="p-6 cursor-pointer flex justify-between items-center group" onClick={() => toggleExpand(service.id)}>
                  <h3 className={`text-xl font-light font-serif tracking-wide transition-colors ${selectedIds.has(service.id) ? "text-[#C0A07B]" : "group-hover:text-[#C0A07B]"}`}>
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleSelection(service.id); }}
                      className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 ${selectedIds.has(service.id) ? "bg-[#C0A07B] border-[#C0A07B] text-[#222222]" : "border-white/20 hover:border-[#C0A07B] text-white hover:text-[#C0A07B]"}`}
                    >
                      {selectedIds.has(service.id) ? <Check size={18} /> : <Plus size={18} />}
                    </button>
                  </div>
                </div>
                <AnimatePresence>
                  {expandedId === service.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0 text-gray-400 font-light text-sm leading-relaxed border-t border-white/5 mt-2">
                        <div className="pt-4">{service.description}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="sticky top-24">
            <div className="bg-[#222222] p-8 md:p-12 border border-white/10 min-h-[400px] flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C0A07B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                {t("builder.yourEvent")}
                <span className="text-[#C0A07B] text-sm font-sans font-light tracking-widest border border-[#C0A07B] px-2 py-1 rounded-full">{selectedIds.size}</span>
              </h3>
              <div className="flex-grow space-y-3">
                <AnimatePresence mode="popLayout">
                  {selectedServices.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-gray-500 font-light italic text-center py-12">
                      {eventBuilderBlock?.emptyStateText ?? t("builder.emptyState")}
                    </motion.div>
                  )}
                  {selectedServices.map((service) => (
                    <motion.div layout key={service.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-[#1a1a1a] p-4 flex justify-between items-center border-l-2 border-[#C0A07B]">
                      <span className="text-sm tracking-wide">{service.title}</span>
                      <button onClick={() => toggleSelection(service.id)} className="text-gray-500 hover:text-[#8C080C] transition-colors"><Minus size={16} /></button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  disabled={selectedServices.length === 0}
                  className="w-full bg-[#8C080C] text-white py-4 text-sm tracking-[0.2em] hover:bg-[#a0090e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-[#8C080C]"
                >
                  {eventBuilderBlock?.submitButtonText ?? t("builder.submit")} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-[#1a1a1a] border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-[#C0A07B] text-xl font-serif">{t("builder.modal.title")}</DialogTitle>
            <DialogDescription className="text-gray-400">{t("builder.modal.desc")}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="name" className="text-white">{t("builder.modal.name")} *</Label>
              <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-[#222] border-white/10 text-white mt-1" />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">{t("builder.modal.email")} *</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-[#222] border-white/10 text-white mt-1" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-white">{t("builder.modal.phone")}</Label>
              <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-[#222] border-white/10 text-white mt-1" />
            </div>
            {selectedServices.length > 0 && (
              <div>
                <p className="text-gray-400 text-sm mb-2">{t("builder.modal.services")}</p>
                <ul className="space-y-1">
                  {selectedServices.map((s) => <li key={s.id} className="text-sm text-[#C0A07B] flex items-center gap-2"><Check size={14} /> {s.title}</li>)}
                </ul>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)} className="text-gray-400">Atcelt</Button>
            <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-[#8C080C] hover:bg-[#a0090e] text-white border-0">
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : t("builder.modal.submitBtn")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
