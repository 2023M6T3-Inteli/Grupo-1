import React from "react";
import './GoogleIcon.css'

function GoogleIcon() {
  return (
    <svg className="google"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="#FBC02D"
        d="M13.628 6.276h-.503V6.25H7.5v2.5h3.532A3.748 3.748 0 013.75 7.5 3.75 3.75 0 017.5 3.75c.956 0 1.826.36 2.488.95l1.768-1.768A6.221 6.221 0 007.5 1.25a6.25 6.25 0 106.128 5.026z"
      ></path>
      <path
        fill="#E53935"
        d="M1.97 4.59l2.054 1.507A3.748 3.748 0 017.5 3.75c.956 0 1.826.36 2.488.95l1.768-1.768A6.221 6.221 0 007.5 1.25a6.246 6.246 0 00-5.53 3.34z"
      ></path>
      <path
        fill="#4CAF50"
        d="M7.5 13.75a6.22 6.22 0 004.19-1.623l-1.934-1.636a3.722 3.722 0 01-2.256.759 3.748 3.748 0 01-3.526-2.483l-2.038 1.57A6.245 6.245 0 007.5 13.75z"
      ></path>
      <path
        fill="#1565C0"
        d="M13.628 6.276l-.005-.026H7.5v2.5h3.532a3.762 3.762 0 01-1.277 1.74l1.935 1.637c-.137.125 2.06-1.502 2.06-4.627 0-.42-.043-.828-.122-1.224z"
      ></path>
    </svg>
  );
}

export default GoogleIcon;
