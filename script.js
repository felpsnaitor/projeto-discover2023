function clickForSwitch() {
  /*Coloca a tag do documento HTML numa variavel, a chamada .documentElement referese a tag <HTML>*/
  const html = document.documentElement

  /*a propriedade TOGGLE faz uma condição parecida com o IF/ELSE . na expressão a seguir o JS vai na tag HTML e verifica se na "class=" )(classList) tem o nome que esta na chamada do .toggle("") que no caso é o "light" se tiver ele tira esse nome e se não contem ele coloca. */
  html.classList.toggle("light")

  /*Colocando o caminho da imagem atravez do SELETOR do CSS para dentro da variavel*/
  const img = document.querySelector("#profile img")

  /*Condição de troca  */
  if (html.classList.contains("light")) {
    /* O SETATTRIBUTE diz qual atributo dentro da tag deve ser trabalhado*/
    img.setAttribute("src", "./src/avatar-light.png")

    img.setAttribute("alt", "Imagem da Logo da Vision Tec no modo claro")
  } else {
    img.setAttribute("src", "./src/avatar.png")
    img.setAttribute("alt", "Imagem da Logo da Vision Tec no modo escuro")
  }
}
