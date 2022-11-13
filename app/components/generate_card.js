
const titles = [
    'Placa Mãe',
    'Mouse',
    'Teclado',
    'Monitor',
    'Mouse pad',
    'Gabinete',
    'Processador',
    'Fonte',
    'Place de Video',
    'Cooler',
    'Pasta Térmica',
    'HD',
    'SSD',
    'Placa Mãe',
    'Mouse',
    'Teclado',
    'Monitor',
    'Mouse pad',
    'Gabinete',
    'Processador',
    'Fonte',
    'Place de Video',
    'Cooler',
    'Pasta Térmica',
    'HD',
    'SSD',
]; 
let token_title = 0;

const description = [
    'Placa mãe de qualidade',
    'Mouse 4000 dpi',
    'Teclado semi-mecanico',
    'Monitor 144hz',
    'Suave e grande',
    'Modelo Slim',
    'i9 - 8 Núcleo',
    '350w',
    '3020TI',
    '5000 RPM',
    'Ótima qualidade',
    '1TB',
    '140GB',
    'Placa mãe de qualidade',
    'Mouse 4000 dpi',
    'Teclado semi-mecanico',
    'Monitor 144hz',
    'Suave e grande',
    'Modelo Slim',
    'i9 - 8 Núcleo',
    '350w',
    '3020TI',
    '5000 RPM',
    'Ótima qualidade',
    '1TB',
    '140GB',
];
let token_description = 0;

const prices = [
    '650.00',
    '130.00',
    '350.00',
    '1200.00',
    '60.00',
    '230.00',
    '5.200',
    '450.00',
    '3.500',
    '35.00',
    '25.00',
    '85.50',
    '135.00',
    '650.00',
    '130.00',
    '350.00',
    '1200.00',
    '60.00',
    '230.00',
    '5.200',
    '450.00',
    '3.500',
    '35.00',
    '25.00',
    '85.50',
    '135.00',
];
let token_prices = 0;
// ========== * Generate Card * ==========
loop_card();
// --- * --- Call Function --- * ---
function loop_card() {
    let qtd_item = titles.length;
    for(let i = 0;i < qtd_item; i++) {
        controls();
    };
};

function controls() {
    $(".container_card").append(`
        <div class="card">
            <div class="card-img"></div>
            <div class="card-info">
                <p class="text-title">${titles[token_title]}</p>
                <p class="text-body">${description[token_description]}</p>
            </div>
            <div class="card-footer">
                <span class="text-title">${prices[token_prices]}</span>
                <div onclick="buy(${token_title})" class="card-button">
                    <i class="svg_icon bi bi-cart-fill"></i>
                </div>
            </div>
        </div>
    `);
    token_title++;
    token_description++;
    token_prices++;
};

function search() {
    let token_remove_items = 0;
    var array_item_print = [];
    let search = document.querySelector('#search_name').value;
    if(search) {
        titles.forEach((element, index) => {
            if(element.toLocaleLowerCase() === search.toLocaleLowerCase()) {
                token_remove_items++;
                array_item_print.push(index);
            };
        });
        if(token_remove_items >= 1) {
            $(".container_card").remove("div");

            array_item_print.forEach(element => {
                var object = {
                    token_title: titles[element],
                    token_prices: prices[element],
                    token_description: description[element],
                };
                print_renove(object);
            });
            token_remove_items = 0;
        } else {
            $(".container_cards").remove("div");
        };
    };
};

function print_renove(object) {
    $(".container_card").remove("div");

    $(".container_cards").append(`
        <div class="card">
            <div class="card-img"></div>
            <div class="card-info">
                <p class="text-title">${object.token_title}</p>
                <p class="text-body">${object.token_description}</p>
            </div>
            <div class="card-footer">
                <span class="text-title">${object.token_prices}</span>
                <div onclick="buy(${object.token_title})" class="card-button">
                    <i class="svg_icon bi bi-cart-fill"></i>
                </div>
            </div>
        </div>
    `);
};

function buy(item) {
    alert(`Sua compra do produto "${titles[item]}" está sendo processada!`)
};

document.querySelector('#btn_search').addEventListener('click', () => {
    search();
});
window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        search();
    };
});