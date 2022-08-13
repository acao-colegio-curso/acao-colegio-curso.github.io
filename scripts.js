const html = {
    links: [...document.querySelector(".tab-links").children],
    contents: [...document.querySelector(".tab-content").children],
    openTab: document.querySelector("[data-open]")
}


function TabNavegation() {

    function hideAllTabContent() {
        html.contents.forEach(section => {
            section.style.display = "none";
        })
    }


    function removeAllActiveClass() {
        html.links.forEach(tab => {
            tab.className = tab.className.replace(" active", "");
        })
    }


    function showCurrentTab(id) {
        const tabcontent = document.querySelector("#" + id);
        tabcontent.style.display = "block";
    }


    function selectTab(event) {
        hideAllTabContent();
        removeAllActiveClass();

        const target = event.currentTarget;
        showCurrentTab(target.dataset.id);

        target.className += " active";
    }


    function listenForChange() {
        html.links.forEach(tab => {
            tab.addEventListener("click", selectTab);
        })
    }


    function init() {
        hideAllTabContent();
        listenForChange(); 
        html.openTab.click();
    }
    
    
    return {
        init
    }

}

window.addEventListener("load", () => {
    const tabNavegation = TabNavegation();
    tabNavegation.init();
})


// console.log(html.contents);