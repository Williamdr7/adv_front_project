import "@modern-js/runtime/styled";

import type { ITheme } from "@/styles/theme";

declare module "@modern-js/runtime/styled" {
  export interface DefaultTheme extends ITheme {}
}
