import { useState, useEffect } from "react";
import "./ModalCreatePost.css";
import axios from 'axios';
import Select from 'react-select';

export default function ModalCreatePost(props) {

  const userId = JSON.parse(sessionStorage.getItem("user"));

  const [dados, setDados] = useState({
    description: '',
    media: '',
    idTag: [],
    idUser: userId.user.id
  });


  const handleChange = event => {
    const { name, value } = event.target;
    setDados(prevDados => ({
      ...prevDados,
      [name]: value
    }));
  };

  // const handleSubmit = event => {
  //   // evita que o formulário seja enviado de forma padrão, o que faria a página recarregar. 
  //   // Em vez disso, tratamos a submissão manualmente na função handleSubmit.
  //   event.preventDefault();

  //   const selectedValues = selectedOptions.map(option => option.value);
  //   const updatedDados = {
  //   ...dados,
  //   idTag: selectedValues
  //   };

  //   axios.post('http://localhost:3000/createPost', updatedDados)
  //     .then(response => {
  //       console.log('POST realizado com sucesso!');
  //       // Realizar alguma ação após o sucesso do POST
  //     })
  //     .catch(error => {
  //       console.error('Erro ao realizar POST:', error);
  //       // Tratar o erro caso ocorra
  //     });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const selectedValues = selectedOptions.map(option => option.value);
    const updatedDados = {
      ...dados,
      idTag: selectedValues
    };
    axios.post('http://localhost:3000/createPost', updatedDados)
      .then(response => {
        console.log('POST realizado com sucesso!');
        props.onShowCreatePost();  // Move the call here
        // Realizar alguma ação após o sucesso do POST
      })
      .catch(error => {
        console.error('Erro ao realizar POST:', error);
        // Tratar o erro caso ocorra
      });
  };


  const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionsTagPost, setOptionsTagPost] = useState([]);
  // const optionsTagPost = [
  //   { value: 1, label: 'HTML' },
  //   { value: 2, label: 'CSS' },
  //   { value: 3, label: 'JavaScript' },
  //   { value: 4, label: 'Bootstrap' },
  //   { value: 5, label: 'SQL' },
  //   { value: 6, label: 'Java' },
  //   { value: 7, label: 'C#' },
  //   { value: 8, label: 'Python' },
  //   { value: 9, label: 'Node.js' },
  //   { value: 10, label: 'MongoDB' },
  //   { value: 11, label: 'React' },
  // ];
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllTags');
        const options = response.data.map((option) => ({
          value: option.id,
          label: option.name,
        }));
        setOptionsTagPost(options);
      } catch (error) {
        console.error('Erro ao obter opções:', error);
      }
    };
    fetchOptions();
  }, []);
  const handleChangeTag = (selected) => {
    setSelectedOptions(selected);
  }

  return (
    <div className="modal-create-post">
      <div onClick={props.toggleModal} className="overlay-create-post"></div>
      <div className="modal-content-create-post">
        <div className="modal-header-create-post">
          <h2 className="button-create-post">Create Post</h2>
        </div>
        <div className="line-create-post"></div>
        <form
          onSubmit={handleSubmit}
          className="form-create-post">
          <fieldset>
            <div className="details-create-post">
              <div>
                {/* <label className="label-post" for="description-post">Description:
                  <input className="description-create-post" name="description-post" rows="4" cols="2" value={formData.description} onChange={handleInputChange}></input>
                </label> */}
                <label className="label-post" for="description">Description:
                  <input
                    className="description-create-post"
                    type="text"
                    rows="4" cols="2" name="description" value={dados.description} onChange={handleChange}></input>
                </label>
              </div>
              <div>
                {/* <label className="label-post" for="description-post">What type of file do you want to embed?
                  <input className="description-create-post" name="description-post" rows="4" cols="2" value={formData.description} onChange={handleInputChange}></input>
                </label> */}
              </div>
              <div>
                {/* <label className="input-media-post" for="input-media-post">Enter media url:
                  <input className="description-create-post" name="input-media-post" rows="3" cols="1" value={formData.description} onChange={handleInputChange}></input>
                </label> */}
                <label className="input-media-post" for="media">Enter media url:
                  <input
                    className="description-create-post"
                    name="media" rows="3" cols="1" value={dados.media} onChange={handleChange}></input>
                </label>
              </div>

              <div>
                <label for="idTag">Keywords:</label>
                <Select
                  className="keys-create-post"
                  name={selectedOptions}
                  options={optionsTagPost}
                  isMulti
                  value={selectedOptions}
                  onChange={handleChangeTag}
                ></Select>
              </div>

              {/* 
              <div className="tags-input-container-create-post">
                <input onKeyDown={props.handleKeyDown} type="text" className="tags-input-create-post" placeholder="Type something" />
              </div> */}

              <div className="submit-create-post">
                <button className="submit-btn-create-post" type="submit" onClick={() => props.onShowCreateNav()}>Create Post</button>
              </div>

            </div>
          </fieldset>
        </form>

        <button className="close-modal-create-post" onClick={() => { props.onShowCreatePost(); props.onShowCreateNav() }}>
          <span className="close-modal-text-create-post"> X </span>
        </button>
      </div>
    </div>
  );
}
