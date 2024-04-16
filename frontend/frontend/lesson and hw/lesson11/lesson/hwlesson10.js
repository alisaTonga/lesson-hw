const getElementByIndex = (array, index)=> array[index]
const res = getElementByIndex(["lime","orange","banana"],1)
console.log(res);
const getWeatherDescribtion = function (code, decode) {
    return decode(code)
}
const decode = function (code) {
    switch (code){
        case "SQ": return "шквал";
        case "PO": return "пыльный вихрь";
        case "FC": return "торнадо";
        case "BR": return "дымка (видимость от 1 до 9 км)";
        case "HZ": return "мгла (видимость менее 10 км)";
        case "FU": return "дым (видимость менее 10 км)";
        case "DS": return "пыльная буря (видимость менее 10 км)";
        case "SS": return "песчаная буря (видимость менее 10 км)";
        default: return "no such code";
    }
}

const result1 = getWeatherDescribtion("BR", decode);
console.log(result1);