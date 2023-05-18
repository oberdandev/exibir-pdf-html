const container = document.querySelector('#container');

(async () => {
    const response = await fetch('http://localhost:3333/mapas', {
        headers : { 
          'Content-Type': 'apliccation/json'
         }
       })
    const body = await response.json();

    body.forEach((key, value) => {

      let html = `
                  <h1 style="color: white;">${key}</h1>
                  <object data="./pdf/${key}" type="application/pdf" width="1200" height="800">
                  <p>Seu navegador não tem um plugin pra PDF</p>
                  </object>`
      

      container.insertAdjacentHTML('beforeend', html);
    })
    

})();