import { ReactNode } from 'react';

interface BoxProps {
    children?: ReactNode;
    className?: string;
    flex?: boolean;
    flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
    width?: number | string | 'full' | 'half';
    height?: number | string;
    alignItems?: string
    justifyContent?: string,
    dataAos?: 'fade-up' | 'fade-down' | null,
    rellax?: boolean
}

export default BoxProps;