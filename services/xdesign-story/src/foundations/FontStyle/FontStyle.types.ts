import { SerializedStyles } from '@emotion/react';

export type FontSizeKeyType = 'Large' | 'Medium' | 'Small';

export type TypoGraphyType = 'Display' | 'HeadLine' | 'Title' | 'Label' | 'Body';

export type FontStyleType = Record<TypoGraphyType, Record<FontSizeKeyType, SerializedStyles>>;
