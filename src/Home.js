import { Link } from "react-router-dom";
import validate from './validate';
import App from './App';
import { Redirect } from 'react-router-dom';

export default function Home(){
    
    function Sair(e){
        e.preventDefault();

        localStorage.removeItem('Token');
        window.location.href = window.location.href;
    }

    if(validate() == true){
        return(
            <div>
                Home <br />
                <Link to="/teste">teste</Link>
            
                <button onClick={(e) => Sair(e)} >Sair</button>
            </div>
        );
    }else{
        return <App motive="A sua sessão expirou, faça login novamente" />;
    }
}