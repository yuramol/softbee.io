import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
   body {
      &::-webkit-scrollbar {
         background-color: #fff;
         width: 16px; 
      }

      &::-webkit-scrollbar-track {
         background-color: #fff;
      }

      &::-webkit-scrollbar-thumb {
         background-color: ${theme.global.colors.brand};
         border-radius: 16px;
         border: 4px solid #fff;
      }

      &::-webkit-scrollbar-button {
         display:none;
      }
   }
`;
