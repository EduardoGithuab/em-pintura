function alternar(tipo){
if(tipo==='retoque') massa.checked=false;
else retoque.checked=false;
}

function calcular(){
const interna=Number(internaInput.value)||0;
const externa=Number(externaInput.value)||0;
const areaExtra=Number(areaExtraInput.value)||0;

let total=(interna*25)+(externa*30);
if(retoque.checked||massa.checked) total+=areaExtra*25;

resultado.innerHTML=`
<p>Cliente: ${cliente.value}</p>
<p>Endereço: ${endereco.value}</p>
<p>Prazo: ${prazo.value} dias</p>
<p><strong>Valor fechado: R$ ${total.toFixed(2)}</strong></p>`;
}

const internaInput=document.getElementById('interna');
const externaInput=document.getElementById('externa');
const areaExtraInput=document.getElementById('areaExtra');
const retoque=document.getElementById('retoque');
const massa=document.getElementById('massa');
const resultado=document.getElementById('resultado');
const cliente=document.getElementById('cliente');
const endereco=document.getElementById('endereco');
const prazo=document.getElementById('prazo');
