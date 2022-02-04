const icons = [
    {
        name : 'cat',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'crow',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'dog',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : coloreCasuale(),
    },{
        name : 'dove',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'dragon',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'horse',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'hippo',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'fish',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'carrot',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'apple-alt',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'lemon',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'pepper-hot',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'user-astronaut',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'user-graduate',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'user-ninja',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : coloreCasuale(),
    },
    {
        name : 'user-secret',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : coloreCasuale(),
    }
];

const container = document.getElementById('icons-container');

const selector = document.getElementById('type-filter');

const selectType = document.getElementById('type-filter');

drawIcons(container, icons);

optionElements();

selector.addEventListener('change', function() {

    let selection = this.value;

    if (selection == 'all') {
        drawIcons(container, icons);
    } else {

        let filteredIcons = icons.filter( icon => {
            if (icon.type == selection) {
                return true;
            }
            return false;
        });

        drawIcons(container, filteredIcons);
    }
});










function optionElements() {
    let selectOptions = '<option value="all">All</option>';

let select = [];
icons.forEach(elemento => {

    if (!select.includes(elemento.type)) {
        select.push(elemento.type)
    }
});

for (let i = 0; i < select.length; i++) {
    
    selectOptions += `<option value="${select[i]}">${select[i]}</option>`
    
}

selectType.innerHTML = selectOptions;
}

function drawIcons(container, icons) {

    let content = '';

    icons.forEach(oggetto => {

        content += `<div class="icon">
        <i style="color: ${oggetto.color};" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
        <div class="icon-text">${oggetto.name}</div>
    </div>`;
    });

    container.innerHTML = content;

}

function coloreCasuale() {

    let numeroCodice;
    let codiceColore = '#';
    for (let i = 0; i < 6; i++) {
        let numero = numeroCasuale(1, 15);
        
        if (numero <= 9) {
            numeroCodice = numero
        } else if (numero == 10) {
            numeroCodice = 'a'
        } else if (numero == 11) {
            numeroCodice = 'b'
        } else if (numero == 12) {
            numeroCodice = 'c'
        } else if (numero == 13) {
            numeroCodice = 'd'
        } else if (numero == 14) {
            numeroCodice = 'e'
        } else if (numero == 15) {
            numeroCodice = 'f'
        }
        
        codiceColore += numeroCodice;
    }
    return codiceColore

};


function numeroCasuale(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
};