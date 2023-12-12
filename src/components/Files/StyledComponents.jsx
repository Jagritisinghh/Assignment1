import styled from 'styled-components'


export const FileRowContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #cbd5e164;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 50px;
`

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  padding-right: 24px;
`

export const Text = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
`




export const FolderIcon = styled(TableCell)`
  width: 30%;
`



export const Name = styled(Text)`
  color: #334155;
  margin-left:10px;
`

export const SizeContainer = styled(TableCell)`
  width: 30%;
`

export const Size = styled(Text)``

export const LastModifiedContainer = styled(TableCell)``

export const Modified = styled(Text)``


export const DeleteButton=styled.button`
 background-color:transparent;
 border:none;
 cursor:pointer;`
