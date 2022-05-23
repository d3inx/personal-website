import Head from "next/head";
import LatestProjects from "../components/LatestProjects";
import PersonalCard from "../components/PersonalCard";
import SkillExperience from "../components/SkillExperience";

export default function Main() {
  return (
    <>
      <Head>
        <title>
          Reza Manouchehri&apos;s personal website | وب سایت شخصی رضا منوچهری
        </title>
        <meta name="author" content="reza manouchehri"></meta>
        <meta name="description" content="وب سایت شخصی رضا منوچهری"></meta>
        <meta
          name="keywords"
          content="reaza manouchehri, رضا منوچهری, وبسایت رضا منوچهری"
        ></meta>
        <meta property="og:title" content="وبسایت شخصی رضا منوچهری" />
        <meta property="og:site_name" content="سایت رضا منوچهری" />
        <meta name="theme-color" content="#fbbf24"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest"></link>
      </Head>
      <div className="w-full flex items-center justify-center">
        <PersonalCard />
      </div>
      <SkillExperience />
      <LatestProjects />
    </>
  );
}
