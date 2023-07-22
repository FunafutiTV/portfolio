import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguagePicker from 'components/languagepicker.js'
import { useState } from 'react'

export default function Contact() {
    const router = useRouter();
    let lang = router.query.lang;
    if (!lang) {
      lang = "fr";
    }
    let [language, setLanguage] = useState(lang);
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
        <div className="main_content">
          <p className="para">{language === "fr" ? "Vous souhaitez me contacter ou obtenir plus d'informations sur moi et mes travaux ? Utilisez les liens ci-dessous. Je répondrai aux messages au plus vite." : "Do you wish to contact me or get more information about me and my work ? Use the links below. I will answer messages as soon as I can."}</p>
          <ul id="contacts">
            <li><img className="icon" src="/github.png"/><a href="https://github.com/FunafutiTV/"><strong>GitHub :</strong> <i>FunafutiTV</i></a></li>
            <li><img className="icon" src="/linkedin.png"/><a href="https://www.linkedin.com/in/nathanael-kubski-a70782284/"><strong>LinkedIn :</strong> <i>Nathanael Kubski</i></a></li>
            <li><img className="icon" src="/mail.png"/><span id="mail"><strong>Mail :</strong></span></li>
          </ul>
        </div>
      </div>
      </>
    )
}