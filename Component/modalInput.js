import React from "react";
import Select from 'react-select'

const ModalInput = () => {
  
  const optionsJenisKelamin = [
    { value: 'laki-laki', label: 'laki-laki' },
    { value: 'perempuan', label: 'Perempuan' },
  ]

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Input Data Warga</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-left">
              <form className="row">
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Nama:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">NIK:</label>
                  <input type="number" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Nomer Kartu Keluarga:</label>
                  <input type="number" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Foto KTP:</label>
                  <input type="file" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Foto Kartu Keluarga:</label>
                  <input type="file" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Umur:</label>
                  <input type="number" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Jenis Kelamin:</label>
                  <Select options={optionsJenisKelamin} />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Provinsi:</label>
                  <Select options={optionsJenisKelamin} />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Kab/Kota:</label>
                  <Select options={optionsJenisKelamin} />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Kecamatan:</label>
                  <Select options={optionsJenisKelamin} />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Kelurahan/Desa:</label>
                  <Select options={optionsJenisKelamin} />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="message-text" class="col-form-label">Alamat:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">RT:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">RW:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Penghasilan sebelum pandemi:</label>
                  <input type="number" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3 col-12 col-sm-6">
                  <label for="recipient-name" className="col-form-label">Penghasilan setelah pandemi:</label>
                  <input type="number" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                      <label className="form-check-label" for="disabledFieldsetCheck">
                        Can't check this
                      </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalInput