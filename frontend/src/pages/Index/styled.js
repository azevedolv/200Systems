import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'




export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export const Body = styled.div`
display: flex;
flex-direction: column;
main{
  flex-grow: 1;
  display:flex;
  flex-direction: row;
  justify-content: center;
}
header{
  display: flex;
  justify-content: center;
  align-items: center;
}
`


export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    overflow: hidden;
    @media screen and (max-device-width : 900px){
        flex-direction: column;
    }
`
export const LeftSide = styled.div`
    height: 100vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 92px 0;
    @media screen and (max-device-width : 900px){
        height: 50vh;
        width: 100vw;
        padding: 72px 0;
    }
`
export const RightSide = styled.div`
height: 100vh;
width: 40vw;
/* border-radius: 5% 0  0 5%/ 50%  0 0 50%; */
background-color: #EFEFEF;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap:1%;
padding-bottom: 10vh;
@media screen and (max-device-width : 900px){
    height: 50vh;
    width: 100vw;
    border-radius:  50% 50% 0   0  / 5% 5% 0    0 ;
}
>p{
    position: absolute;
    bottom: 10vh;
    text-align: center;
    align-self: center;
    padding: 0 1%;
    @media screen and (max-device-width : 900px){
    position: absolute;
    bottom: 4vh;
}
}
`
export const FormDiv = styled.div`
  margin: 50px;
`;