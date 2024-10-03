import Header from "../sections/Header";
import Education from "../sections/Education";
import Introduction from "../sections/Introduction";
import Navbar from "../sections/Navbar";
import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Introduction />
      <Education />
    </motion.div>
  );
}
