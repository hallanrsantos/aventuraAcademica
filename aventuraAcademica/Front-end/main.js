// document.addEventListener('DOMContentLoaded', function() {
//     // URL do seu back-end
//     const apiUrl = 'http://127.0.0.1:5500/';

//     // Função para buscar dados do back-end
//     function fetchData() {
//         fetch(apiUrl)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Erro ao buscar dados: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 displayData(data);
//             })
//             .catch(error => {
//                 console.error('Erro:', error);
//             });
//     }

//     // Função para exibir dados na interface
//     function displayData(data) {
//         const dataList = document.getElementById('data-list');
//         dataList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

//         data.forEach(item => {
//             const li = document.createElement('li');
//             li.textContent = item.nome;
//             dataList.appendChild(li);
//         });
//     }

//     // Chama a função fetchData quando o DOM estiver carregado
//     fetchData();
// });
