export interface Themes {
  light: Light;
  dark: Light;
}
export interface Light {
  colors: Colors;
  lightness: string;
  typography: Typography;
  spacing: Spacing;
  general: General;
  sidebar: Sidebar;
  topbar: Topbar;
  linkHeader: LinkHeader;
  paperHeader: PaperHeader;
}
export interface PaperHeader {
  color: string;
}
export interface LinkHeader {
  active: string;
}
export interface Topbar {
  bgColor: string;
  color: string;
  height: string;
}
export interface Sidebar {
  bgColor: string;
  color: string;
  width: string;
  widthClosed: string;
}
export interface General {
  borderRadius: string;
}
export interface Spacing {
  gutterVertical: string;
  gutterHorizontal: string;
  headerSpacingSmall: string;
  headerSpacingMedium: string;
  headerSpacingLarge: string;
}
export interface Typography {
  fontSizeInitial: string;
  fontSizeBase: string;
  fontSizeLg: string;
  fontSizeSm: string;
  fontSizeLarger: string;
  fontSizeMini: string;
  fontSizeIndex: string;
  fontFamilyBase: string;
  linkColor: string;
  textColor: string;
  fontWeightBold: string;
  fontWeightSemiBold: string;
  fontWeightNormal: string;
  fontWeightThin: string;
  fontWeightBase: string;
  fontSizeHeaderPopup: string;
}
export interface Colors {
  background: string;
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  dark: string;
  inverse: string;
  gray: string;
  light: string;
  default: string;
  primaryLight: string;
  successLight: string;
  infoLight: string;
  warningLight: string;
  dangerLight: string;
  bodyBg: string;
  white: string;
  grayLight: string;
  borderColor: string;
  greenLight: string;
  disabled: string;
  textInfoBg: string;
  textInfoBorder: string;
  lineHeader: string;
}