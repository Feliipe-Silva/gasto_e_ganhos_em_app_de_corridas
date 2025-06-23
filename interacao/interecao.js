//--------------------------
//--------------------------



function calcular() {
  let ap_99pop = document.getElementById('ap_99pop');
  let ap_uber = window.document.getElementById('ap_uber');

  let total_km = window.document.getElementById('total_km');
  let media_de_consumo = window.document.getElementById('media_de_consumo');
  let valor_do_litro = window.document.getElementById('valor_do_litro').value;

  let real_km = window.document.getElementById('real_km');
  let res = window.document.getElementById('res');

  let consumo_diario = window.document.getElementById('consumo_diario');
  let litros_em_R$ = window.document.getElementById('litros_em_R$');

  let total_km_valor = Number(total_km.value); 
  let combustivel = Number(media_de_consumo.value);
  let valor_99pop = Number(ap_99pop.value);
  let valor_uber = Number(ap_uber.value);

  let consumo_em_litros = total_km_valor / combustivel;
  let custo_diario = consumo_em_litros * valor_do_litro;


  let valor_bruto = valor_99pop + valor_uber;
  let valor_liquido = valor_bruto - custo_diario;
  let km_rodados = valor_liquido / total_km_valor;

  res.innerHTML = ` --  Lucro liquído <strong>R$: ${valor_liquido.toFixed(2)}</strong>`;
  real_km.innerHTML = ` --  Seu kilometro saiu à: <strong>R$: ${km_rodados.toFixed(2)}</strong> por km rodados.`;
  litros_em_R$.innerHTML = ` --  Gasto total de combústivel: Aproximadamente <strong>R$: ${custo_diario.toFixed(2)}</strong>`;
  consumo_diario.innerHTML = ` --  Aproximadamente <strong>${consumo_em_litros.toFixed(2)} litros</strong>.`;

  if (km_rodados.toFixed(2) <= Number(1.50)) {
    lucro_ou_perda.innerHTML = ` -- <strong>(ATENÇÃO)</strong> Obteve prejuízo!!!`
    
  } else {
    lucro_ou_perda.innerHTML = ` -- <strong id="parabens">(PARABÉNS)</strong> Obteve lucro!`
  };
};



// Seleciona o elemento HTML onde a data será exibida pelo seu ID
const dataAtualElemento = document.getElementById('data_atual');

function exibirDataAtual() {
  const hoje = new Date();

  // Opções para formatar a data (você pode personalizar isso)
  const opcoes = {
    year: 'numeric',
    month: 'long', // 'numeric', '2-digit', 'long', 'short', 'narrow'
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short' // Exibe o nome da Time Zone (opcional)
  };

  // Formata a data para uma string legível usando as opções
  const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);

  // Atualiza o conteúdo do elemento HTML com a data formatada
  if (dataAtualElemento) { // Verifica se o elemento foi encontrado
    dataAtualElemento.innerHTML = `Data de hoje: ${dataFormatada}`; // Inclui o texto "Data de hoje:"
  };
  return dataFormatada; // Retorna a data formatada (opcional, mas útil)
};

// Chama a função para exibir a data assim que a página carrega
exibirDataAtual();

// Opcional: Atualizar a data em tempo real (a cada segundo, por exemplo)
// setInterval(exibirDataAtual, 1000);