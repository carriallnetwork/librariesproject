// scroll.js
document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const pageHeight = window.innerHeight;

        pages.forEach((page, index) => {
            const pageOffset = page.offsetTop;

            if (scrollPosition >= pageOffset && scrollPosition < pageOffset + pageHeight) {
                // Add a class to the active page for highlighting
                pages.forEach((page) => page.classList.remove("active"));
                page.classList.add("active");

                // Load content for the current page dynamically
                loadPageContent(page.id, index + 1);
            }
        });
    });
});

function loadPageContent(pageId, pageNumber) {
    const section = document.getElementById(pageId);
    const url = `${pageId}.html`;

    // Fetch the content of the HTML file
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch content for ${pageId}.html: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(content => {
            // Clear existing content and append the new content
            section.innerHTML = content;
            console.log(`Loaded content for Page ${pageNumber}`);
        })
        .catch(error => console.error(`Error loading content for Page ${pageNumber}:`, error));
}




// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".page");

//     // Load content for all pages during the initial page load
//     sections.forEach((section, index) => {
//         loadPageContent(section.id, index + 1);
//     });

//     window.addEventListener("scroll", function () {
//         const scrollPosition = window.scrollY;

//         sections.forEach((section, index) => {
//             const sectionOffset = section.offsetTop;
//             const sectionHeight = section.offsetHeight;

//             if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
//                 // Add a class to the active section for highlighting
//                 sections.forEach((s) => s.classList.remove("active"));
//                 section.classList.add("active");
//             }
//         });
//     });
// });

// function loadPageContent(pageId, pageNumber) {
//     const section = document.getElementById(pageId);
//     const url = `${pageId}.html`;

//     // Fetch the content of the HTML file
//     fetch(url)
//         .then(response => response.text())
//         .then(content => {
//             section.innerHTML = content;
//             console.log(`Loaded content for Page ${pageNumber}`);
//         })
//         .catch(error => console.error(`Error loading content for Page ${pageNumber}:`, error));
// }


