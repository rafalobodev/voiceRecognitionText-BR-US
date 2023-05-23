const textarea = document.querySelector("#textarea")//campo de texto
const btnGravar = document.querySelector("#btnGravar")//gravador
const btnParar = document.querySelector("#btnParar")
const btnBaixar = document.querySelector("#btnBaixar")
const btnLimpar = document.querySelector("#btnLimpar")//pegando tudo com querySelector

class speechApi {

  constructor() {

    const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition

    this.speechApi = new SpeechToText()//a speechApi propriedade nova recebe a logica de reconhecimento de voz
    this.output = textarea.output //A saída vai para o campo digitavel
    this.speechApi.continuous = true //passa pra verdadeiro a prorpiedade speechApi
    this.speechApi.lang = "pt-BR" //linguagem br
    
    this.speechApi.onresult = (e) => {
      var resultIndex = e.resultIndex
      var transcript = e.results[resultIndex][0].transcript//Armazena lado a lado de acordo com a array colocando no texto.

      textarea.value += transcript //cada fala vai concatenar com transcript e conectando ao textarea valor transformando em letras.
    }
  }

  start() {//criando as funçoes de ação
    this.speechApi.start()
  }

  stop() {//e parar
    this.speechApi.stop()
  }
}

  var speech = new speechApi()

  btnGravar.addEventListener("click", e => {//Colocando no botão de gravar
    btnGravar.disabled = true //fica desabilitado ao gravar
    btnParar.disabled = false //e volta a ficar habilitado ao parar
    speech.start()//função de gravar
  })

  btnParar.addEventListener("click", () => {//Colocando no botão de parar
    btnGravar.disabled = false
    btnParar.disabled = true
    speech.stop()
  })

  btnBaixar.addEventListener('click', () => {//botão baixar
    var text = textarea.value //pega o texto do textarea
    var filename = "texto.txt" //formato com nome speech.txt

    download(text, filename)//função download pega ambos
  })

  function download(text, filename) {//função de gerar arquivo
    var element = document.createElement('a')//criou um elemento qualquer

    element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text))

    element.setAttribute('download', filename)

    element.style.display = 'none' //css por js

    document.body.appendChild(element)//appendChild() insere um novo nó na estrutura do DOM

    element.click()//gera o click

    document.body.removeChild(element)//removeChild () remove o filho de um elemento.
  }

  btnLimpar.addEventListener("click", () => {//O botão de deletar ele.É habilita o botão de gravar desabilito de parar. O texto é limpado.E o método stop usado
    textarea.value = ""
    btnGravar.disabled = false
    btnParar.disabled = true
    speech.stop()
  })



  const textareai = document.querySelector("#textareai")//campo de texto
const btnGravari = document.querySelector("#btnGravari")//gravador
const btnParari = document.querySelector("#btnParari")
const btnBaixari = document.querySelector("#btnBaixari")
const btnLimpari = document.querySelector("#btnLimpari")//pegando tudo com querySelector

class speechApii {

  constructor() {

    const SpeechToTexti = window.SpeechRecognition || window.webkitSpeechRecognition

    this.speechApii = new SpeechToTexti()//a speechApi propriedade nova recebe a logica de reconhecimento de voz
    this.outputi = textareai.output //A saída vai para o campo digitavel
    this.speechApii.continuous = true //passa pra verdadeiro a prorpiedade speechApi
    this.speechApii.lang = "en-us" //linguagem usa
    
    this.speechApii.onresult = (e) => {
      var resultIndexi = e.resultIndex
      var transcripti = e.results[resultIndexi][0].transcript//Armazena lado a lado de acordo com a array colocando no texto.

      textareai.value += transcripti //cada fala vai concatenar com transcript e conectando ao textarea valor transformando em letras.
    }
  }

  starti() {//criando as funçoes de ação
    this.speechApii.start()//start metodo
  }

  stopi() {//e parar
    this.speechApii.stop()
  }
}

  var speechi = new speechApii()

  btnGravari.addEventListener("click", e => {//Colocando no botão de gravar
    btnGravari.disabled = true //fica desabilitado ao gravar
    btnParari.disabled = false //e volta a ficar habilitado ao parar
    speechi.starti()//função de gravar
  })

  btnParari.addEventListener("click", () => {//Colocando no botão de parar
    btnGravari.disabled = false
    btnParari.disabled = true
    speechi.stopi()
  })

  btnBaixari.addEventListener('click', () => {//botão baixar
    var texti = textareai.value //pega o texto do textarea
    var filenamei = "speechi.txt" //formato com nome speech.txt

    downloadi(texti, filenamei)//função download pega ambos
  })

  function downloadi(texti, filenamei) {//função de gerar arquivo
    var elementi = document.createElement('a')//criou um elemento qualquer

    elementi.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(texti))

    elementi.setAttribute('download', filenamei)

    elementi.style.display = 'none' //css por js

    document.body.appendChild(elementi)//appendChild() insere um novo nó na estrutura do DOM

    elementi.click()//gera o click

    document.body.removeChild(elementi)//removeChild () remove o filho de um elemento.
  }

  btnLimpari.addEventListener("click", () => {//O botão de deletar ele.É habilita o botão de gravar desabilito de parar. O texto é limpado.E o método stop usado
    textareai.value = ""
    btnGravari.disabled = false
    btnParari.disabled = true
    speechi.stopi()
  })