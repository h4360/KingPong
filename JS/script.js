fetch('https://sheetdb.io/api/v1/wfxuy0l16ulox')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na API: ' + response.status);
    }
    return response.json()
  })

  .then(data => {
    const lista = document.getElementById('lista');

    /*Filtra as linhas que tenham todas as células preenchidas */
    /*const dadosFiltrados = data.filter(item => 
      item.nome && item.nome.trim() !== '' &&
      item.email && item.email.trim() !== ''
    );*/

    /*Filtra linhas que contenham apenas uma célula preenchida*/
    const dadosFiltrados = data.filter(item =>
      item.nome?.trim() || item.email?.trim()
    );

    dadosFiltrados.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `Nome: ${item.nome} | Email: ${item.email} | Senha: ${item.senha}`;
      lista.appendChild(li);
    });
  })
  /*tratamento caso exista algum erro*/
  .catch(error => {
    let mensagemErro = "Erro ao carregar os dados: " + error;
    console.error(mensagemErro);
    /*Gera um alert com uma mensagem e uma descrição do erro
    alert(mensagemErro + ": " + error.message);*/

    /*Gera um elemento <lista> com mensagem*/
    lista.innerHTML = `<li>${mensagemErro}</li>`;

    /*<div> responsável pela mensagem de Alert*/
    const divErro = document.getElementById('erroBanco');
    divErro.style.display = 'block';
    divErro.textContent = mensagemErro;

    /*Toast*/
    const toast = document.getElementById('toastErro');
    // Mostrar o toast
    toast.textContent = mensagemErro;
    toast.classList.add('show');
    toast.classList.remove('hidden');

    // Desaparecer após 4 segundos
    setTimeout(() => {
      /*toast.classList.remove('show');*/
    }, 4000);
  });