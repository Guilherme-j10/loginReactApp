export default function validate(){
    const token = window.localStorage.getItem('Token');
    console.log(token);

    if(token == 'Logado'){
        return true;
    }else{
        return false;
    }
}