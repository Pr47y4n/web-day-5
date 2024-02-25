const tabs = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        content.forEach(cntn => {
            cntn.classList.remove('active');
        })
    
    const tab_id = tab.getAttribute('data-tab');
    const cont = document.getElementById(tab_id);
    cont.classList.add('active');

    if(!cont.hasAttribute('data-loaded')){
        const inside = getContent(tab_id);
        cont.innerHTML = inside;
        cont.setAttribute('data-loaded', 'true');
    }
    });
});

const tab_data = {
    tab1: 'Content for Tab 1',
    tab2: 'Content for Tab 2',
    tab3: 'Content for Tab 3'
};

function getContent(tabId){
    return tab_data[tabId];
}