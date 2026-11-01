import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import { brand } from "../data/sample.config";

export default function Hero() {
    return (
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center px-6 py-20 sm:py-28"
      >
        <p className="text-[10px] uppercase tracking-[0.22em] font-light text-gray-400 mb-4">
          Camera Rental Studio
        </p>
        <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-black mb-4">
          {brand.name}
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] font-light text-gray-400 mb-10">
          {brand.bio}
        </p>
        <p className="text-xs font-light text-gray-400 mb-6">
          5 Devices · Metro Manila
        </p>
        <ArrowDown size={16} className="text-gray-300 animate-bounce" strokeWidth={1.5} />
      </motion.section>

    //   {/* Camera showcase */}
    //   <section className="max-w-5xl mx-auto px-6 pb-20">
    //     <div className="flex items-end justify-between mb-8">
    //       <div>
    //         <p className="text-[10px] uppercase tracking-[0.2em] font-light text-gray-400 mb-2">
    //           The Collection
    //         </p>
    //         <h2 className="text-2xl font-light text-black">Choose your camera</h2>
    //       </div>
    //       <div className="hidden sm:flex items-center gap-1.5">
    //         <Star size={13} className="fill-black text-black" strokeWidth={0} />
    //         <span className="text-xs font-light text-gray-400">Verified reviews</span>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    //       {liveCameras.map((camera) => (
    //         <CameraCard
    //           key={camera.id}
    //           camera={camera}
    //           active={camera.id === selectedId}
    //           onSelect={handleSelect}
    //         />
    //       ))}
    //     </div>
    );
}