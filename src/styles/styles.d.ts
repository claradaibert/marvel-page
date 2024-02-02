import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background_primary: string;
    background_secondary: string;
    contrast_color: string;
    font_primary: string;
    pallete_white: string;
    pallete_grey: string;
  }
}
