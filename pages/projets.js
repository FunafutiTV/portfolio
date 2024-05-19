import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguagePicker from 'components/languagepicker.js'
import Projects from 'components/Projects.js'
import { useState } from 'react'

export default function Projets() {
    const router = useRouter(); // useRouter is used to keep the language chosen by the user between the different pages (il will appear in the URL)
    let lang = router.query.lang;
    if (!lang) {
      lang = "fr";
    }
    let [language, setLanguage] = useState(lang); // language is set to the language chosen by the user. It is French by default
    return(
        <>
      <Head>
        <title>{(language === "fr") ? "Mes projets - Nathanael Kubski" : "My projects - Nathanael Kubski"}</title>
        <link rel="icon" href="/nk.png" />
      </Head>
      <div className="main">
        <nav>
          <ul>
            <Link className="li" href={{ pathname:"/competences", query: { lang: language } }}><li>{(language === "fr") ? "Mes compétences" : "My skills"}</li></Link>
            <li className="li current_page">{(language === "fr") ? "Mes projets" : "My projects"}</li>
            <Link className="li" href={{ pathname:"/contact", query: { lang: language } }}><li>{(language === "fr") ? "Me contacter" : "Contact me"}</li></Link>
          </ul>
          <div className="language">
            <LanguagePicker language={language} setLanguage={setLanguage}/>
          </div>
          <Link href={{ pathname:"/", query: { lang: language } }}><img className="nk" src="/nk.png" alt={(language === "fr") ? "Page d'accueil" : "Home page"}/></Link>
        </nav>
        <div className='main_content'>
            <p id="projectsTop"><b>{(language === "fr") ? "Ceci est une liste de mes principaux projets. Vous pouvez cliquer sur chacun d'entre eux pour obtenir plus d'informations." : "This is a list of my main projects. You can click on each of them to get more information."}</b></p>
            <div className="projectsContainer">
                <Projects language={language}/>
            </div>
            <p id="projectsSubtext">{(language === "fr") ? "Ce portfolio fait également parti de mes projets ! Il a été créé à l'aide de NextJS." : "This portfolio is also one of my projects ! It was created with NextJS."}</p>
        </div>
      </div>
      </>
    )
}