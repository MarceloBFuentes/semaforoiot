let clientWeb = null

const clientId = "Esp32" + Math.floor(Math.random() * 900) + 100
clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId)

clientWeb.connect({
    useSSL: true,
    timeout: 5,
    onSuccess: function(){
        alert("conectado com sucesso")
    },
    onFailure: function(){
        alert("A conexão falhou")
    }
})


function ligar_vermelho() {
    //alert("ligando led Vermelho")
    document.getElementById("vermelho").classList.add("vermelho")
    const msg = new Paho.MQTT.Message("")
    msg.destinationName = "senai/led/ligar_vermelho"
    clientWeb.send(msg)
}

function ligar_amarelo() {
    //alert("ligando led Amarelo")
    document.getElementById("amarelo").classList.add("amarelo")
    const msg = new Paho.MQTT.Message("")
    msg.destinationName = "senai/led/ligar_amarelo"
    clientWeb.send(msg)
}

function ligar_verde() {
   // alert("ligando led Verde")
    document.getElementById("verde").classList.add("verde")
    const msg = new Paho.MQTT.Message("")
    msg.destinationName = "senai/led/ligar_verde"
    clientWeb.send(msg)
}

function ligar_automatico() {
    alert("ligando Automatico")

}

function desligar() {
   // alert("Desligar")
    document.getElementById("vermelho").classList.remove("vermelho")
    document.getElementById("amarelo").classList.remove("amarelo")
    document.getElementById("verde").classList.remove("verde")
    const msg = new Paho.MQTT.Message("")
    msg.destinationName = "senai/led/desligartudo"
    clientWeb.send(msg)
}