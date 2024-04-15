function decodeWeatherCode (code, decode) {
    return decode(code)
}
function decode(code) {
    switch (code){
    case "SQ":
        return console.log("шквал"); 

    case "PO":
        return console.log("пыльный вихрь");

    case "FC":
        return console.log("торнадо");

    case "BR":
        return console.log("дымка (видимость от 1 до 9 км)");

    case "HZ":    
        return console.log("мгла (видимость менее 10 км)");

    case "FU":
        return console.log("дым (видимость менее 10 км)");

    case "DS":
        return console.log("пыльная буря (видимость менее 10 км)");

    case "SS":
        return console.log("песчаная буря (видимость менее 10 км)");

    case "sq":
        return console.log("шквал"); 
    
    case "po":
        return console.log("пыльный вихрь");
    
    case "fc":
        return console.log("торнадо");
    
    case "br":
        return console.log("дымка (видимость от 1 до 9 км)");
    
    case "hz":    
        return console.log("мгла (видимость менее 10 км)");
    
    case "fu":
        return console.log("дым (видимость менее 10 км)");
    
    case "ds":
        return console.log("пыльная буря (видимость менее 10 км)");
    
    case "ss":
        return console.log("песчаная буря (видимость менее 10 км)");
    
    default:
        return console.log("Вы ввели неверный код погоды.");
    }
}
decodeWeatherCode("sq",decode)