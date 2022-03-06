let button = document.querySelector('#button');
let paragraph = document.querySelector('p');
button.addEventListener('click', () => {
        const req = new XMLHttpRequest();
        req.onload = function (event) {
              paragraph.innerText = req.responseText;
        };
        req.open('get', 'ajax_info.html',true);
        req.send();
});
