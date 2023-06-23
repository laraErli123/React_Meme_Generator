import React from "react"
import memesData from "./memesData.js"
import './App.css';

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://media.istockphoto.com/id/1339079600/de/foto/gl%C3%BCcklicher-welpe-der-spa%C3%9F-am-strand-hat.jpg?s=612x612&w=0&k=20&c=IOABsbS4P-1GgLZ5d1MNoV35orVL1W57eKmfQTFQljY="
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData) 
    
    React.useEffect(() => {
        fetch("")
    }
    )
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log({url})
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    onChange={handleChange}
                    placeholder="Top text" 
                    className="form--inputs"
                    value={meme.topText}
                    name="topText"
                />
                <input 
                    type="text" 
                    onChange={handleChange}
                    placeholder="Bottom text"
                    className="form--inputs"
                    value={meme.bottomText}
                    name="bottomText"
                />
                <button onClick={getMemeImage} className="form--button"> Get a meme image </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="name--text top">{meme.topText}</h2>
            <h2 className="name--text bottom">{meme.bottomText}</h2>
        </main>
    )
}