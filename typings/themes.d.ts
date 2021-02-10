import 'styled-components';

import { Theme } from '../src/styles/themes';

export type Theme = typeof Theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}