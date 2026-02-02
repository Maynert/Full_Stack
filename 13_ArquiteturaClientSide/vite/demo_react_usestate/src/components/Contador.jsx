import { useState } from 'react';

export function Contador() {
    const [contagem, setContagem] = useState(0);
    
    function handleClick() {
        //setContagem(contagem + 1);
        setContagem(contagemAnterior => contagemAnterior + 1); // uma ação 
    }

    /*
    const handleClick = () => {
        setContagem(contagem + 1);
        //setContagem(contagemAnterior => contagemAnterior + 1); // uma ação 
    };
    */
    return (
        <>
            <button onClick={handleClick}>Não Clique Aqui</button>
            <span>Tu realmente clicou {contagem} vezes</span>
        </>
    );
}