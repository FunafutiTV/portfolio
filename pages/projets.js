import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguagePicker from 'components/languagepicker.js'
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
          <h2 className="main_content_child">{(language === "fr") ? "Mes projets :" : "My projects :"}</h2>
          <div className="item_list bigDeux main_content_child">
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
            <div className="big_item">
              <a target="_blank" href="https://alyra-project3-voting.vercel.app/"><img src="/voting.png"/></a>
              <h3>{(language === "fr") ? 'Application de vote' : 'Voting app'}</h3>
              <p>{(language === "fr") ? 'Application décentralisée permettant au détenteur du smart contract de lancer un vote, dans lequel les utilisateurs autorisés peuvent soumettre des propositions et voter. Frontend créé avec NextJS, Wagmi, ChakraUI et déployé avec Vercel. Backend créé avec Solidity, Hardhat et déployé sur la blockchain de test Sepolia. Réalisé en collaboration avec Thomas Thierry' : 'Decentralized application which allows the smart contract\'s owner to start a voting session, in which the whitelisted users can submit proposals and vote. Frontend created with NextJS, Wagmi, ChakraUI and deployed to Vercel. Backend created with Solidity, HardHat and deployed to the Sepolia testnet. Made in collaboration with Thomas Thierry.'}</p>
            </div>
            <div className="big_item">
              <a target="_blank" href="https://blocknews-seven.vercel.app/"><img src="/blocknews.png"/></a>
              <h3>{(language === "fr") ? 'Réseau social BlockNews' : 'BlockNews social network'}</h3>
              <p>{(language === "fr") ? 'Application décentralisée intégrant les interactions principales d\'un réseau social avec la technologie blockchain. Frontend créé avec NextJS, Wagmi, ChakraUI et déployé avec Vercel. Backend créé avec Solidity, Hardhat et déployé sur la blockchain de test Sepolia.' : 'Decentralized application which allows the main interactions of a social network, using the blockchain technology. Frontend created with NextJS, Wagmi, ChakraUI and deployed to Vercel. Backend created with Solidity, HardHat and deployed to the Sepolia testnet.'}</p>
            </div>
          </div>
          <p className="main_content_child" id="main_content_subtext">{(language === "fr") ? "Ce portfolio fait également parti de mes projets ! Il a été créé avec l'aide de NextJS, et déployé avec Vercel." : "This portfolio is also one of my projects ! It was created with NextJS, and deployed to Vercel."}</p>
        </div>
      </div>
      </>
    )
}