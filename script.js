
const senhaCorreta = "@123";
let valorFinal = 0;

function entrar(){
  const senha = document.getElementById("senha").value;
  if(senha === senhaCorreta){
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Senha incorreta");
  }
}

function calcular(){
  const interna = Number(document.getElementById("interna").value) || 0;
  const externa = Number(document.getElementById("externa").value) || 0;
  const pagamento = document.getElementById("pagamento").value;

  const valorInterna = interna * 25;
  const valorExterna = externa * 30;
  const subtotal = valorInterna + valorExterna;

  valorFinal = subtotal;
  if(pagamento === "cartao"){
    valorFinal = subtotal * 1.05;
  }

  document.getElementById("detalhes").innerText =
    `Interna: R$ ${valorInterna.toFixed(2)} | Externa: R$ ${valorExterna.toFixed(2)}`;

  document.getElementById("resultado").innerText =
    "VALOR FINAL: R$ " + valorFinal.toFixed(2);

  gerarQR();
}

function gerarQR(){
  const url = "https://wa.me/5588920001908";
  document.getElementById("qrcode").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(url);
}

function enviarWhatsApp(){
  const cliente = document.getElementById("cliente").value;
  const texto = `Olá ${cliente}, segue orçamento da Em Pintura. Valor total: R$ ${valorFinal.toFixed(2)}.`;
  window.open("https://wa.me/5588920001908?text=" + encodeURIComponent(texto));
}
