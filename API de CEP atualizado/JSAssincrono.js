var inputElement = document.querySelector('#cep')

//Function para pesquisar o cep

function searchUser(){
    axios.get(`https://viacep.com.br/ws/${inputElement.value}/json/`)
.then(res =>{
    document.getElementById('rua').value = res.data.logradouro
    document.getElementById('bairro').value = res.data.bairro
    document.getElementById('cidade').value = res.data.localidade
    document.getElementById('estado').value = res.data.uf
    document.getElementById('codigoPostal').value = res.data.siafi
    document.getElementById('IBGE').value = res.data.ibge
    document.getElementById('DDD').value = res.data.ddd
})
.catch(() => {
    alert(`O cep ${inputElement.value} não existe!`);
})
}