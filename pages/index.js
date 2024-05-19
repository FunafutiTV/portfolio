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
        <div className="portfolio main_content">
        <header id="mainTopText">
            <h1>{(language === "fr") ? "Salut, je m'appelle Nathanaël 👋" : "Hi, I'm Nathanaël 👋"}</h1>
            <h2>{(language === "fr") ? "Je suis développeur Web & Blockchain" : "I'm a Web & Blockchain Developer"}</h2>
        </header>
        
        <section className="mainPara">       
                <p className='mainSmallText'>{(language === "fr") ? "Je n'aime pas trop parler de moi-même donc je vais écrire à la troisième personne (mais c'est bien moi qui écrit...)" : "I don't really like talking about myself so I'll write in the third person (but I'm actually the one writing...)"}</p>
        </section>
        
        <section className="mainPara">
            <img className="mainPageImage" src="/me1.png" />
                <p><b>Nathanaël Kubski</b>{(language === "fr") ? " est né dans le sud de la France. Depuis son enfance, il s'est toujours intéressé aux nouvelles technologies et tout ce qui tourne autour des ordinateurs. En 2021, il a découvert le monde des cryptomonnaies. Bien qu'il ait perdu un peu d'argent, il tomba amoureux de la technologie derrière et décida de suivre une carrière comme architecte du Web 3 et de la blockchain." : " was born in Southern France. Even as a child, he has always been interested by new technologies and anything that had to do with computers. In 2021, he started to dive into the universe of cryptocurrencies. While he did lose a bit of money, he fell in love with the technology behind it and decided to pursue a career as an architect of the Web 3 and Blockchain technology."}</p>
        </section>
        
        <section className="mainPara">
                <p className="mainSmallText">{(language === "fr") ? "C'est quand même un peu étrange, je vais revenir à la première personne..." : "It's starting to feel a bit odd, I'll go back to writing in the first person..."}</p>
        </section>
        
        <section className="mainPara">
          <div id="mainJoke">
            <img id="mainJokeFirstImg" className="mainPageImage" src="/me2.png" />
            <p id="mainJokeFirstText">{(language === "fr") ? "Je ne suis pas vraiment ce genre de développeur..." : "I'm not really a developer like this..."}</p>
            <p id="mainJokeSecondText">{(language === "fr") ? "... mais plutôt ce genre là." : "... but more like this."}</p>
            <img id="mainJokeSecondImg" className="mainPageImage" src="/me3.png" />
          </div>
        </section>
        
        <section className="mainPara">
            <div id="mainBottomPara">
              <img className="mainPageImage" id="mainBottomParaImg" src="/me4.png" />
              <p id="mainBottomFirstText">{(language === "fr") ? "Je parle français et anglais, et un petit peu espagnol (mais je m'améliore !)" : "I speak French and English, and a bit of Spanish (but it's improving !)"}</p>
            <p id="mainBottomSecondText">{(language === "fr") ? "J'adore voyager, la course et la randonnée." : "I love traveling, running and hiking."}</p>
            </div>
        </section>
        <a className="cv" href={(language === "fr") ? "cvfr.pdf" : "cven.pdf"} target="_blank">{(language === "fr") ? "Voir mon CV" : "See my resume"}</a>
        </div>
      </div>
    </>
  )
}