"use client";

import { Bebas_Neue, Open_Sans } from "next/font/google";
import styles from "./page.module.css";
import { Text, Navbar, Button } from "@/app/components";
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import {
  MouseEventHandler,
  RefObject,
  WheelEventHandler,
  useEffect,
  useRef,
} from "react";

const bebas_neue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
});

const NavbarSection = () => {
  return (
    <Navbar className="w-100 overflow-hidden">
      <motion.div
        initial={{ translateY: "100%" }}
        animate={{ translateY: "0%" }}
        whileInView={"onscreen"}
        transition={{ ease: "easeOut" }}
        style={{
          transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
        }}
        viewport={{ once: true }}
        className="grid grid-cols-4 "
      >
        <div className="flex flex-col">
          <Text className="" variant="combine">
            Yamani
          </Text>
          <Text className={" tracking-[6px]"} variant="combine">
            Yuda
          </Text>
        </div>
        <div className="">
          <div>FRONTEND DEVELOPER</div>
          <div>FOLIO / 2023</div>
        </div>
        <div className="col-span-2 text-end align-middle">
          <Button className="border rounded border-zinc-500 m-2" to="#hai">
            Contact
          </Button>
        </div>
      </motion.div>
    </Navbar>
  );
};

const HeaderTitle = ({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement>;
}) => {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], ["1", "8"]);
  const translateX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  const moveRight = useTransform(scrollYProgress, [0, 0.5], ["-10%", "100%"]);

  return (
    <>
      <div className="h-[22vw] flex items-center justify-between overflow-y-hidden w-100">
        <motion.div
          initial={{ translateY: "100%" }}
          animate={{ translateY: "0%" }}
          whileInView={"onscreen"}
          transition={{ ease: "easeOut", delay: 1 }}
          style={{
            transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
          }}
          className="h-[22vw] flex items-center justify-between overflow-hidden w-[100%] pr-2"
          viewport={{ once: true }}
        >
          <motion.div
            transition={{ ease: "easeOut" }}
            style={{
              translateX,
              transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
            }}
            whileInView={"onscreen"}
            className="h-[22vw]  flex items-center"
            viewport={{ once: true }}
          >
            <Text
              className={
                bebas_neue.className +
                " uppercase tracking-[-20px] text-[23vw] cursor-pointer hover:text-white"
              }
              variant="sigle"
            >
              Front
            </Text>
          </motion.div>
          <motion.div
            transition={{ ease: "easeOut" }}
            initial="visible"
            whileInView={"onscreen"}
            style={{
              scaleX,
              transition: "transform 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
            }}
            viewport={{ once: true }}
            className="h-[30px] min-w-[20%] bg-[#aaa] hover:bg-white"
          ></motion.div>
          <motion.div
            transition={{ ease: "easeOut" }}
            whileInView={"onscreen"}
            style={{
              translateX: moveRight,
              transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
            }}
            className="h-[22vw]  flex items-center"
            viewport={{ once: true }}
          >
            <Text
              className={
                bebas_neue.className +
                " uppercase tracking-[-20px] text-[23vw] cursor-pointer hover:text-white"
              }
              variant="sigle"
            >
              End
            </Text>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-[22vw] flex items-center mt-[-25px] justify-between overflow-hidden w-100">
        <motion.div
          initial={{ translateY: "100%" }}
          animate={{ translateY: "0%" }}
          transition={{ type: "spring", delay: 1 }}
          whileInView={"onscreen"}
          style={{
            transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
          }}
          className="h-[22vw] flex items-center justify-between overflow-hidden w-[100%] pr-2"
          viewport={{ once: true }}
        >
          <motion.div
            transition={{ type: "spring" }}
            style={{
              translateX,
              transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
            }}
            className="h-[22vw]  flex items-center"
            viewport={{ once: true }}
          >
            <Text
              className={
                bebas_neue.className +
                " uppercase tracking-[-20px] text-[23vw] cursor-pointer hover:text-white"
              }
              variant="sigle"
            >
              Developer
            </Text>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ translateY: "100%" }}
          animate={{ translateY: "0%" }}
          transition={{ type: "spring", delay: 1.4 }}
          whileInView={"onscreen"}
          style={{
            transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
          }}
          className="h-[22vw] mt-12 flex w-[400px] flex-col justify-between"
          viewport={{ once: true }}
        >
          <div>
            <span className={open_sans.className + " text-white"}>About </span>
            <span className={open_sans.className + " text-[#aaa]"}>
              Hi, I am Yamani, a frontend developer, I have more than a year of
              work experience and I love coding and art
            </span>
          </div>
          <div className="mb-[100px]">
            <span>Scroll Down</span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default function Homae() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <main className={styles.main + " px-9 pt-3"} ref={containerRef}>
      <section>
        <NavbarSection />
      </section>
      <section className="mt-16">
        <HeaderTitle containerRef={containerRef} />
      </section>
      <section>
        
      </section>
    </main>
  );
}
