console.log('receipt.js');

const receiptTextArea = document.getElementById('shown1');

const receiptNames = [
    [
        'トマト',
        'チェダーチーズ',
        'レタス',
        'ソース',
        'バンズ',
        '紙ケース(大)',
        '紙ケース(小)',
        '空のグラス(大)',
        '空のグラス(小)',
        'コーヒーの空のグラス',
        '冷凍の肉',
        '冷凍のリング',
        '冷凍のナゲット',
        '冷凍(小)ポテト',
        '冷凍(大)ポテト',
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

const receiptUnitPrices = [200, 500];

const receiptElems = Array.from(receiptNames[1]).map(name => document.getElementById(name));

const receiptIncAmounts = [10, 100, 500];
const receiptDecAmounts = Array.from(receiptIncAmounts).reverse().map(n => -n);

function issueReceiptClicked(event) {
    if (event.pageX <= (document.documentElement.clientWidth / 2)) {
        return;
    }
    receiptTextArea.value = '';
    const flags = inputFlags(receiptElems);
    if (allof(flags, false)) {
        alert('数値を入力してください。');
        return;
    }
    var subTotal = 0;
    var dst = '';
    const es = receiptElems;
    for (let i = 0; i < es.length; i++) {
        if (flags[i] && es[i].value > 0) {
            const price = receiptUnitPrices[i >= (receiptNames[0].length - 1) ? 1 : 0];
            const t = es[i].value * price;
            dst += `${receiptNames[0][i]}: ${t.toLocaleString()}円(${Number(es[i].value).toLocaleString()}個\\*${price.toLocaleString()}円)${(i < es.length - 1) ? '\n' : ''}`;
            subTotal += t;
        }
    }
    const v = `--- 在庫補充 ---\n合計: ${subTotal.toLocaleString()}円\n\n${dst}`;
    receiptTextArea.value = v;
    copyToClipboard(v);
}

document.getElementById('main').addEventListener('contextmenu', event => {
    issueReceiptClicked(event);
    event.preventDefault();
});

// TODO よくわからんくなったからまた今度やる
// buttons[2(+/-)][3(ボタンの数/2)][ボタンの数]
// var receiptButtons = new Array(2).fill(new Array(receiptNames[1].length / 2).fill(new Array(receiptNames[1].length)));
// for (let z = 0; z < receiptButtons.length; z++) {
//     for (let y = 0; y < receiptButtons[z].length; y++) {
//         for (let x = 0; x < receiptButtons[z][y].length; x++) {
//             receiptButtons[z][y][x] = document.getElementById(`${receiptNames[1][x]}${suffixes[z]}${w}`);
//             // console.log(`${z},${y},${x}`);
//         }
//     }
// }
var receiptButtons = [
    [
        [
            document.getElementById(`${receiptNames[1][0]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][1]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][2]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][3]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][4]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][5]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][6]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][7]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][8]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][9]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][10]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][11]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][12]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][13]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][14]}${suffixes[0]}0`),
            document.getElementById(`${receiptNames[1][15]}${suffixes[0]}0`),
        ],
        [
            document.getElementById(`${receiptNames[1][0]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][1]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][2]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][3]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][4]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][5]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][6]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][7]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][8]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][9]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][10]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][11]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][12]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][13]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][14]}${suffixes[0]}1`),
            document.getElementById(`${receiptNames[1][15]}${suffixes[0]}1`),
        ],
        [
            document.getElementById(`${receiptNames[1][0]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][1]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][2]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][3]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][4]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][5]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][6]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][7]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][8]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][9]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][10]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][11]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][12]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][13]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][14]}${suffixes[0]}2`),
            document.getElementById(`${receiptNames[1][15]}${suffixes[0]}2`),
        ]
    ],
    [
        [
            document.getElementById(`${receiptNames[1][0]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][1]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][2]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][3]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][4]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][5]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][6]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][7]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][8]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][9]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][10]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][11]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][12]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][13]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][14]}${suffixes[1]}0`),
            document.getElementById(`${receiptNames[1][15]}${suffixes[1]}0`),
        ],
        [
            document.getElementById(`${receiptNames[1][0]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][1]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][2]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][3]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][4]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][5]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][6]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][7]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][8]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][9]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][10]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][11]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][12]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][13]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][14]}${suffixes[1]}1`),
            document.getElementById(`${receiptNames[1][15]}${suffixes[1]}1`),
        ],
        [
            document.getElementById(`${receiptNames[1][0]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][1]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][2]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][3]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][4]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][5]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][6]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][7]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][8]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][9]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][10]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][11]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][12]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][13]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][14]}${suffixes[1]}2`),
            document.getElementById(`${receiptNames[1][15]}${suffixes[1]}2`),
        ]
    ]
];
// console.log(receiptButtons);

for (let i = 0; i < receiptButtons[1].length; i++) {
    for (let j = 0; j < receiptButtons[1][i].length; j++) {
        receiptButtons[0][i][j].addEventListener('click', () => {
            receiptElems[j].value = Number(receiptElems[j].value) + receiptIncAmounts[i];
        });
        receiptButtons[1][i][j].addEventListener('click', () => {
            console.log(receiptDecAmounts);
            const value = Number(receiptElems[j].value) + receiptDecAmounts[i];
            receiptElems[j].value = value < 0 ? 0 : value;
        });
    }
}