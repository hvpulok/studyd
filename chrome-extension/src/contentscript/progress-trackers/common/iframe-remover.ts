export default function removeIframe() {
    console.log('Removing iframes');
    document.querySelectorAll('iframe').forEach(iframe => {
        try {
            removeRootParent(iframe);
        } catch (error) { }
    });
}

function removeRootParent(node: HTMLElement, baseSize?: number, previousNode?: HTMLElement) {
    const currentSize = node && node.clientHeight + node.clientWidth;
    baseSize = baseSize || currentSize;
    // console.log('------------------------------');
    // console.log('checking for iframe parent', node);
    // console.log('baseSize', baseSize);
    // console.log('currentSize', currentSize);
    if (currentSize - baseSize > 200) {
        // console.log('Found parent. Removing it', previousNode);
        previousNode.remove();
    } else {
        removeRootParent(node.parentElement, baseSize, node);
    }
    // console.log('------------------------------');
}


