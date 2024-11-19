import { headers } from "next/headers";
import Menu from "../Menu/Menu";

export default function Cabecalho(){
    return(
        <header>
            <Menu/>
        </header>
    );
}