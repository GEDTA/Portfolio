import { motion, useScroll, useTransform } from 'framer-motion';

export function Background() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Cercles animés */}
        <motion.div
          style={{ y: y1, rotate: rotate1, scale }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          style={{ y: y2, rotate: rotate2, scale }}
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl"
        />
        <motion.div
          style={{ y: y3, opacity }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"
        />

        {/* Grille de points */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      </div>
    </div>
  );
}