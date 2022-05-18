let starArr1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let starArr2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function timKiem(inputStar){
    for(i = 0; i < starArr1.length; i++){
        if(inputStar === starArr1[i]){
            return document.write(starArr2[i])
        }else{
            return document.write(`Khong tim thay`)
        }
    }
}
let inputStar = prompt("Nhap sao:");
timKiem(inputStar);
