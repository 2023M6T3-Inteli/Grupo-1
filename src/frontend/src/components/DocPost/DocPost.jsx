import './DocPost.css'

function DocPost(urlDoc) {

    //URL CODE
  const handleClick = () => {
    window.open(urlDoc, '_blank', 'noopener,noreferrer'); // Abre a URL em uma nova aba
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