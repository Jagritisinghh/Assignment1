import styled from 'styled-components'

export const AppContainer=styled.div`
    display:flex;
    height:100vh;
    padding:20px;
    justify-content:center;
    `
export const ResponSiveContainer=styled.div`
display:flex;
width:95%;
flex-direction:column;

@media screen and (min-width:768px){
    width:80%;

}
`
export const InputAndButtonContainer=styled.div`
display:flex;
justify-content:space-between;`

export const LeaderboardTableContainer = styled.ul`
  padding-left: 0px;
  margin-top:20px;
  list-style-type: none;
  overflow: hidden;
`

export const LeaderboardHeader = styled.li`
  display: flex;
  background-color: #efe5e5;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 50px;
`

export const TableHeadingText = styled.p`
  color: black;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  width: 20%;
  margin: 0px;
  padding-right: 30px;
`
export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`


export const Name = styled(TableHeadingText)`
  width: 10%;
`

export const Size = styled(TableHeadingText)`
  width: 50%;
`

export const LastModified = styled(TableHeadingText)`
width: 15%;`

