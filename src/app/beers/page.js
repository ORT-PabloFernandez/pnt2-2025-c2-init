import {beers} from "../data/mocs";
import BeerList from "./components/BeerList";

export default function BeersPage(){
    // TODO: Llamar a la API: https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Beers.json
    
    return (
        <BeerList beers={beers} />
    )
}

// chequeo de pull requests