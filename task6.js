function buildTable(labels, objects, container) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let theadTr = document.createElement('tr');
    for (let i = 0; i < labels.length; i++) {
        let theadTh = document.createElement('th');
        theadTh.innerHTML = labels[i];
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);
    for (j = 0; j < objects.length; j++) {
        let tbodyTr = document.createElement('tr');
        for (k = 0; k < labels.length; k++) {
            let tbodyTd = document.createElement('td');
            tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
            tbodyTr.appendChild(tbodyTd);
        }
        tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);

    container.appendChild(table);
}


let labels3 = ['Age', 'Name', 'Country'];
let objects3 = [
    { name: 'James', age: 10, country: 'United States' },
    { name: 'Rony', age: 31, country: 'United Kingdom' },
    { name: 'Peter', age: 58, country: 'Canada' },
    { name: 'Marks', age: 20, country: 'Spain' }
]

buildTable(labels3, objects3, document.getElementById('c'));
