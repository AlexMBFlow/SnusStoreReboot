import styled from 'styled-components';

export const ChatContainer = styled.div`
    position: fixed;
    z-index: 5;
    right: 43px;
    bottom: 31px;
    min-width: 7.3rem;
    overflow: auto;
    border-radius: 1rem 1rem 0 0;
    background: #efefef;
    width: 14.3rem;
`

export const ChatBoxHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.7rem;
    background: #5A5EB9;
    color: #FFF;
`

export const ChatBoxBody = styled.div`
    border: 1px solid #ccc;
    height: 23vh;
    overflow-y: scroll;
    color: #FFF;
    
`

export const ChatInputBox = styled.div`
    height: 2rem;
    position: relative;
    z-index 5;
    background: green;
`
export const ChatBackground = styled.div`
    position: absolute;
    z-index: 2;
    width: 99.3%;
    height: 83%;
    background-image: url("https://catherineasquithgallery.com/uploads/posts/2021-02/1613232113_173-p-fon-s-uzorom-sinii-dlya-fotoshopa-255.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(40%);
`

export const MessagesContainer = styled.div`
    position: relative;
    overflow: auto;
    height: 23vh;
    z-index: 5;
    padding: 0.3rem;
`