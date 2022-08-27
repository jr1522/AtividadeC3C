const a = document.querySelector("#lado1");
const b = document.querySelector("#lado2");
const c = document.querySelector("#lado3");
const cls = document.querySelector("#classificacao");
const btn = document.querySelector("#calcular");


btn.onclick = () => {
    if(a.value == ""){
        a.focus();
    }else if(b.value == ""){
        b.focus();
    }else if(c.value == ""){
        c.focus();
    }else{
        cls.value = tipoTriangulo (a.value, b.value, c.value);
    }
}

const tipoTriangulo = (v1, v2, v3) => { 
    v1 = Number.parseInt(v1);
    v2 = Number.parseInt(v2);
    v3 = Number.parseInt(v3);
        if (v1 < (v2 + v3) && v2 < (v1 + v3) && v3 < (v1 + v2)) {
            if (v1 == v2 && v2 == v3) {
                return "equilátero";
            }
            else if (v1 == v2 || v1 == v3 || v3 == v2) {
                return "isósceles";
            }
        else           
            return "escaleno";
        } 
}
       



  