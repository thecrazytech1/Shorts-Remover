function deleteParent() {
    const targetElement = document.querySelector('ytd-rich-shelf-renderer.style-scope.ytd-rich-section-renderer');

    if (targetElement) {
        const parentElement = targetElement.parentElement;

        if (parentElement) {
            parentElement.remove();
        }
    }
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            deleteParent();
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });

deleteParent();
