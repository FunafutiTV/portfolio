import { useState, useEffect } from 'react';
import Link from 'next/link'
import cross from "../public/cross.png"

export default function Project({ language }) {
    let [displayPopup, setDisplayPopup] = useState("");
    
    const blocknews = {
            displayName: "Block News",
            description: (language === "fr") ? "Réseau social centré sur les informations qui permet de nombreuses interactions à l'aide de smart contracts déployés sur le mainnet Polygon et de NFT." : "News-focused social network app that includes a number of social interactions with the help of smart contracts deployed on the Polygon mainnet and NFTs.",
            fullDescription: (language === "fr") ? "Block News est un réseau social basé sur l'idée du journalisme décentralisé. C'est une application incluant les interactions principales attendues d'un réseau social tout en utilisant la technologie blockchain, et où la crédibilité est démontrée par des NFT, distribués à l'aide d'un score déterminé par le reste des utilisateurs. L'application est disponible uniquement en anglais." : "Block News is a social network born from the idea of decentralized journalism. It is an application which includes the interactions expected from a social network while using the blockchain technology, where credibility is demonstrated by NFTs, distributed using a score given by the users. The app is only available in English.",
            stack: "JavaScript, Solidity, React, NextJS, Hardhat, ChakraUI, Wagmi, RainbowKit, IPFS, OpenZeppelin Ownable & ERC1155",
            youtube: (language === "fr") ? "https://www.youtube.com/embed/A5MIqlxh0pw?si=Z-buNsnS9OAPjCtI" : "https://www.youtube.com/embed/htg5iiA-JFA?si=6ZandiibjTJru30T",
            vercel: "https://blocknews-seven.vercel.app/",
            github: "https://github.com/FunafutiTV/blocknews"
    }
    const voting = {
            displayName: (language === "fr") ? "Application de vote" : "Voting app",
            description: (language === "fr") ? "Application décentralisée permettant de lancer une session de vote, dans laquelle les utilisateurs autorisés peuvent soumettre des propositions et voter, à l'aide d'un smart contract déployé sur le testnet Sepolia." : "Decentralized application that allows one to start a voting session, in which the whitelisted users can submit proposals and vote, using a smart contract deployed on the Sepolia testnet.",
            fullDescription: (language === "fr") ? "Ceci est une application décentralisée qui permet au propriétaire du smart contract de démarrer une session de vote, dans laquelle les utilisateurs autorisés peuvent soumettre des propositions et voter. L'application est disponible uniquement en anglais." : "This is a decentralized application that allows the smart contract's owner to start a voting session, in which the whitelisted users can submit proposals and vote. The app is only available in English.",
            stack: "JavaScript, Solidity, React, NextJS, Hardhat, ChakraUI, Wagmi, RainbowKit, OpenZeppelin Ownable",
            youtube: (language === "fr") ? "https://www.youtube.com/embed/Qh5GMMYslwk?si=AU_4-idR4KeaVfyZ" : "https://www.youtube.com/embed/Drf6atgNrjY?si=i40hDapSoZVRsAk1",
            vercel: "https://alyra-project3-voting.vercel.app/",
            github: "https://github.com/FunafutiTV/Alyra_Project3-Voting"
    }
    const countrygame = {
            displayName: (language === "fr") ? 'Jeu des "presque pays"' : '"Almost countries" game',
            description: (language === "fr") ? `Site web d'un jeu dans lequel l'objectif est de deviner le "presque pays choisi aléatoirement chaque jour à l'aide d'indices.` : 'Game website where the goal is to guess the "almost country" randomly chosen everyday using hints.',
            fullDescription: (language === "fr") ? `Il s'agit du site d'un jeu dont le but est de deviner le "presque pays" choisi au hasard chaque jour, en utilisant une série d'indices. Le site est disponible en anglais et en français.` : 'This is a game website where the goal is to guess the "almost country" randomly chosen everyday using hints. The website in available in English and French.',
            stack: "JavaScript, React, NextJS, MongoDB",
            youtube: (language === "fr") ? "https://www.youtube.com/embed/zTWWj6xQnj0?si=qoUHGL6vk_i81gcb" : "https://www.youtube.com/embed/1_Bsy-ifqds?si=Bd8boE_BXOjQ-SEE",
            vercel: "https://countrygame.vercel.app/",
            github: "https://github.com/FunafutiTV/countrygame"
    }
    const share = {
            displayName: "Share",
            description: (language === "fr") ? "Plateforme ayant remporté le deuxième prix lors du Hackathon d'Allfeat, permettant aux artistes de partager leurs pistes musicales afin que les utilisateurs puissent les acheter pour les réutiliser dans leur musique, en utilisant smart contracts et NFT." : "Platform which earned the second price during the Allfeat Hackathon, that allows music artists to sell their tracks so users can use them in their music. Smart contracts and NFTs are used to prove the ownership of the tracks.",
            fullDescription: (language === "fr") ? "Share est un projet créé durant le Hackathon d'Allfeat et, bien qu'incomplet, il a obtenu la deuxième place de l'évènement. C'est une plateforme qui permet aux artistes du monde de la musique de partager leurs pistes afin que les utilisateurs puissent les acheter et les utiliser dans leur musique. La technologie blockchain est utilisée pour prouver que les pistes ont bien été achetées par un utilisateur et non volées, en utilisant des NFT." : "Share is a project that was created during the Allfeat Hackathon, and although incomplete, it was rewarded as the second best project of the event. It is a platform that allows music artists to sell their tracks, so users can use them in their music. It uses the blockchain technology to prove that a track was bought by a user and not stolen, using NFTs.",
            stack: "TypeScript, Solidity, React, NextJS, Hardhat, Tailwind CSS, Wagmi, OpenZeppelin ERC1155",
            youtube: (language === "fr") ? "https://www.youtube.com/embed/R_Lych47udE?si=N1HWjBGs5GpDV-0z" : "https://www.youtube.com/embed/4LS8xagVN1Y?si=IQk0EgiSsGulab8b",
            vercel: "https://allfeat-share.vercel.app/",
            github: "https://github.com/FunafutiTV/hackathon_allfeat"
    }
    const clicktest = {
            displayName: (language === "fr") ? "Testeur de clics" : "Click tester",
            description: (language === "fr") ? "Site web qui calcule la vitesse de clic de l'utilisateur et affiche un classement des meilleurs scores." : "Website that calculates the clicking speed of the user and displays a ranking of the high scores.",
            fullDescription: (language === "fr") ? "Ce site web permet de calculer la vitesse de clic de l'utilisateur, et affiche un classement des meilleurs scores. Le site est disponible uniquement en français." : "This is a website that calculates the clicking speed of the user and displays a ranking of the high scores. The website is only available in French.",
            stack: "JavaScript, React, NextJS",
            youtube: (language === "fr") ? "https://www.youtube.com/embed/bX5LOwnjz5w?si=W0g1alDBpugKn5dw" : "https://www.youtube.com/embed/4BFTcT2xszI?si=_LP0T0yZ2KXQ2VyW",
            vercel: "https://clicktest.vercel.app/",
            github: "https://github.com/FunafutiTV/clicktest"
    }

    return (
        <div className="projectsContainer">
            <div className='firstProjectContainer'>
                <div className="project" onClick={() => setDisplayPopup("blocknews")}>
                    <img src={`/blocknews.png`}/>
                    <h2>{blocknews.displayName}</h2>
                    <p>{blocknews.description}</p>
                </div>
            </div>
            <div className='projectContainer'>
                <div className="project" onClick={() => setDisplayPopup("share")}>
                    <img src={`/share.png`}/>
                    <h2>{share.displayName}</h2>
                    <p>{share.description}</p>
                </div>
            </div>
            <div className='projectContainer'>
                <div className="project" onClick={() => setDisplayPopup("countrygame")}>
                    <img src={`/countrygame.png`}/>
                    <h2>{countrygame.displayName}</h2>
                    <p>{countrygame.description}</p>
                </div>
            </div>
            <div className='projectContainer'>
                <div className="project" onClick={() => setDisplayPopup("clicktest")}>
                    <img src={`/clicktest.png`}/>
                    <h2>{clicktest.displayName}</h2>
                    <p>{clicktest.description}</p>
                </div>
            </div>
            <div className='projectContainer'>
                <div className="project" onClick={() => setDisplayPopup("voting")}>
                    <img src={`/voting.png`}/>
                    <h2>{voting.displayName}</h2>
                    <p>{voting.description}</p>
                </div>
            </div>
            <div id="popupContainer" style={{top: (displayPopup === "blocknews") ? "5vh" : "-100vh", opacity: (displayPopup === "blocknews") ? "1" : "0"}}>
                <div className="projectPopup">
                    <div id="closePopup" style={{ backgroundImage: `url(${cross.src})` }} onClick={() => {setDisplayPopup("")}}/>
                    <h1>{blocknews.displayName}</h1>
                    <p>{blocknews.fullDescription}</p>
                    <iframe src={blocknews.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    <p><b>Stack : </b>{blocknews.stack}</p>
                    <p>{(language === "fr") ? <>Vous pouvez voir le code sur <Link href={blocknews.github} target="_blank">Github</Link> et essayer l'application déployée sur <Link href={blocknews.vercel} target="_blank">Vercel</Link></> : <>You can check the code on <Link href={blocknews.github} target="_blank">Github</Link> and try the deployed app on <Link href={blocknews.vercel} target="_blank">Vercel</Link></>}</p>
                </div>
            </div>
            <div id="popupContainer" style={{top: (displayPopup === "share") ? "5vh" : "-100vh", opacity: (displayPopup === "share") ? "1" : "0"}}>
                <div className="projectPopup">
                    <div id="closePopup" style={{ backgroundImage: `url(${cross.src})` }} onClick={() => {setDisplayPopup("")}}/>
                    <h1>{share.displayName}</h1>
                    <p>{share.fullDescription}</p>
                    <iframe src={share.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    <p><b>Stack : </b>{share.stack}</p>
                    <p>{(language === "fr") ? <>Vous pouvez voir le code sur <Link href={share.github} target="_blank">Github</Link> et essayer l'application déployée sur <Link href={share.vercel} target="_blank">Vercel</Link></> : <>You can check the code on <Link href={share.github} target="_blank">Github</Link> and try the deployed app on <Link href={share.vercel} target="_blank">Vercel</Link></>}</p>
                </div>
            </div>
            <div id="popupContainer" style={{top: (displayPopup === "countrygame") ? "5vh" : "-100vh", opacity: (displayPopup === "countrygame") ? "1" : "0"}}>
                <div className="projectPopup">
                    <div id="closePopup" style={{ backgroundImage: `url(${cross.src})` }} onClick={() => {setDisplayPopup("")}}/>
                    <h1>{countrygame.displayName}</h1>
                    <p>{countrygame.fullDescription}</p>
                    <iframe src={countrygame.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    <p><b>Stack : </b>{countrygame.stack}</p>
                    <p>{(language === "fr") ? <>Vous pouvez voir le code sur <Link href={countrygame.github} target="_blank">Github</Link> et essayer l'application déployée sur <Link href={countrygame.vercel} target="_blank">Vercel</Link></> : <>You can check the code on <Link href={countrygame.github} target="_blank">Github</Link> and try the deployed app on <Link href={countrygame.vercel} target="_blank">Vercel</Link></>}</p>
                </div>
            </div>
            <div id="popupContainer" style={{top: (displayPopup === "clicktest") ? "5vh" : "-100vh", opacity: (displayPopup === "clicktest") ? "1" : "0"}}>
                <div className="projectPopup" >
                    <div id="closePopup" style={{ backgroundImage: `url(${cross.src})` }} onClick={() => {setDisplayPopup("")}}/>
                    <h1>{clicktest.displayName}</h1>
                    <p>{clicktest.fullDescription}</p>
                    <iframe src={clicktest.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    <p><b>Stack : </b>{clicktest.stack}</p>
                    <p>{(language === "fr") ? <>Vous pouvez voir le code sur <Link href={clicktest.github} target="_blank">Github</Link> et essayer l'application déployée sur <Link href={clicktest.vercel} target="_blank">Vercel</Link></> : <>You can check the code on <Link href={clicktest.github} target="_blank">Github</Link> and try the deployed app on <Link href={clicktest.vercel} target="_blank">Vercel</Link></>}</p>
                </div>
            </div>
            <div id="popupContainer" style={{top: (displayPopup === "voting") ? "5vh" : "-100vh", opacity: (displayPopup === "voting") ? "1" : "0"}}>
                <div className="projectPopup" >
                    <div id="closePopup" style={{ backgroundImage: `url(${cross.src})` }} onClick={() => {setDisplayPopup("")}}/>
                    <h1>{voting.displayName}</h1>
                    <p>{voting.fullDescription}</p>
                    <iframe src={voting.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    <p><b>Stack : </b>{voting.stack}</p>
                    <p>{(language === "fr") ? <>Vous pouvez voir le code sur <Link href={voting.github} target="_blank">Github</Link> et essayer l'application déployée sur <Link href={voting.vercel} target="_blank">Vercel</Link></> : <>You can check the code on <Link href={voting.github} target="_blank">Github</Link> and try the deployed app on <Link href={voting.vercel} target="_blank">Vercel</Link></>}</p>
                </div>
            </div>
        </div>
    )
}