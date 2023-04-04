"use client";

import { Bebas_Neue, Open_Sans } from "next/font/google";
import styles from "./page.module.css";
import { Text, Navbar, Button } from "@/components/index";
import Link from "next/link";
import Image from "next/image";
import {
  Variants,
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
      <div className="md:h-[22vw] flex items-center justify-between overflow-y-hidden w-100">
        <motion.div
          initial={{ translateY: "100%" }}
          animate={{ translateY: "0%" }}
          whileInView={"onscreen"}
          transition={{ ease: "easeOut", delay: 1 }}
          style={{
            transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
          }}
          className="md:h-[22vw] md:flex md:flex-row sm:flex-col items-center justify-between md:overflow-hidden sm:overflow-visible w-[100%] pr-2"
          viewport={{ once: true }}
        >
          <motion.div
            transition={{ ease: "easeOut" }}
            style={{
              translateX,
              transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
            }}
            whileInView={"onscreen"}
            className="h-[22vw] flex items-center"
            viewport={{ once: true }}
          >
            <Text
              className={
                bebas_neue.className +
                " uppercase md:tracking-[-20px] text-[23vw] cursor-pointer hover:text-white"
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
            className="h-[30px] min-w-[20%] md:block hidden bg-[#aaa] hover:bg-white"
          ></motion.div>
          <motion.div
            transition={{ ease: "easeOut" }}
            whileInView={"onscreen"}
            style={{
              translateX: moveRight,
              transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
            }}
            className="h-[22vw] flex items-center md:ml-0 ml-10"
            viewport={{ once: true }}
          >
            <Text
              className={
                bebas_neue.className +
                " uppercase md:tracking-[-20px] tracking-[-10px] text-[23vw] cursor-pointer hover:text-white"
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
          className="h-[22vw] flex items-center md:mt-0 mt-10 justify-between overflow-hidden w-[100%] pr-2"
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
                " uppercase md:tracking-[-20px] tracking-[-10px] text-[23vw] cursor-pointer hover:text-white"
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
          className="h-[22vw] md:mt-12 mt-32 md:flex w-[400px] hidden flex-col justify-between"
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

const LineAnimeteScroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  return (
    <motion.div
      transition={{ type: "spring" }}
      initial={"hidden"}
      whileInView={"onscreen"}
      className="h-[10px] bg-[#aaa]"
      style={{
        width,
        transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
      }}
    ></motion.div>
  );
};

const ImageSection = () => {
  return (
    <div className="h-[100vh] d-flex items-center align-middle relative">
      <motion.img
        initial={{ height: 0 }}
        whileInView={{
          height: "50%",
        }}
        style={{
          transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
        }}
        viewport={{ once: true }}
        src="assets/images/profil.jpeg"
        className="absolute md:w-[60%] sm:w-[100%] h-[50%] object-cover"
      ></motion.img>
    </div>
  );
};

const TextAnimation = ({
  children,
  viewport,
}: {
  children: string;
  viewport?: any;
}) => {
  const words = children.split("");
  const wordAnimation: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: i * 0.03,
      },
    }),
  };
  const wordChildAnimation: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={wordAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px", root: viewport }}
      animate="visible"
      className="md:text-[8vw] text-[12vw] "
    >
      {words.map((data, idx) => (
        <motion.span
          key={idx}
          variants={wordChildAnimation}
          viewport={{ once: true, root: viewport }}
          style={{ marginRight: data === " " ? "15px" : "-6px" }}
          className={bebas_neue.className}
        >
          {data}
        </motion.span>
      ))}
    </motion.div>
  );
};

const SectionFour = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const moveText = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <div className="w-100 grid md:grid-cols-10 md:items-center md:h-[80vh] overflow-hidden">
      <div
        className="mt-10 h-[100%] w-[100%] col-span-6 md:flex md:flex-col md:justify-center"
        ref={scrollRef}
      >
        <TextAnimation viewport={scrollRef}>Starting in 2020</TextAnimation>
        <ImageSection />
      </div>
      <motion.div
        transition={{ ease: "easeOut" }}
        whileInView={"onscreen"}
        viewport={{ once: true }}
        style={{
          translateX: moveText,
          transition: "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
        }}
        className="w-[80%] col-span-4 md:mt-[-35%] mt-[-100%] flex flex-col"
      >
        <span className="md:text-[2vw] text-lg">
          Hi, I am Yamani, a frontend developer, I have more than a year of work
          experience and I love coding and art
        </span>
        <span className="md:text-[2vw] mt-3 text-lg">
          I have expired with frontend framework like React, Typescript, Next
          Js, and have little expired in backend with laravel
        </span>
      </motion.div>
    </div>
  );
};

const SectionFive = () => {
  return (
    <div className="mt-40 pb-10">
      <div className="flex justify-center">
        <div>
          <Text
            className={
              bebas_neue.className +
              " uppercase md:tracking-[-10px] text-[10vw] cursor-pointer hover:text-white"
            }
            variant="sigle"
          >
            My
          </Text>
        </div>
        <div className="ml-5">
          <Text
            className={
              bebas_neue.className +
              " uppercase md:tracking-[-10px] text-[10vw] cursor-pointer hover:text-white"
            }
            variant="sigle"
          >
            Project
          </Text>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Link href="https://trello-clone.yamaniyuda.com/">
          <div className="flex overflow-x-auto md:ml-5 my-2 bg-[#383838] w-[18em] h-[23em] shadow hover:shadow-gray-400 cursor-pointer flex-col items-center rounded p-4">
            <Image
              src="assets/github-mark/github-mark-white.svg"
              alt="github-logo"
              width="80"
              height="80"
              className="mt-5"
            ></Image>
            <div className="mt-5 flex flex-col">
              <span className="text-white text-4xl text-center items-center justify-center">
                Trello Cloning
              </span>
              <span className="text-center mt-6">
                Trello adalah aplikasi yang digunakan untuk menage task, dan ini
                adalah mini cloningan dari aplikasi trello
              </span>
            </div>
          </div>
        </Link>
        <Link href="https://github.com/yamani59/flutter_application">
          <div className="flex overflow-x-auto md:ml-5 my-2 bg-[#383838] w-[18em] h-[23em] shadow hover:shadow-gray-400 cursor-pointer flex-col items-center rounded p-4">
            <Image
              src="assets/github-mark/github-mark-white.svg"
              alt="github-logo"
              width="80"
              height="80"
              className="mt-5"
            ></Image>
            <div className="mt-5 flex flex-col">
              <span className="text-white text-4xl text-center items-center justify-center">
                Al Quran Mobile
              </span>
              <span className="text-center mt-6">
                Membuat aplikasi alquran dengan menggunakan framework flutter,
                dan telah dilengkapi play audio di setip ayatnya.
              </span>
            </div>
          </div>
        </Link>
        <Link href="https://app.alshaftour.com/">
          <div className="flex overflow-x-auto md:ml-5 my-2 bg-[#383838] w-[18em] h-[23em] shadow hover:shadow-gray-400 cursor-pointer flex-col items-center rounded p-4">
            <Image
              src="assets/github-mark/github-mark-white.svg"
              alt="github-logo"
              width="80"
              height="80"
              className="mt-5"
            ></Image>
            <div className="mt-5 flex flex-col">
              <span className="text-white text-4xl text-center items-center justify-center">
                Aplikasi Ecommerce
              </span>
              <span className="text-center mt-6">
                Aplikasi web yang menyediakan paket umrah dan haji, paket ini
                adalah project client dan saya berkontribusi sebagai frontend
                dan backend. Aplikasi ini menggunakan vue dan laravel.
              </span>
            </div>
          </div>
        </Link>
        <Link href="https://github.com/yamani59/wa-bot">
          <div className="flex overflow-x-auto md:ml-5 my-2 bg-[#383838] w-[18em] h-[23em] shadow hover:shadow-gray-400 cursor-pointer flex-col items-center rounded p-4">
            <Image
              src="assets/github-mark/github-mark-white.svg"
              alt="github-logo"
              width="80"
              height="80"
              className="mt-5"
            ></Image>
            <div className="mt-5 flex flex-col">
              <span className="text-white text-4xl text-center items-center justify-center">
                WA Bot
              </span>
              <span className="text-center mt-6">
                Project iseng yang menggunakan whatsapp dipadukan dengan chat
                gpt
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const SectionSix = () => {
  return (
    <div className="flex justify-center p-3">
      <div className="grid grid-cols-4 w-[10%]">
        <Link href="https://github.com/yamani59">
          <Image
            src="assets/github-mark/github-mark-white.svg"
            alt="github-iconn"
            width={30}
            height={30}
            className="cursor-pointer"
          ></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/yamani-yuda-989300219/">
          <Image
            src="assets/images/linked.svg"
            alt="github-iconn"
            className="ml-2 cursor-pointer"
            width={50}
            height={50}
          ></Image>
        </Link>
        <Link href="https://www.instagram.com/yamani.yuda/">
          <Image
            src="assets/images/ig.svg"
            className="col-span-2  scale-[2] ml-5 mt-1"
            alt="github-iconn cursor-pointer"
            width="200"
            height="200"
          ></Image>
        </Link>
      </div>
    </div>
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
        <LineAnimeteScroll />
      </section>
      <section>
        <SectionFour />
      </section>
      <section>
        <SectionFive />
      </section>
      <section>
        <SectionSix />
      </section>
    </main>
  );
}
