console.log('tracker initialized');
const activeLink = document.querySelectorAll('#sidenav a.active');
const links = document.querySelectorAll('#sidenav a');
const filteredLinks = [];
const excludedLinks = [];

links.forEach((link) => {
    if (link.href.includes(location.host)) {
        filteredLinks.push(link.href);
        // highlightLink(link);
        appendButton(link);
    } else {
        excludedLinks.push(link.href);
    }
});

// console.log(filteredLinks);
// console.log(excludedLinks);


// function highlightLink(link) {
//     link.setAttribute('style', 'color: grey');
// }

function appendButton(link) {
    console.log(link.href)
    link.innerText = `✅ ${link.innerText}`
}

/**
 * It should save last active link
 * It should append button to toggle as read/complete
 *
 */