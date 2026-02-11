let senhaSistema='@1234';
let faturamento=[];

function login(){
 let s=document.getElementById('senha').value;
 if(s===senhaSistema){
   document.getElementById('login').style.display='none';
   document.getElementById('app').style.display='block';
 } else alert('Senha incorreta');
}

function toggleDark(){
 document.body.classList.toggle('dark');
}

function calcular(){
 let interna=Number(document.getElementById('interna').value)*25;
 let externa=Number(document.getElementById('externa').value)*30;
 let massa=Number(document.getElementById('massa').value)*25;
 let total=interna+externa+massa;

 let pagamento=document.getElementById('pagamento').value;
 if(pagamento==='cartao'){ total*=1.03; }

 document.getElementById('resultado').innerHTML='Valor Final: R$ '+total.toFixed(2);

 faturamento.push({valor:total,data:new Date()});
 gerarRelatorio();

 document.getElementById('qrcode').innerHTML='';
 new QRCode(document.getElementById('qrcode'),{
   text:'https://wa.me/5588920001908',
   width:120,
   height:120
 });
}

function gerarRelatorio(){
 let mesAtual=new Date().getMonth();
 let totalMes=0;
 faturamento.forEach(f=>{
   if(new Date(f.data).getMonth()===mesAtual){
     totalMes+=f.valor;
   }
 });
 document.getElementById('relatorio').innerHTML=
 'Faturamento do mês: R$ '+totalMes.toFixed(2);
}
