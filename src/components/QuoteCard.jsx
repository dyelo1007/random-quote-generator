import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const QuoteCard = ({ title, quote, author, onClick, btnName, loading }) => {
  return (
    <div className="bg-[#e0e0e0] rounded-3xl shadow-bg-[#e0e0e0] shadow-[9px_9px_16px_#bebebe,-9px_-9px_16px_#ffffff] p-6 sm:p-8 md:p-12 max-w-[90%] sm:max-w-lg md:max-w-xl w-full text-center mx-auto">
      <h1 className="font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8">
        {title}
      </h1>

      <div className="min-h-[100px] flex flex-col justify-center items-center mb-8 sm:mb-10">
        {loading ? (
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid border-opacity-50"></div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={quote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl mb-2 font-light leading-relaxed"
            >
              "{quote}"
            </motion.div>
            <motion.span
              key={author}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-500 text-sm sm:text-base"
            >
              — {author}
            </motion.span>
          </AnimatePresence>
        )}
      </div>

      <button
        className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] font-medium transition hover:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] text-sm sm:text-base"
        onClick={onClick}
      >
        {btnName}
      </button>
    </div>
  );
};

export default QuoteCard;
