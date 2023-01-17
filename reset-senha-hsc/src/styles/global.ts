import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
}
     body {
          font-family: 'Noto Sans', sans-serif;
          background:linear-gradient(60deg, rgb(199, 196, 196) 0%, rgb(223, 219, 219) 100%) ;

}
`;