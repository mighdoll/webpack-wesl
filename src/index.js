import wgsl from "../shaders/app.wesl?static";

function component() {
  const element = document.getElementById('code');

  element.innerHTML = wgsl;

  return element;
}

document.body.appendChild(component());
