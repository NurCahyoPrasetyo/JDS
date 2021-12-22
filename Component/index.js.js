import React from "react";
import ModalInput from "./ModalInput";

const ContentIndex = () => {
  return (
    <main className="container text-center">
      <ModalInput />
      <div className="card">
        <h1>Kementrian Sosial (Kemensos) <br />Republik Indonesia</h1>
        <p>Input Data Bantuan Bansos di Era Covid-19</p>
      </div>
    
      <div className="row mt-4">
        <div className="col-6">
          <div className="card">
            <div className="card-body" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
              <h5 className="card-title">Input Data Warga &rarr;</h5>
              <p className="card-text">Memasukan data warga Yang Berhak Menerima Bansos Covid-19.</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body" style={{ cursor: 'pointer' }}>
              <h5 className="card-title">List Data Warga &rarr;</h5>
              <p className="card-text">List Data Warga yang menerima Bantuan Bansos.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContentIndex