"use client";

import { Bebas_Neue } from "next/font/google";
import styles from "./page.module.css";
import { Text, Navbar } from "@/app/components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Homae() {
  const { scrollYProgress } = useViewportScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["30%", "100%"]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const moveRight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className={styles.main + " px-7 pt-3"}>
      <Navbar className={"flex"}>
        <div className="flex flex-row">
          <Text className="" variant="combine">
            Yamani
          </Text>
          <Text className="" variant="combine">
            Yuda
          </Text>
        </div>
      </Navbar>
      <div className="w-[100%]">
        <div className="flex justify-between items-center">
          <motion.div
            initial="visible"
            style={{ translateX }}
            viewport={{ once: true }}
          >
            <Text
              className={
                bebas_neue.className +
                " text-[280px] uppercase tracking-tight cursor-pointer hover:text-white"
              }
              variant="sigle"
            >
              Front
            </Text>
          </motion.div>
          <motion.div
            initial="visible"
            style={{ width }}
            viewport={{ once: true }}
            className="min-w-[30%] h-[30px] bg-[#aaa] hover:bg-white"
          ></motion.div>
          <motion.div
            initial="visible"
            style={{ translateX: moveRight }}
            viewport={{ once: true }}
          >
            <Text
              className={
                bebas_neue.className +
                " text-[280px] uppercase tracking-tight cursor-pointer hover:text-white"
              }
              variant="sigle"
            >
              End
            </Text>
          </motion.div>
        </div>
      </div>
      <div className="w-[100%] mt-[-150px] flex justify-between items-center">
        <Text
          className={
            bebas_neue.className +
            " text-[280px] uppercase tracking-tight cursor-pointer hover:text-white"
          }
          variant="sigle"
        >
          Developer
        </Text>
        <div className="ml-11">
          <Text className="" variant="combine">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            commodi vel eum corporis alias fuga dolor quis. Fuga, beatae hic.
            Modi aliquam dolor quae, numquam earum quo suscipit ab magnam.
          </Text>
        </div>
      </div>
    </main>
  );
}
