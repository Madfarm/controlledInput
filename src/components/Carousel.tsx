import { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel() {
    const cats = [
        {
            "name": "Dog",
            "img": "http://placekitten.com/200/300"
        },
        {
            "name": "DogMan",
            "img": "http://placekitten.com/300/200"
        },
        {
            "name": "Kitsee",
            "img": "http://placekitten.com/400/300"
        },
        {
            "name": "Json",
            "img": "http://placekitten.com/300/400"
        }
    ];
    
    const [num, setNum] = useState(null);
    const [i, setI] = useState(0);
    const [cat, setCat] = useState(cats[i]);
    let digits = i + 1;

    function genNum(){
        let ehh = "";
        for (let x = 0; x < digits ; x++) {
            ehh += "9";
        }

        console.log(ehh);
        setNum(Math.floor(Math.random()*parseInt(ehh)));
    }

    function handleMove(mvment) {
        if (mvment == "left") {
            
            if (i <= 0) {
                setI(cats.length - 1);
            } else {
                setI(i - 1);
            }

        } else {
            if (i >= cats.length - 1) {
                setI(0);
            } else {
                console.log(i);
                setI(i + 1);
            }

        }
        setCat(cats[i]);
    }

    return (
        <div className='wootdoot'>
            <div className='box' onClick={(e) => handleMove("left")}>⟵</div>
            <div className='boxMid'>
                <h1>{cat.name}</h1>
                <img onClick={genNum} src={cat.img} />
                <p>{num}</p>
            </div>
            <div className='box' onClick={(e) => handleMove("right")}>⟶</div>
        </div>
    )
}