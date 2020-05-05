import './w3schools.scss';
import IframeRemover from '../common/iframe-remover';

/**
 * It should save last active link
 * It should append button to toggle as read/complete
 *
 */
export default class W3SchoolTracker {
    activeLink = document.querySelectorAll('#sidenav a.active');
    links = document.querySelectorAll('#sidenav a');
    filteredLinks = [];
    excludedLinks = [];

    constructor() {
        console.log('w3-school tracker initialized');
    }

    public track(isRemoveIframe = true) {
        this.links.forEach((link: any) => {
            if (link.href.includes(location.host)) {
                this.filteredLinks.push(link.href);
                this.highlightLink(link);
                this.appendButton(link);
            } else {
                this.excludedLinks.push(link.href);
            }
        });
        if (isRemoveIframe) {
            new IframeRemover().removeIframe();
        }
    }


    // console.log(filteredLinks);
    // console.log(excludedLinks);

    highlightLink(link: any) {
        link.setAttribute('style', 'color: grey');
    }

    appendButton(link) {
        // console.log(link.href)
        link.innerText = `✅ ${link.innerText}`
    }
}