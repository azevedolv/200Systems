export function generateIndicationCode () {
    let indicationCode = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        indicationCode += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return indicationCode;
}