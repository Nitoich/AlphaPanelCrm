
function setTransparentBg(element) {
    element.style.background = 'transparent';
    element.style.backgroundColor = 'transparent';
}

const el = (selector) => { return document.querySelector(selector) }

// Прозрачность на меню
const MenuPanels = document.querySelector('div.main-buttons');
MenuPanels.style.setProperty('--mib-background', 'transparent');
MenuPanels.style.setProperty('--mib-item-color', '#fff');

// Прозрачность хедера таблицы с задачами

setTransparentBg(el('tr.main-grid-row-head'));

setTransparentBg(el('div.tasks-grid-wrapper'));

setTransparentBg(el('table.main-grid-table').children[1]);

setTransparentBg(el('div.main-grid-panel-wrap'));


setTransparentBg(el('div.main-grid-control-panel-wrap'));

const TasksList = document.querySelectorAll('td.main-grid-cell');
TasksList.forEach((Task) => {
    Task.style.background = 'transparent';
});