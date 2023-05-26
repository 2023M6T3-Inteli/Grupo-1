import './KeyWord.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from "react";

function KeyWord(keyContent) {

    return (
        <div className='key-item'>
            <p>{keyContent.title}</p>
        </div>
    );
};

export default KeyWord;