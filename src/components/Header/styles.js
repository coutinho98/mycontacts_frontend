import styled from 'styled-components';

export const Container = styled.header`
    margin-top: 74px;
    display: flex;
    flex-direction: column;
    align-items: center

`;

export const InputSearchContainer = styled.div`
    margin-top: 48px;
    width: 100%;

    input {
        background: '#fff';
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 25px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        outline: 0;
        padding: 0 16px;

        &::placeholder {
            opacity: 0.4;
        }
    }
`;
