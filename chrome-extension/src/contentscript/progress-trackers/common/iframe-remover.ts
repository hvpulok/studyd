export default class IframeRemover {
    constructor(private attemptIntervalTime = 5000, private attemptTimeout = 25000) { }

    removeIframe() {
        const intervalID = setInterval(() => {
            // console.log('Removing iframe');
            document.querySelectorAll('iframe').forEach(iframe => {
                this._removeRootParent(iframe);
            });
        }, this.attemptIntervalTime);

        setTimeout(() => clearInterval(intervalID), this.attemptTimeout);
    }

    private _removeRootParent(node: HTMLElement) {
        const candidate = node.parentElement;
        if (candidate.childElementCount >= 2) {
            // console.log('found parent')
            // console.log(node)
            node.remove();
        } else {
            this._removeRootParent(candidate)
        }
    }
}
