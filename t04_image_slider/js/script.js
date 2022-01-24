let sliderdiv = document.createElement('div');

sliderdiv.classList.add('slider');
document.body.append(sliderdiv);
let image = document.createElement('img');
sliderdiv.appendChild(image)
image.setAttribute("src", "assets/images/foto-giulia-gta_02.jpg");
image.classList.add('slider_list')
