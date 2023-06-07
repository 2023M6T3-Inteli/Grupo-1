import React, { useState } from "react";
import "./ModalCreatePost.css";
import axios from 'axios';
import Select from 'react-select';

export default function ModalCreatePost(props) {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    idUser: 1
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/createPost', formData);
      console.log(response.data);
      // Faça algo com a resposta do servidor, se necessário
    } catch (error) {
      console.error(error);
    }
  };

  // para selecionar as tags
  const optionsTagPost = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="modal-create-post">
      <div onClick={props.toggleModal} className="overlay-create-post"></div>
      <div className="modal-content-create-post">
        <div className="modal-header-create-post">
          <h2 className="button-create-post">Create Post</h2>
        </div>
        <div className="line-create-post"></div>
        <form className="form-create-post">
          <fieldset>
            <div className="details-create-post">
              <div>
                <label className="label-post" for="description-post">Description:
                  <input className="description-create-post" name="description-post" rows="4" cols="2" value={formData.description} onChange={handleInputChange}></input>
                </label>
              </div>
              <div>
                {/* <label className="label-post" for="description-post">What type of file do you want to embed?
                  <input className="description-create-post" name="description-post" rows="4" cols="2" value={formData.description} onChange={handleInputChange}></input>
                </label> */}
              </div>
              <div>
                <label className="input-media-post" for="input-media-post">Enter media url:
                  <input className="description-create-post" name="input-media-post" rows="3" cols="1" value={formData.description} onChange={handleInputChange}></input>
                </label>
              </div>
              
              <div>
              <label for="tags-create-post">Keywords:</label>
                <Select 
                className="keys-create-post" 
                options={optionsTagPost}
                isMulti
                value={selectedOptions}
                onChange={handleChange}
                ></Select>
              </div>
              
              {/* 
              <div className="tags-input-container-create-post">
                <input onKeyDown={props.handleKeyDown} type="text" className="tags-input-create-post" placeholder="Type something" />
              </div> */}

              <div className="submit-create-post">
                <button className="submit-btn-create-post" type="submit" onClick={handleSubmit}>Create Post</button>
              </div>

            </div>
          </fieldset>
        </form>

        <button className="close-modal-create-post" onClick={props.toggleModal}>
          <span className="close-modal-text-create-post"> X </span>
        </button>
      </div>
    </div>
  );
}
