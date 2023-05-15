export function date_format(date,include_year){
    date = new Date(date);
    const day = pad_start(date.getDate().toString(),2);
    const month = pad_start((date.getMonth() + 1).toString(),2);
    
    if(include_year!=false){
        const year = date.getFullYear().toString();
        return `${day}-${month}-${year}`;
    }

    return `${day}-${month}`;

}

export function get_random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export function pad_start(v,length,string){
    if (!String.prototype.padStart) {
        String.prototype.padStart = function padStart(targetLength, padString) {
            targetLength = targetLength >> 0;
            padString = String(padString || ' ');
            if (this.length >= targetLength) {
            return String(this);
            } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return padString.slice(0, targetLength) + String(this);
            }
        };
    }

    if(!string) string='0';

    return (v+"").padStart(length,string);
}

export function financial_format(num){
    const separator = '.';
    let num_string = num.toString();
    let num_parts = num_string.split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return num_parts.join('.');
}

function bna_currency_name_normalize(currency_name) {
    return currency_name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z_]/g, '')
}

export function get_currency_prices(){
    return new Promise((resolve,reject)=>{
        fetch('https://www.bna.com.ar/Cotizador/MonedasHistorico').then((r)=>r.text()).then((data)=>{
            
            let bna_dom = document.createElement('div')
            bna_dom.innerHTML=data;

            let currencies = {};
            let table_rows = bna_dom.querySelector('tbody').querySelectorAll('tr');

            table_rows.forEach((tr)=>{
                let data = tr.querySelectorAll('td');
                let name = bna_currency_name_normalize(data[0].innerText);
                currencies[name] = {
                    label: data[0].innerText,
                    buy_price: parseFloat(data[1].innerText),
                    sell_price: parseFloat(data[2].innerText)
                }
            });
            resolve(currencies);
        }).catch((e)=>reject(e))
    });
}

export function unit_converter(unit,mode,value){
    return {
        to:UNITS[mode][unit].to,
        result:parseFloat(eval(value+UNITS[mode][unit].transform))
    }
}

const UNITS={
    min:{
        'gr':{
            to:'gr',
            transform:'*1',
        },
        'kg':{
            to:'gr',
            transform:'*1000',
        },
        'lt':{
            to:'ml',
            transform:'*1000',
        },
        'ml':{
            to:'ml',
            transform:'*1',
        },
        'un':{
            to:'un',
            transform:'*1'
        }
    },
    max:{
        'gr':{
            to:'kg',
            transform:'/1000',
        },
        'kg':{
            to:'kg',
            transform:'*1',
        },
        'lt':{
            to:'lt',
            transform:'*1',
        },
        'ml':{
            to:'lt',
            transform:'/1000',
        },
        'un':{
            to:'un',
            transform:'*1'
        }
    },
}

