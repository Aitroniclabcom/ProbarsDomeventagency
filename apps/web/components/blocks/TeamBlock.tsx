"use client";
import { motion } from "framer-motion";

type TeamMember = { name: string; role?: string; bio?: string; photo?: { url: string; alt: string } };
type TeamBlock = { blockType: "team"; title?: string; members: TeamMember[] };

export function TeamBlock({ title, members }: TeamBlock) {
  if (!members?.length) return null;
  return (
    <section className="py-16 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white mb-12 text-center"
          >
            {title}
          </motion.h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-[#1a1a1a]">
                {member.photo ? (
                  <img src={member.photo.url} alt={member.photo.alt} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-[#2a2a2a]" />
                )}
              </div>
              <h3 className="text-white font-medium">{member.name}</h3>
              {member.role && <p className="text-[#C0A07B] text-xs tracking-widest uppercase mt-1">{member.role}</p>}
              {member.bio && <p className="text-gray-500 text-sm mt-2 leading-relaxed">{member.bio}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
