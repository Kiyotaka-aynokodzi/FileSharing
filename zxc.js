const add = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <style>

    html {
      background: black;
      min-height: 100%;
      background-size: cover;
  }

    body {
      font-family: Arial, sans-serif;
    }
    
    h1 {
      color: white;
      display: flex;
      justify-content: center;
}
    
    input[type="file"] {
      margin-left: 20px;
      margin-bottom: 10px;
      padding: 1rem;
      font-size: 18px;
      border: none;
      filter: url("#gooey");
      width: 140px;
    }

    input[type="file"]:file-selector {
      color: white;
  }
    
    button {
      background-color: white;
      color: black;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      margin-right: 10px;
    }
    
    button:hover {
      background-color: #white;
    }
    #bubbledo {
      padding: 1rem;
      font-size: 18px;
      border: none;
      filter: url("#gooey");
      position: relative;
      background-color: #ffffff;
      
      width: 140px;
      position: absolute;
      top: 600px;
      left: 50px;
      
    }

    #bubble {
      padding: 1rem;
      font-size: 18px;
      border: none;
      filter: url("#gooey");
      position: relative;
      background-color: #ffffff;
      
      width: 140px;
      position: absolute;
      top: 400px;
      left: 50px;
    }
  
  #bubble:focus {
      outline: none;
  }
  
  #bubble .bubbles {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
  }
  
  #bubble .bubbles .bubble {
      background-color: rgb(255, 255, 255);
      border-radius: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      z-index: -1;
  }
  
  #bubble .bubbles .bubble:nth-child(1) {
      left: 43px;
      width: 25px;
      height: 25px;
      animation: move-1 3.02s infinite;
      animation-delay: 0.2s;
  }
  
  #bubble .bubbles .bubble:nth-child(2) {
      left: 37px;
      width: 25px;
      height: 25px;
      animation: move-2 3.04s infinite;
      animation-delay: 0.4s;
  }
  
  #bubble .bubbles .bubble:nth-child(3) {
      left: 83px;
      width: 25px;
      height: 25px;
      animation: move-3 3.06s infinite;
      animation-delay: 0.6s;
  }
  
  #bubble .bubbles .bubble:nth-child(4) {
      left: 100px;
      width: 25px;
      height: 25px;
      animation: move-4 3.08s infinite;
      animation-delay: 0.8s;
  }
  
  #bubble .bubbles .bubble:nth-child(5) {
      left: 92px;
      width: 25px;
      height: 25px;
      animation: move-5 3.1s infinite;
      animation-delay: 1s;
  }
  
  #bubble .bubbles .bubble:nth-child(6) {
      left: 44px;
      width: 25px;
      height: 25px;
      animation: move-6 3.12s infinite;
      animation-delay: 1.2s;
  }
  
  #bubble .bubbles .bubble:nth-child(7) {
      left: 45px;
      width: 25px;
      height: 25px;
      animation: move-7 3.14s infinite;
      animation-delay: 1.4s;
  }
  
  #bubble .bubbles .bubble:nth-child(8) {
      left: 21px;
      width: 25px;
      height: 25px;
      animation: move-8 3.16s infinite;
      animation-delay: 1.6s;
  }
  
  #bubble .bubbles .bubble:nth-child(9) {
      left: 34px;
      width: 25px;
      height: 25px;
      animation: move-9 3.18s infinite;
      animation-delay: 1.8s;
  }
  
  #bubble .bubbles .bubble:nth-child(10) {
      left: 13px;
      width: 25px;
      height: 25px;
      animation: move-10 3.2s infinite;
      animation-delay: 2s;
  }
  
  @keyframes move-1 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -105px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  
  @keyframes move-2 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -102px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  
  @keyframes move-3 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -113px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  
  @keyframes move-4 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -119px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  
  @keyframes move-5 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -124px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  
  @keyframes move-6 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -64px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  
  @keyframes move-7 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -116px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  
  @keyframes move-8 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -87px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  
  @keyframes move-9 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -103px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  
  @keyframes move-10 {
      0% {
          transform: translate(0, 0);
      }
  
      99% {
          transform: translate(0, -125px);
      }
  
      100% {
          transform: translate(0, 0);
          opacity: 0;
      }
  }
  

  #bubbledo:focus {
    outline: none;
}

#bubbledo .bubbles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

#bubbledo .bubbles .bubble {
    background-color: rgb(255, 255, 255);
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: -1;
}

#bubbledo .bubbles .bubble:nth-child(1) {
    left: 43px;
    width: 25px;
    height: 25px;
    animation: move-1 3.02s infinite;
    animation-delay: 0.2s;
}

#bubbledo .bubbles .bubble:nth-child(2) {
    left: 37px;
    width: 25px;
    height: 25px;
    animation: move-2 3.04s infinite;
    animation-delay: 0.4s;
}

#bubbledo .bubbles .bubble:nth-child(3) {
    left: 83px;
    width: 25px;
    height: 25px;
    animation: move-3 3.06s infinite;
    animation-delay: 0.6s;
}

#bubbledo .bubbles .bubble:nth-child(4) {
    left: 100px;
    width: 25px;
    height: 25px;
    animation: move-4 3.08s infinite;
    animation-delay: 0.8s;
}

#bubbledo .bubbles .bubble:nth-child(5) {
    left: 92px;
    width: 25px;
    height: 25px;
    animation: move-5 3.1s infinite;
    animation-delay: 1s;
}

#bubbledo .bubbles .bubble:nth-child(6) {
    left: 44px;
    width: 25px;
    height: 25px;
    animation: move-6 3.12s infinite;
    animation-delay: 1.2s;
}

#bubbledo .bubbles .bubble:nth-child(7) {
    left: 45px;
    width: 25px;
    height: 25px;
    animation: move-7 3.14s infinite;
    animation-delay: 1.4s;
}

#bubbledo .bubbles .bubble:nth-child(8) {
    left: 21px;
    width: 25px;
    height: 25px;
    animation: move-8 3.16s infinite;
    animation-delay: 1.6s;
}

#bubbledo .bubbles .bubble:nth-child(9) {
    left: 34px;
    width: 25px;
    height: 25px;
    animation: move-9 3.18s infinite;
    animation-delay: 1.8s;
}

#bubbledo .bubbles .bubble:nth-child(10) {
    left: 13px;
    width: 25px;
    height: 25px;
    animation: move-10 3.2s infinite;
    animation-delay: 2s;
}

@keyframes move-1 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -105px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

@keyframes move-2 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -102px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

@keyframes move-3 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -113px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

@keyframes move-4 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -119px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

@keyframes move-5 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -124px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

@keyframes move-6 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -64px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

@keyframes move-7 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -116px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

@keyframes move-8 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -87px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

@keyframes move-9 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -103px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}

@keyframes move-10 {
    0% {
        transform: translate(0, 0);
    }

    99% {
        transform: translate(0, -125px);
    }

    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
}
  </style>
</head>
<body>
<div class="half-bg"></div>

<h1>Файлообменник</h1>
<input type="file" id="file-input">
<button id="bubble"  onclick="uploadFile()">Загрузить файл
                <span class="bubbles">
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                </span></button>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="highContrastGraphic" />
                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                    </filter>
                </defs>
            </svg>
<button id="bubbledo" onclick="downloadLastUploadedFile()">Скачать последний загруженный файл
<span class="bubbles">
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                </span></button>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="highContrastGraphic" />
                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                    </filter>
                </defs>
            </svg>
</button>

  <script>
  let lastUploadedFile = null;

  async function uploadFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    
    const formData = new FormData();
    formData.append('file', file);
  
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData
    });
  
    if (response.ok) {
      lastUploadedFile = file.name;
      console.log('Файл успешно загружен:', file.name);
    } else {
      console.error('Ошибка загрузки файла:', response.statusText);
    }
  }
  
  function downloadLastUploadedFile() {
    if (lastUploadedFile) {
      const downloadLink = document.createElement('a');
      downloadLink.href = '/download/' + lastUploadedFile;
      downloadLink.download = lastUploadedFile;
      downloadLink.click();
      console.log('Файл успешно скачан:', lastUploadedFile);
    } else {
      console.error('Ошибка: Нет загруженных файлов');
    }
  }
  </script>
</body>
</html>
`
module.exports = add;

