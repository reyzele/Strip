const link = document.querySelector(".prototype__link");

link.style.display = "none";

window.onload = function () {
  const phoneDiv = document.querySelector('.prototype__img');
  const proto = document.querySelector('.protoio-embed-prototype');

  proto.style.display = 'none';
  link.style.display = "flex";

  link.addEventListener('click', handler);


  function handler(e) {
    e.preventDefault();

    phoneDiv.style.backgroundImage = 'none';
    phoneDiv.style.width = "100%";
    link.style.display = 'none';
    proto.style.display = 'block';
  }
}
