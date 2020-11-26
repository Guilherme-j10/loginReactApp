import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        outline: none;
        text-decoration: none;
        list-style: none;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: normal;
        box-sizing: border-box;
        border: none;
    }

    body{
        height: 100%;
        
        > img{
            max-width: 100%;
        }
    }
`;