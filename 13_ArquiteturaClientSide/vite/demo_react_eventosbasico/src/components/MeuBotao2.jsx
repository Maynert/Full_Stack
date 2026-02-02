export function MeuBotao2() {
    function handleClick(event) {
        event.stopPropagation();
        alert(`Apertastes ${event.currentTarget.id}`);
    }
    
    return (
        <button id="Eu sou o botão 2!" onClick={handleClick}>Clique Aqui</button>
    );
}