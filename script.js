let tabelaPrecos = JSON.parse(localStorage.getItem('precos')) || {
interno:25, externo:30, retoque:15, massa:25
};

function salvarPrecos(){
localStorage.setItem('precos', JSON.stringify({
interno:Number(pInterno.value),
externo:Number(pExterno.value),
retoque:Number(pRetoque.value),
massa:Number(pMassa.value)
}));
alert('Preços salvos');
}

function controleMassa(t){
if(t==='retoque') massa.checked=false;
else retoque.checked=false;
}

function calcular(){
const interna=Number(document.getElementById('interna').value)||0;
const externa=Number(document.getElementById('externa').value)||0;
const areaMassa=Number(document.getElementById('areaMassa').value)||0;
const desconto=Number(document.getElementById('desconto').value)||0;

let total=interna*tabelaPrecos.interno+externa*tabelaPrecos.externo;
if(document.getElementById('retoque').checked) total+=areaMassa*tabelaPrecos.retoque;
if(document.getElementById('massa').checked) total+=areaMassa*tabelaPrecos.massa;
if(document.getElementById('tipoPintura').value==='premium') total*=1.2;

total-=desconto;

document.getElementById('resultado').innerText='Valor final: R$ '+total.toFixed(2);
}

function salvarCliente(){
const clientes=JSON.parse(localStorage.getItem('clientes'))||[];
clientes.push({nome:clienteNome.value,endereco:clienteEndereco.value,data:new Date().toLocaleString()});
localStorage.setItem('clientes',JSON.stringify(clientes));
listarClientes();
}

function listarClientes(){
const lista=JSON.parse(localStorage.getItem('clientes'))||[];
listaClientes.innerHTML='';
lista.forEach(c=>{
const li=document.createElement('li');
li.textContent=`${c.nome} - ${c.endereco} (${c.data})`;
listaClientes.appendChild(li);
});
}
listarClientes();
