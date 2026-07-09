"use client";

import { motion } from "framer-motion";

type InfoCardProps = {
  title: string;
  description: string;
  delay?: number;
  icon?: React.ElementType;
};

export default function InfoCard({
  title,
  description,
  delay = 0,
  icon: Icon,
}: InfoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay,
      }}
      className="
        rounded-2xl
        border border-gray-100
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-lg
      "
    >
      {Icon && (
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-light)]">
          <Icon className="h-7 w-7 text-[var(--primary)]" />
        </div>
      )}

      <h3 className="mb-4 text-xl font-semibold text-[var(--primary)]">
        {title}
      </h3>

      <p className="leading-relaxed text-gray-600">
        {description}
      </p>
    </motion.article>
  );
}