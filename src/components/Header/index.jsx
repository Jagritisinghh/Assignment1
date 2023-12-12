import {
    HeaderContainer,
    HeaderElementsContainer,
    Logo,
    NavHeading,

  } from './StyledComponents'
  
  const Header = () => (
    <HeaderContainer>
      <HeaderElementsContainer>
        <Logo
          src="https://www.logolynx.com/images/logolynx/42/42e335218ff0e38d628c60fa62b69b32.png"
          alt="website logo"
        />
        <NavHeading>Evident-storage</NavHeading>
       
        

      </HeaderElementsContainer>
    </HeaderContainer>
  )
  
  export default Header
  








// import { FaLongArrowAltLeft } from "react-icons/fa";
// import {HeaderContainer,WebsiteLogo,NavHead,GobackText,HeaderItems,Item1,Item2,NavElements,HeadingContainer} from "./StyledComponents"
// const Header=()=>(
//     <HeaderContainer>
//     {/* <GobackText> <FaLongArrowAltLeft/> Go back</GobackText> */}
//     <NavElements>

//     <WebsiteLogo src="https://www.logolynx.com/images/logolynx/42/42e335218ff0e38d628c60fa62b69b32.png" alt="website logo"/>
//     <HeadingContainer>
//     <NavHead>evident-storage</NavHead>
//     <HeaderItems>
//         <Item1>
//             first-project
//         </Item1>
//         <Item2>
//             11 GB
//         </Item2>
//         <Item2>
//            1000 Items
//         </Item2>
//     </HeaderItems>
//     </HeadingContainer>
   
//     </NavElements>

    
 
//     </HeaderContainer>
// )

// export default Header