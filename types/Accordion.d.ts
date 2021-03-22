import * as React from 'react';
import '../../styles/molecules/_accordion.scss';
interface Props {
    accordionContent: {
        title: string;
        content: string;
    }[];
}
export declare class Accordion extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
