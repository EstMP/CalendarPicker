declare module JSX {
    type Element = HTMLElement;
    interface IntrinsicElements {
        [name: string]: any;
    }

    var Fragment;

    function createElement(tagName: string, attributes: IntrinsicElements | null, ...children: any[]): any
}
