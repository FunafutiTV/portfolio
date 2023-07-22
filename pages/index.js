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
          <p>{(language === "fr") ? "Je suis un développeur français en apprentissage. Diplômé d'une licence en Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales, j'ai commencé à me former à la programmation en autodidacte il y a un an, en plus de mes études. Bien que je sois plus à l'aise du côté front-end, je touche également au back-end lorsque c'est nécessaire. Je suis également intéressé par la technologie de la Blockchain et j'aimerais me spécialiser dans celle-ci." : "I'm a French apprentice developper. Holder of a Bachelor's Degree in Mathematics and Computer Science Applied to Human and Social Sciences, I started learning programming on my own, on top of my studies. Even though I feel more at ease with front-end, I can also touch back-end when needed. I'm also interested by the Blockchain technology and I'd like to specialize in it."}</p>
        </div>
      </div>
    </>
  )
}
