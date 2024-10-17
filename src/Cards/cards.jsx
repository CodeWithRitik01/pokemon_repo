import { useEffect, useState } from "react"
import styles from "./cards.module.css"
import axios from "axios"

function Cards (){
    const [data, setData] = useState([]);

    const getData = async() =>{
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
            console.log(response)
            const gettingData = response.data.results;
            setData(gettingData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getData()
    }, [])

    return (
        <div className={styles.outterDiv}>
            {data.map((ele, key) =>(
                <div className={styles.card}>
                    <img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/813b6ff4-ca88-42b0-bfb6-85d3f01d6014/width=450/1.jpeg" alt="not found"/>
                    <h1>{ele.name}</h1> 
                </div>
            ))}
        </div>
    )
}

export { Cards }