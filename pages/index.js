import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import LanguagePicker from 'components/languagepicker.js'
import { useState } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter(); // useRouter is used to keep the language chosen by the user between the different pages (il will appear in the URL)
  let lang = router.query.lang;
  if (!lang) {
    lang = "fr";
  }
  let [language, setLanguage] = useState(lang); // language is set to the language chosen by the user. It is French by default
  return (
    <>
      <Head>
        <title>Nathanael Kubski</title>
        <link rel="icon" href="/nk.png" />
      </Head>
      <div className="main">
        <nav>
          <ul>
            <Link className="li" href={{ pathname:"/competences", query: { lang: language } }}><li>{(language === "fr") ? "Mes compétences" : "My skills"}</li></Link>
            <Link className="li" href={{ pathname:"/projets", query: { lang: language } }}><li>{(language === "fr") ? "Mes projets" : "My projects"}</li></Link>
            <Link className="li" href={{ pathname:"/contact", query: { lang: language } }}><li>{(language === "fr") ? "Me contacter" : "Contact me"}</li></Link>
          </ul>
          <div className="language">
            <LanguagePicker language={language} setLanguage={setLanguage}/>
          </div>
          <Link href={{ pathname:"/", query: { lang: language } }}><img className="nk" src="/nk.png" alt={(language === "fr") ? "Page d'accueil" : "Home page"}/></Link>
        </nav>
        <div className="main_content para">
          <h1>Nathanael Kubski</h1>
          <p>{(language === "fr") ? "Présent dans l’écosystème Web3 depuis 3 ans, j’ai commencé à apprendre le développement web en autodidacte en 2022 pour consolider les bases acquises durant mes études, afin de travailler en tant que développeur blockchain. J’ai récemment suivi une formation en développement blockchain dans une école renommée afin d’atteindre cet objectif." : "Being part of the Web3 ecosystem for 3 years, I started to learn Web Development on my own in 2022 to consolidate the basics I got from my academic studies, in order to eventually work as a Blockchain Developer. I recently took a Blockchain development course in a renowned school in the field, to finally achieve this goal."}</p>
          <a className="cv" href={(language === "fr") ? "cvfr.pdf" : "cven.pdf"} target="_blank">{(language === "fr") ? "Voir mon CV" : "See my CV"}</a>
        </div>
      </div>
    </>
  )
}
