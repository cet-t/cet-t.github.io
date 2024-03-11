console.log('invoice.js');

const invoiceNames = [
    [
        'ブリーダーバーガー',
        'ブリーダーバーガーセット',
        'ビックキングバーガー',
        'ビックキングバーガーセット',
        'コーヒーセット',
        'コーラ(大)',
        'コーラ(小)'
    ],
    [
        'breeder',
        'breederSet',
        'bicking',
        'bickingSet',
        'coffeeSet',
        'cokeL',
        'cokeS'
    ]
];

const invoiceTextArea = document.getElementById('shown');

const invoiceElems = Array.from(invoiceNames[1]).map(name => document.getElementById(name));

const invoiceUnitPrices = [
    20000,  // breeder
    30000,  // breeder set
    35000,  // bicking
    45000,  // bicking set
    10000,  // coffee set
    10000,  // coke l
    5000    // coke s
];

// 値が入力されていたらtrue, 空欄だったらfalse
function inputFlags(baseArr) {
    return Array.from(baseArr).map(elem => elem.value != '');
};

function allof(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            continue;
        }
        return false;
    }
    return true;
}

// https://tech.arms-soft.co.jp/entry/2022/07/27/090000
function copyToClipboard(value) {
    try {
        return navigator.clipboard.writeText(value);
    } catch {
        alert('クリップボードにコピーできませんでした。');
    }
}

function issueInvoiceClicked(event) { 
    if (event.pageX > (document.documentElement.clientWidth / 2)) {
        return;
    }
    invoiceTextArea.value = '';
    const flags = inputFlags(invoiceElems);
    if (allof(flags, false)) {
        alert('数値を入力してください。');
        return;
    } 
    var dstText = '';
    var subTotal = 0;
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && invoiceElems[i].value > 0) {
            const t = invoiceUnitPrices[i] * Number(invoiceElems[i].value);
            subTotal += t;
            dstText += `${invoiceNames[0][i]}: ${t.toLocaleString()}円(${Number(invoiceElems[i].value).toLocaleString()}個*${invoiceUnitPrices[i].toLocaleString()}円)\n`;
        }
    }
    const isSale = saleRatio.value != '' && saleRatio.value > 0;
    const red = subTotal / 100 * saleRatio.value;
    const total = isSale ? subTotal - red : subTotal;
    invoiceTextArea.value = `合計${isSale ? `(割引額: ${red.toLocaleString()})円` : ''}: ${total.toLocaleString()}円\n\n${dstText}`;
    copyToClipboard(total);
};

document.getElementById('calcSumButton').addEventListener('click', event => issueInvoiceClicked(event));

// メニュー[n]のincAmounts[m]がクリックされたらelems[n]の数値にincAmounts[m]を追加する
const suffixes = ['Inc', 'Dec'];
const incAmounts = [1, 5, 20];
const decAmounts = Array.from(incAmounts).reverse().map(n => -n);
console.log(decAmounts);
// TODO 多次元配列の初期化がわかればそっちでやる
var invoiceButtons = [
    [
        [
            document.getElementById(invoiceNames[1][0] + suffixes[0] + '0'), // [0][0][0]
            document.getElementById(invoiceNames[1][1] + suffixes[0] + '0'),
            document.getElementById(invoiceNames[1][2] + suffixes[0] + '0'),
            document.getElementById(invoiceNames[1][3] + suffixes[0] + '0'),
            document.getElementById(invoiceNames[1][4] + suffixes[0] + '0'),
            document.getElementById(invoiceNames[1][5] + suffixes[0] + '0'),
            document.getElementById(invoiceNames[1][6] + suffixes[0] + '0'),
        ],
        [
            document.getElementById(invoiceNames[1][0] + suffixes[0] + '1'),
            document.getElementById(invoiceNames[1][1] + suffixes[0] + '1'),
            document.getElementById(invoiceNames[1][2] + suffixes[0] + '1'),
            document.getElementById(invoiceNames[1][3] + suffixes[0] + '1'),
            document.getElementById(invoiceNames[1][4] + suffixes[0] + '1'),
            document.getElementById(invoiceNames[1][5] + suffixes[0] + '1'),
            document.getElementById(invoiceNames[1][6] + suffixes[0] + '1'),
        ],
        [
            document.getElementById(invoiceNames[1][0] + suffixes[0] + '2'),
            document.getElementById(invoiceNames[1][1] + suffixes[0] + '2'),
            document.getElementById(invoiceNames[1][2] + suffixes[0] + '2'),
            document.getElementById(invoiceNames[1][3] + suffixes[0] + '2'),
            document.getElementById(invoiceNames[1][4] + suffixes[0] + '2'),
            document.getElementById(invoiceNames[1][5] + suffixes[0] + '2'),
            document.getElementById(invoiceNames[1][6] + suffixes[0] + '2'),
        ]
    ],
    [
        [
            document.getElementById(invoiceNames[1][0] + suffixes[1] + '0'),
            document.getElementById(invoiceNames[1][1] + suffixes[1] + '0'),
            document.getElementById(invoiceNames[1][2] + suffixes[1] + '0'),
            document.getElementById(invoiceNames[1][3] + suffixes[1] + '0'),
            document.getElementById(invoiceNames[1][4] + suffixes[1] + '0'),
            document.getElementById(invoiceNames[1][5] + suffixes[1] + '0'),
            document.getElementById(invoiceNames[1][6] + suffixes[1] + '0'),
        ],
        [
            document.getElementById(invoiceNames[1][0] + suffixes[1] + '1'),
            document.getElementById(invoiceNames[1][1] + suffixes[1] + '1'),
            document.getElementById(invoiceNames[1][2] + suffixes[1] + '1'),
            document.getElementById(invoiceNames[1][3] + suffixes[1] + '1'),
            document.getElementById(invoiceNames[1][4] + suffixes[1] + '1'),
            document.getElementById(invoiceNames[1][5] + suffixes[1] + '1'),
            document.getElementById(invoiceNames[1][6] + suffixes[1] + '1'),
        ],
        [
            document.getElementById(invoiceNames[1][0] + suffixes[1] + '2'),
            document.getElementById(invoiceNames[1][1] + suffixes[1] + '2'),
            document.getElementById(invoiceNames[1][2] + suffixes[1] + '2'),
            document.getElementById(invoiceNames[1][3] + suffixes[1] + '2'),
            document.getElementById(invoiceNames[1][4] + suffixes[1] + '2'),
            document.getElementById(invoiceNames[1][5] + suffixes[1] + '2'),
            document.getElementById(invoiceNames[1][6] + suffixes[1] + '2'),
        ]
    ]
];
// console.log(invoiceButtons);

for (let i = 0; i < invoiceButtons[0].length; i++) {
    for (let k = 0; k < invoiceButtons[0][i].length; k++) {
        invoiceButtons[0][i][k].addEventListener('click', () => {
            invoiceElems[k].value = Number(invoiceElems[k].value) + incAmounts[i];
        });
        invoiceButtons[1][i][k].addEventListener('click', () => {
            const value = Number(invoiceElems[k].value) + decAmounts[i];
            invoiceElems[k].value = value < 0 ? 0 : value;
        });
    }
}

document.getElementById('reloadButton').addEventListener('click', () => location.reload());

document.getElementById('main').addEventListener('contextmenu', event => {
    issueInvoiceClicked(event);
    event.preventDefault();
});

const saleRatio = document.getElementById('saleRatio');
const saleRatioButtons = [
    [
        document.getElementById('saleRatio' + suffixes[0] + '0'),
        document.getElementById('saleRatio' + suffixes[0] + '1'),
        document.getElementById('saleRatio' + suffixes[0] + '2'),
    ],
    [
        document.getElementById('saleRatio' + suffixes[1] + '0'),
        document.getElementById('saleRatio' + suffixes[1] + '1'),
        document.getElementById('saleRatio' + suffixes[1] + '2'),
    ]
];

for (let i = 0; i < saleRatioButtons[0].length; i++) {
    saleRatioButtons[0][i].addEventListener('click', () => {
        const value = Number(saleRatio.value) + incAmounts[i];
        saleRatio.value = value < 0 ? 0 : value > 100 ? 100 : value;
    });
    saleRatioButtons[1][i].addEventListener('click', () => {
        const value = Number(saleRatio.value) + decAmounts[i];
        saleRatio.value = value < 0 ? 0 : value;
    });
}