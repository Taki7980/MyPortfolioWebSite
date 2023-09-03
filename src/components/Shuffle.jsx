"use client";
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Data from "@/constants/data"

const shuffle = (array) => {
      let currentIndex = array.length,
            randomIndex;

      while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                  array[randomIndex],
                  array[currentIndex],
            ];
      }

      return array;
};


const generateSquares = () => {
      return shuffle(Data).map((sq) => (
            <motion.div
                  key={sq.id}
                  layout
                  transition={{ duration: 1.5, type: "spring" }}
                  className="w-full h-full"
                  style={{
                        backgroundImage: `url(${sq.src})`,
                        backgroundSize: "cover",
                  }}
            ></motion.div>
      ));
};

const ShuffleGrid = () => {
      const timeoutRef = useRef(null);
      const [squares, setSquares] = useState(generateSquares());

      useEffect(() => {
            shuffleSquares();

            return () => clearTimeout(timeoutRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const shuffleSquares = () => {
            setSquares(generateSquares());

            timeoutRef.current = setTimeout(shuffleSquares, 3000);
      };

      return (
            <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
                  {squares.map((sq) => sq)}
            </div>
      );
};

export default ShuffleGrid