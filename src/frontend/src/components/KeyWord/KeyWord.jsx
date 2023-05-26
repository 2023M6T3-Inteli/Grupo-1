import './KeyWord.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from "react";

function KeyWord({title}) {

    return (
        <div className='key-item'>
            <p>{title}</p>
        </div>
    );
};

export default KeyWord;