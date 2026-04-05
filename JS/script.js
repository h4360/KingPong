fetch('https://sheetdb.io/api/v1/wfxuy0l16ulox')
      .then(response => response.json())
      .then(data => {
        const lista = document.getElementById('lista');

        data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `Nome: ${item.nome} | Email: ${item.email}`;
          lista.appendChild(li);
        });
      })
      .catch(error => console.error('Erro:', error));