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
    let i = 0;
    let digits = i + 1;
    const [num, setNum] = useState(null);
    const [cat, setCat] = useState(cats[i]);

    function genNum(){
        let ehh = "";
        for (let x = 0; x < digits ; x++) {
            ehh += "9";
        }



        setNum(Math.floor(Math.random()*parseInt(ehh)));
    }

    return (
        <div className='wootdoot'>
            <div className='box'>⟵</div>
            <div className='boxMid'>
                <h1>{cat.name}</h1>
                <img onClick={genNum} src={cat.img} />
                <p>{num}</p>
            </div>
            <div className='box'>⟶</div>
        </div>
    )
}