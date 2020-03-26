'use strict';
function exersize1() {
    function checkCode() {
        'use strict';
        let codeLine = prompt('Введите ваш код:');
        eval(codeLine);
    }

    try {
        checkCode();
    } catch (error) {
        alert('Ошибка: ' + error)
    }
}

function exersize2() {
    function filterByType() {
        let args = [...arguments];
        /*
        if (args[0] === 'string') {
            return args.slice(1).filter(function(item){
                return typeof item === 'string';
              });

        } else if (args[0] === 'number') {
            return args.slice(1).filter(function(item){
                return typeof item === 'number';
              });

        } else if (args[0] === 'boolean') {
            return args.slice(1).filter( function(item) {
                return typeof item === 'boolean';
            });

        } else {
            console.log('Неправильно указан нужный тип данных');
        }
        */
        switch (args[0]) {
            case 'number':
                return args.slice(1).filter(item => typeof item === 'number');

            case 'string':
                return args.slice(1).filter(item => typeof item === 'string');

            case 'boolean':
                return args.slice(1).filter(item => typeof item === 'boolean');
                
            case 'bigint':
                return args.slice(1).filter(item => typeof item === 'bigint');

            case 'undefined':
                return args.slice(1).filter(item => typeof item === 'undefined');

            case 'symbol':
                return args.slice(1).filter(item => typeof item === 'symbol');
                
            case 'object':
                return args.slice(1).filter(element => element !== null).filter(item => typeof item === 'object');
            
            case 'null':
                return args.slice(1).filter(element => element === null);
            
            default:
                console.log('Неправильно указан нужный тип данных');
        }
    }

    console.log(filterByType('number', 23, 323, 564, 'dfs', true, false, '1', 1n, undefined, null, Symbol(), {}, undefined, null));
    console.log(filterByType('string', 23, 323, 564, 'dfs', true, false, '1', 1n, undefined, null, Symbol(), {}, undefined, null));
    console.log(filterByType('boolean', 23, 323, 564, 'dfs', true, false, '1', 1n, undefined, null, Symbol(), {}, undefined, null));
    console.log(filterByType('bigint', 23, 323, 564, 'dfs', true, false, '1', 1n, undefined, null, Symbol(), {}, undefined, null));
    console.log(filterByType('undefined', 23, 323, 564, 'dfs', true, false, '1', 1n, undefined, null, Symbol(), {}, undefined, null));
    console.log(filterByType('symbol', 23, 323, 564, 'dfs', true, false, '1', 1n, undefined, null, Symbol(), {}, undefined, null));
    console.log(filterByType('object', 23, 323, 564, 'dfs', true, false, '1', 1n, undefined, null, Symbol(), {}, undefined, null));
    console.log(filterByType('null', 23, 323, 564, 'dfs', true, false, '1', 1n, undefined, null, Symbol(), {}, undefined, null));
}