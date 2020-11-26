import { Link } from "react-router-dom";
import validate from './validate';
import { Redirect } from 'react-router-dom';
import App from './App';

export default function Teste(){
    
    if(validate() == true){
        return(
            <div>
                Teste
                <Link to="/home">home</Link>
            </div>
        );
    }else{
        return <App motive="A sua sessão expirou, faça login novamente" />;
    }

    
}