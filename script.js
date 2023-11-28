const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');

function uploadFile() {
  const file = fileInput.files[0];
  const formData = new FormData();

  formData.append('file', file);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Добавляем загруженный файл в список
      const listItem = document.createElement('li');
      const downloadLink = document.createElement('a');
      downloadLink.href = `/download/${data.filename}`;
      downloadLink.innerText = data.filename;
      listItem.appendChild(downloadLink);
      fileList.appendChild(listItem);
    }
    else {
      console.log('Ошибка загрузки файла');
    }
  })
  .catch(error => {
    console.log('Произошла ошибка:', error);
  });
}