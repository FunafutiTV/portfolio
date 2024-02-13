import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguagePicker from 'components/languagepicker.js'
import { useState } from 'react'

export default function Competences() {
    const router = useRouter(); // useRouter is used to keep the language chosen by the user between the different pages (il will appear in the URL)
    let lang = router.query.lang;
    if (!lang) {
      lang = "fr";
    }
    let [language, setLanguage] = useState(lang); // language is set to the language chosen by the user. It is French by default
    return(
      <>
      <Head>
        <title>{(language === "fr") ? "Mes compétences - Nathanael Kubski" : "My skills - Nathanael Kubski"}</title>
        <link rel="icon" href="/nk.png" />
      </Head>
      <div className="main">
        <nav>
          <ul>
            <li className="li current_page">{(language === "fr") ? "Mes compétences" : "My skills"}</li>
            <Link className="li" href={{ pathname:"/projets", query: { lang: language } }}><li>{(language === "fr") ? "Mes projets" : "My projects"}</li></Link>
            <Link className="li" href={{ pathname:"/contact", query: { lang: language } }}><li>{(language === "fr") ? "Me contacter" : "Contact me"}</li></Link>
          </ul>
          <div className="language">
            <LanguagePicker language={language} setLanguage={setLanguage}/>
          </div>
          <Link href={{ pathname:"/", query: { lang: language } }}><img className="nk" src="/nk.png" alt={(language === "fr") ? "Page d'accueil" : "Home page"}/></Link>
        </nav>
        <div className='main_content'>
          <h2 className="main_content_child">{(language === "fr") ? "Les langages que je parle :" : "Languages I speak :"}</h2>
          <div className="main_content_child item_list trois">
            <div className="item">
              <img src="/html.png"/>
              <h3>HTML</h3>
            </div>
            <div className="item">
              <img src="/css.png"/>
              <h3>CSS</h3>
            </div>
            <div className="item">
              <img src="/js.png"/>
              <h3>JavaScript</h3>
            </div>
            <div className="item">
              <img src="/python.png"/>
              <h3>Python</h3>
            </div>
            <div className="item">
              <img src="/ts.png"/>
              <h3>TypeScript</h3>
            </div>
            <div className="item">
              <img src="/react.png"/>
              <h3>React</h3>
            </div>
            <div className="item">
              
            </div>
            <div className="item">
              <img src="/solidity.png"/>
              <h3>Solidity</h3>
            </div>
          </div>
          <h2 className="main_content_child">{(language === "fr") ? "Les outils que j'utilise :" : "Tools I use :"}</h2>
          <div className="main_content_child item_list trois">
            <div className="item">
              <img src="/github.png"/>
              <h3>GitHub</h3>
            </div>
            <div className="item">
              <img src="/hardhat.png"/>
              <h3>HardHat</h3>
            </div>
            <div className="item">
              <img src="/truffle.png"/>
              <h3>Truffle</h3>
            </div>
            <div className="item">
              <img src="/foundry.png"/>
              <h3>Foundry</h3>
            </div>
            <div className="item">
              <img src="/vercel.png"/>
              <h3>Vercel</h3>
            </div>
            <div className="item">
              <img src="/mongodb.png"/>
              <h3>MongoDB</h3>
            </div>
            <div className="item">
              <img src="/next.png"/>
              <h3>Next.js</h3>
            </div>
            <div className="item">
              <img src="/ipfs.png"/>
              <h3>IPFS</h3>
            </div>
            <div className="item">
              <img src="/wagmi.png"/>
              <h3>Wagmi</h3>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}