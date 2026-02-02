export function MeuBotao() {
    function handleClick() {
        alert('clicastes no botão!');
    }
    
    return (
        <button id="Eu sou o botão 1" onClick={handleClick}>Clique Aqui</button>
    );
}