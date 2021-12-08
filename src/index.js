// Đây là file JS chính.

import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
 // argument thứ nhất là thành phần muốn thêm vào, argument thứ hai là nơi mà thành phần thứ nhất muốn thêm vào. Lúc này ta dùng DOM để bắt nơi cho thành phần thứ nhất ở.
ReactDOM.render(
<React.StrictMode>
<App />
    
    </React.StrictMode>
, document.getElementById('root'))