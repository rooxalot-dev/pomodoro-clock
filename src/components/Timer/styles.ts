import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 100px;
    padding: 15px 30px;
    background-color: ${props => props.theme.secondary};
    border-radius: 6px;

    ul {
        display:flex;
        justify-content:space-between;
        list-style: none;
        text-align: center;

        li button {
            font-size: 20px;
        }
    }
`;

export const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
    font-size: 70px;
`;

export const ToogleTimer = styled.button`
    display: block;
    margin: 12px auto;
    font-size: 40px;
`;
