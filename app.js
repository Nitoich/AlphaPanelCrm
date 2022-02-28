
// Прозрачность на меню
const MenuPanels = document.querySelector('div.main-buttons');
MenuPanels.style.setProperty('--mib-background', 'transparent');
MenuPanels.style.setProperty('--mib-item-color', '#fff');

// Прозрачность хедера таблицы с задачами
const TaskTableHeader = document.querySelector('tr.main-grid-row-head');
TaskTableHeader.style.backgroundColor = 'transparent';