import { useState } from 'react';

function home() {
  return ( 
  <div>
  <div>Exemplo Live NFT</div>
      <Contador />
      </div >
  )

}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionaContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionaContador}>Adicionar</button>

    </div>
  )
}
export default home