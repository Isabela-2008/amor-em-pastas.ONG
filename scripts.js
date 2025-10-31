
document.getElementById('cpf')?.addEventListener('input', e => {
    e.target.value = e.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
});
document.getElementById('telefone')?.addEventListener('input', e => {
    e.target.value = e.target.value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
});
document.getElementById('cep')?.addEventListener('input', e => {
    e.target.value = e.target.value.replace(/(\d{5})(\d{3})/, '$1-$2');
});
