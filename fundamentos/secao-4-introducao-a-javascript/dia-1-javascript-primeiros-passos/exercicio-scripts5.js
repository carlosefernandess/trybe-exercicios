// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro. 
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const firstAngle = 120
const secondAngle = 20
const thirdAngle = 40
let triangle = (firstAngle+secondAngle+thirdAngle);

if (triangle===180) {
    console.log(true)
}
    else if (firstAngle < 0 || secondAngle < 0 || thirdAngle < 0) {
        console.log("Erro! Ângulo inválido!")
    }
        else {
            console.log(false)
        }

