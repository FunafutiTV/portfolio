import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguagePicker from 'components/languagepicker.js'
import { useState } from 'react'

export default function Projets() {
    const router = useRouter();
    const lang = router.query.lang;
    let [language, setLanguage] = lang ? useState(lang) : useState("fr");
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
          <h2>{(language === "fr") ? "Mes projets :" : "My projects :"}</h2>
          <div className="item_list deux">
            <div className="big_item">
              <a target="_blank" href="https://clicktest.vercel.app/"><img src="/clicktest.png"/></a>
              <h3>{(language === "fr") ? "Testeur de clics" : "Click tester"}</h3>
              <p>{(language === "fr") ? "Compteur de clics qui calcule la vitesse des clics et affiche les meilleurs scores dans un classement. Créé avec NextJS avec l'aide d'une base de données MongoDB, et déployé avec Vercel." : "Clicks counter which calculates the click speed and displays a ranking of the high scores. Created with NextJS with the help of a MongoDB database, and deployed to Vercel."}</p>
            </div>
            <div className="big_item">
              <a target="_blank" href="https://countrygame.vercel.app/"><img src="/countrygame.png"/></a>
              <h3>{(language === "fr") ? 'Jeu des "presque pays"' : '"Almost countries" game'}</h3>
              <p>{(language === "fr") ? 'Jeu dont l\'objectif est de trouver chaque jour le nouveau "presque pays" choisi aléatoirement en utilisant des indices. Créé avec NextJS avec l\'aide d\'une base de données MongoDB, et déployé avec Vercel.' : 'Game where the goal is to guess the "almost country" randomly chosen everyday using hints. Created with NextJS with the help of a MongoDB database, and deployed to Vercel.'}</p>
            </div>
          </div>
          <p>{(language === "fr") ? "Ce portfolio fait également parti de mes projets ! Il a été créé avec l'aide de NextJS, et déployé avec Vercel." : "This portfolio is also one of my projects ! It was created with NextJS, and deployed to Vercel."}</p>
        </div>
      </div>
      </>
    )
}