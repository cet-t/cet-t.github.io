console.log('receipt.js');

const rTextArea = document.getElementById('shown1');

const rNames = [
    [
        'トマト',
        'チーズ',
        'レタス',
        'ソース',
        'バンズ',
        'ケース大',
        'ケース小',
        'グラス大',
        'グラス小',
        'コーヒーグラス',
        '冷凍肉',
        '冷凍リング',
        '冷凍ナゲット',
        '冷凍小ポテト',
        '冷凍大ポテト',
        'マカロン',
    ],
    [
        'tomato',
        'cheese',
        'letus',
        'sauce',
        'vans',
        'caseL',
        'caseS',
        'glassL',
        'glassS',
        'coffee',
        'meat',
        'ring',
        'nuget',
        'potatoS',
        'potatoL',
        'macaron',
    ]
];

const rUnitPrices = [200, 500];

const rElems = Array.from(rNames[1]).map(name => document.getElementById(name));

const rIncAmounts = [10, 100, 500];
const rDecAmounts = Array.from(rIncAmounts).reverse().map(n => -n);

function issueR(event) {
    if (event.pageX <= (document.documentElement.clientWidth / 2)) {
        return;
    }
    rTextArea.value = '';
    const flags = inputFlags(rElems);
    if (allof(flags, false)) {
        alert('数値を入力してください。');
        return;
    }

    var subTotal = 0;
    var dst = '';
    const es = rElems;
    for (let i = 0; i < es.length; i++) {
        if (flags[i] && es[i].value > 0) {
            const price = rUnitPrices[i >= (rNames[0].length - 1) ? 1 : 0];
            const t = es[i].value * price;
            dst += `${rNames[0][i]}: ${t.toLocaleString()}円(${Number(es[i].value).toLocaleString()}個\\*${price.toLocaleString()}円)${(i < es.length - 1) ? '\n' : ''}`;
            subTotal += t;
        }
    }
    const v = `--- 在庫補充 ---\n合計: ${subTotal.toLocaleString()}円\n\n${dst}`;
    rTextArea.value = v;
    copyToClipboard(v);
}

document.getElementById('main').addEventListener('contextmenu', event => {
    issueR(event);
    event.preventDefault();
});

var rBtns = [];
for (let i = 0; i < 2; i++) {
    rBtns.push([]);
    for (let j = 0; j < 3; j++) {
        rBtns[i].push([]);
        for (let k = 0; k < rNames[0].length; k++) {
            rBtns[i][j].push(
                document.getElementById(`${rNames[1][k]}${suffixes[i]}${j}`)
            );
        }
    }
}
// console.log(receiptButtons);

for (let i = 0; i < rBtns[1].length; i++) {
    for (let j = 0; j < rBtns[1][i].length; j++) {
        rBtns[0][i][j].addEventListener('click', () => {
            rElems[j].value = Number(rElems[j].value) + rIncAmounts[i];
        });
        rBtns[1][i][j].addEventListener('click', () => {
            console.log(rDecAmounts);
            const value = Number(rElems[j].value) + rDecAmounts[i];
            rElems[j].value = value < 0 ? 0 : value;
        });
    }
}