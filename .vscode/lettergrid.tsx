import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LetterGridProps {
  letters: string[];
  selectedIndices: number[];
  onSelect: (index: number) => void;
}

const LetterGrid: React.FC<LetterGridProps> = ({ 
  letters, 
  selectedIndices, 
  onSelect 
}) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            backgroundColor: selectedIndices.includes(index) 
              ? 'hsl(var(--primary))' 
              : 'hsl(var(--secondary))'
          }}
          transition={{ 
            duration: 0.2,
            delay: index * 0.01, // Staggered animation
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(index)}
          className={cn(
            "h-14 w-full flex items-center justify-center rounded-md font-bold text-xl cursor-pointer transition-colors",
            selectedIndices.includes(index) 
              ? "bg-primary text-primary-foreground border-2 border-primary/50 shadow-md transform scale-105" 
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
};

export default LetterGrid;
