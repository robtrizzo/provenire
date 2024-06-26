'use client';

import { motion } from 'framer-motion';

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.2 }}
      className="flex flex-col gap-4"
    >
      {children}
    </motion.div>
  );
}
