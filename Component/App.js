import React from "react";
import DefaultBtn from "./DefaultBtn";

function App() {
  return (
    <section>
      <div className="container">
        <p>{"<button />"}</p>
        <DefaultBtn>Default</ DefaultBtn>
      </div>
      <div className="container">
        <p>{`<button variant="outline" />`}</p>
        <DefaultBtn variant="outline" disabledShadow="none">Default</ DefaultBtn>
      </div>
      <div className="container">
        <p>{`<button variant="text" />`}</p>
        <DefaultBtn variant="text" disabledShadow="none">Default</ DefaultBtn>
      </div>
      <div className="container">
        <p>{`<button disabledShadow />`}</p>
        <DefaultBtn disabledShadow="none" color="primary" size="lg">Default</ DefaultBtn>
      </div>
      <div className="container">
        <p>{`<button disabled />`}</p>
        <DefaultBtn disabled="yes">Desabled</ DefaultBtn>
      </div>
      <div className="container wrapper">
        <div>
          <p>{`<button startIcon="local_grocery_store" />`}</p>
          <DefaultBtn startIcon="local_grocery_store" color="primary" size="lg" disabledShadow="none">Default</ DefaultBtn>
        </div>
        <div>
          <p>{`<button endIcon="local_grocery_end-icon" />`}</p>
          <DefaultBtn endIcon="local_grocery_store" color="primary" size="lg" disabledShadow="none">Default</ DefaultBtn>
        </div>
      </div>
      <div className="container wrapper">
        <div>
          <p>{`<button sise="sm" />`}</p>
          <DefaultBtn size="sm" color="primary" disabledShadow="none">Default</ DefaultBtn>
        </div>
        <div>
          <p>{`<button sise="md" />`}</p>
          <DefaultBtn size="md" color="primary" disabledShadow="none">Default</ DefaultBtn>
        </div>
        <div>
          <p>{`<button sise="lg"/>`}</p>
          <DefaultBtn size="lg" color="primary">Default</ DefaultBtn>
        </div>
      </div>
      <div className="container wrapper">
        <div>
          <p>{`<button default />`}</p>
          <DefaultBtn color="default">Default</ DefaultBtn>
        </div>
        <div>
          <p>{`<button color="primary"/>`}</p>
          <DefaultBtn color="primary" disabledShadow="none">primary</ DefaultBtn>
        </div>
        <div>
          <p>{`<button color="secondary" />`}</p>
          <DefaultBtn color="secondary" disabledShadow="none">secondary</ DefaultBtn>
        </div>
        <div>
          <p>{`<button color="danger" />`}</p>
          <DefaultBtn color="danger" disabledShadow="none">Danger</ DefaultBtn>
        </div>
      </div>
    </section>
  )
}

export default App;
