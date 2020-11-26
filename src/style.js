import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #096cbd;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BoxLogin = styled.section`
    border-radius: 2px;
    background-color: #fff;
    height: 80vh;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60vw;
    box-shadow: 0px 0px 25px 1px #1111115d;
`;

export const SideRight = styled.div`
    width: 50%;
    padding: 20px;
`;

export const SideLeft = styled.div`
    width: 50%;
    min-height: 100%;
    background-color: #0981e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    > h1 {
        color: #fff;
        letter-spacing: 2px;
        margin-bottom: 20px; 
        font-weight: bold;
    }

    > small {
        color: #fff;
        margin-bottom: 10px;
    }

    > form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > input[type=text], input[type=password]{
            width: 100%;
            background-color: #fff !important;
            color: #333;
            border-radius: 50px;
            padding: 15px;
            text-align: center;
            margin-bottom: 20px;
            font-size: 1.1em;
        }

        > input[type=submit]{
            width: 100%;
            background-color: #2dcc42;
            color: #fff;
            border-radius: 50px;
            padding: 10px;
            cursor: pointer;
            text-align: center;
            font-weight: bold;
            letter-spacing: 4px;
            margin-bottom: 20px;
            font-size: 1em;
        }
    }
`;