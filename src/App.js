import React from "react";
import CardFront from "./images/bg-card-front.png"

function App() {
  return (
    <section>
      <img src={CardFront}/>
      <div>
        <div>
          <img/>
          <h2>0000 0000 0000 0000</h2>
          <h4>Felicia leire</h4><h4>09/00</h4>
        </div>

        <div>
          <h2>faixa preta</h2>
          <h4>vazio</h4><h4>000</h4>
        </div>
      </div>

      <form>
        <div>
          <label>CARDHOLRDER NAME</label>
          <input type={'text'}/>
        </div>
        <div>
          <label>CARD NUMBER</label>
          <input type={'number'}/>
        </div>

        <section>
          <div>
            <label>EXP.DATE(MM/YY)</label>
            <input type={'date'}/>
            <input type={'date'}/>
          </div>

          <div>
            <label>CVC</label>
            <input type={'number'}/>
          </div>
        </section>

        <div>
          <input type={'submit'}/>
        </div>
      </form>
    </section>
  );
}

export default App;
