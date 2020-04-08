const convertRomToDec = (data) => {
    data = data.toLowerCase();

    let tokens = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    }

    let result = data.split('')

    let num = 0;
    let tokenAnterior = 0;

    for(let i = 0; i < result.length; i++){
        for(let j in tokens){
            if (j == result[i]) {
                num += (tokenAnterior < tokens[j]) ? tokens[j]-(tokenAnterior*2) : tokens[j];
                tokenAnterior = tokens[j];
                break;
            }
        }
    }

    return num;
}

function convertir() {
    const txtRomano = document.getElementById("txtRomano");
    const numDecimal = document.getElementById("numDecimal");

    numDecimal.value = convertRomToDec(txtRomano.value);
}