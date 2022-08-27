const n = document.querySelector("#nota");
const nab = document.querySelector("#notaArrBaixo");
const nac = document.querySelector("#notaArrCima");
const cls = document.querySelector("#classaluno");
const btn = document.querySelector("#calcular");

btn.onclick = () => {
    if(n.value == ""){
        n.focus();
    //}else if(nab.value == ""){
        //nab.focus();
    //}else if(nac.value == ""){
        //nac.focus();   
    }else{
        cls.value = classificacaoAluno (n.value);
    }
}
function classificacaoAluno(nota){
    if (nota < 38){
        return ("Aluno Reprovado, nota:", nota)    
    }
    else if(nota % 5 < 2){
        let notaArrBaixo = (nota % 5) >= 2.5 ? parseInt(nota / 5) * 5 + 5 : parseInt(nota / 5) * 5
        return ("Aluno aprovado, nota:", notaArrBaixo)
    }
    else{
        let notaArrCima = Math.ceil(nota/5)*5;
        return ('Aluno aprovado, nota:', notaArrCima)
    }
}
