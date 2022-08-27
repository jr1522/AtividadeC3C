function bhaskara(a,b,c){
    delta = b**2 -4*a*c;
    console.log(`Δ: ${delta}`);
    if (delta < 0){
        return "Para delta negativo, não existem raízes reais."
    } else{    
        x1 = (-b - Math.sqrt(delta)) / (2 * a);
        x2 = (-b + Math.sqrt(delta)) / (2 * a) ;
        return raizes = [x1, x2];
    }
}