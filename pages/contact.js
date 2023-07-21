import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguagePicker from 'components/languagepicker.js'
import { useState } from 'react'

export default function Contact() {
    const router = useRouter();
    const lang = router.query.lang;
    let [language, setLanguage] = lang ? useState(lang) : useState("fr");
    return(
      <>
      <Head>
        <title>{(language === "fr") ? "Me contacter - Nathanael Kubski" : "Contact me - Nathanael Kubski"}</title>
        <link rel="icon" href="/nk.png" />
      </Head>
      <div className="main">
        <nav>
          <ul>
            <Link className="li" href={{ pathname:"/competences", query: { lang: language } }}><li>{(language === "fr") ? "Mes compétences" : "My skills"}</li></Link>
            <Link className="li" href={{ pathname:"/projets", query: { lang: language } }}><li>{(language === "fr") ? "Mes projets" : "My projects"}</li></Link>
            <li className="li current_page">{(language === "fr") ? "Me contacter" : "Contact me"}</li>
          </ul>
          <div className="language">
            <LanguagePicker language={language} setLanguage={setLanguage}/>
          </div>
          <Link href={{ pathname:"/", query: { lang: language } }}><img className="nk" src="/nk.png" alt={(language === "fr") ? "Page d'accueil" : "Home page"}/></Link>
        </nav>
      </div>
      </>
    )
}