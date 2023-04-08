import {
  NavbarSection,
  HeaderTitle,
  LineAnimeteScroll,
  SectionFive,
  SectionFour,
  SectionSix,
} from "./section";
import styles from "./page.module.css";

export const metadata = {
  title: "Yamani. Yuda",
  description: "My portofolio 2023",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: '/favicon.ico',
    other: {
      rel: '/favicon.ico',
      url: '/favicon.ico',
    },
  },
};

export default function Homae() {
  return (
    <main className={styles.main + " px-9 pt-3"}>
      <section>
        <NavbarSection />
      </section>
      <section className="mt-16">
        <HeaderTitle />
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
