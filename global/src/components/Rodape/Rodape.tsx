import facebook from "@/img/facebook.png"
import instagram from "@/img/instagram.png"
import twitterx from "@/img/twitterx.png"
import Image from "next/image"



export default function Rodape(){
    return(
        <footer>
            <h2>Rodape</h2>
            <div>
                <Image src={instagram} alt="Logo instagram"/>
                <Image src={twitterx} alt="Logo instagram"/>
                <Image src={facebook} alt="Logo instagram"/>
            </div>
        </footer>
    )
}