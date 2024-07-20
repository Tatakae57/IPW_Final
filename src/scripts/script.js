function create_images(section_id, images) {
  const seccion = document.getElementById(section_id);
  images.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = image;
    img.className = "img"
    seccion.appendChild(img);
  })
}

window.onload = function() {
  const pelo_imgs = [
    "src/images/hombre1.jpg",
    "src/images/mujer1.png",
    "src/images/niño1.jpeg"
  ];

  const piel_imgs = [
    "src/images/piel1.jpg"
  ];

  const unas_imgs = [
    "src/images/uñas1.jpg",
    "src/images/uñas2.jpg"
  ];

  const dep_imgs = [
    "src/images/depilacion1.jpg",
    "src/images/depilacion2.jpg"
  ];

  create_images("hairimg", pelo_imgs);
  create_images("skinimg", piel_imgs);
  create_images("pedicimgs", unas_imgs);
  create_images("deplimgs", dep_imgs);
};

