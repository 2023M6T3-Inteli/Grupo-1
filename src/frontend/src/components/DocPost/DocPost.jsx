import './DocPost.css'

function DocPost(props) {

    //URL CODE
  const handleClick = () => {

    window.open(props.title, '_blank'); // Abre a URL em uma nova aba
    // window.location.href= urlDoc; 
    };

    return (
        <div>
            <button onClick={handleClick}
                            className='doc-item' >
                                go to content
                            </button>
        </div>
    );
};

export default DocPost;