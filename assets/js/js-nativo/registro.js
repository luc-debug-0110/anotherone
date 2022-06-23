
function checar(e){
    event.preventDefault();

    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const nomeMat = document.getElementById('nomeMat').value;
    const cpf = document.getElementById('cpf').value;
    const telc = document.getElementById('telc').value;
    const telf = document.getElementById('telf').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const senha2 = document.getElementById('senha2').value;

    const regexTelefones = /^\s?(?:\((?:\+))[0-9]{2}(?:\))\d{2,2}\-\d{8,8}$/
    const telcValido = regexTelefones.test(telc);
    const telfValido = regexTelefones.test(telf);

    const regexNomeComp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
    ;
    const nomeCompValido = regexNomeComp.test(nomeCompleto);

    
    ;
    const nomeMatValido = regexNomeComp.test(nomeMat);


    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g;
    const cpfValido = regexCpf.test(cpf);

    const regexLogin = /^[a-zA-Z0-9]{6}$/;
    const loginValido = regexLogin.test(login);

    const regexSenha = /^[a-zA-Z0-9\*\.\+\-]{8}$/
    ;
    const senhaValida = regexSenha.test(senha);

    if(nomeCompValido === true){
        document.getElementById('nomeCompleto').className = "form-control sucesso"
    }else{
        document.getElementById('nomeCompleto').className = "form-control erro"
    }
    if(nomeMatValido === true){
        document.getElementById('nomeMat').className = "form-control sucesso"
    }else{
        document.getElementById('nomeMat').className = "form-control erro"

    }
    if(cpfValido === true){
        document.getElementById('cpf').className = "form-control sucesso"
    }else{
        document.getElementById('cpf').className = "form-control erro"
    }
    if(telcValido == true){
        document.getElementById('telc').className = "form-control sucesso"
    }else{
        document.getElementById('telc').className = "form-control erro"
    }
    if(telfValido == true){
        document.getElementById('telf').className = "form-control sucesso"
    }else{
        document.getElementById('telf').className = "form-control erro"
    }
    if(loginValido == true && senhaValida == true && senha !== null && senha2 !== null && senha2 === senha && telfValido == true && telcValido == true && cpfValido === true && nomeMatValido === true && nomeCompValido === true){

        document.getElementById('login').className = "form-control sucesso"
        document.getElementById('senha').className = "form-control sucesso"
        document.getElementById('senha2').className = "form-control sucesso"
        document.getElementById('telf').className = "form-control sucesso"
        document.getElementById('telc').className = "form-control sucesso"
        document.getElementById('cpf').className = "form-control sucesso"
        document.getElementById('nomeMat').className = "form-control sucesso"
        document.getElementById('nomeCompleto').className = "form-control sucesso"


        


        const login = document.getElementById('login').value;
        const senha = document.getElementById('senha').value;
        const senha2 = document.getElementById('senha2').value;
        

        let usuario = {
            login: login,
            senha: senha,
            senha2: senha2,
        }

        let json = JSON.stringify(usuario);
        localStorage.setItem(login, json);
        console.log('usuário criado com sucesso!');


        window.location.replace("login.html");
    }else{
        document.getElementById('login').className = "form-control erro"
        document.getElementById('senha').className = "form-control erro"
        document.getElementById('senha2').className = "form-control erro"
        /* document.getElementById('telf').className = "form-control erro"
        document.getElementById('telc').className = "form-control erro"
        document.getElementById('cpf').className = "form-control erro"
        document.getElementById('nomeCompleto').className = "form-control erro"
        document.getElementById('nomeMat').className = "form-control erro"
 */


    }


}
/* function registro(e){
    event.preventDefault();

    
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const senha2 = document.getElementById('senha2').value;

    let usuario = {
        login: login,
        senha: senha,
    }

    let json = JSON.stringify(usuario);
    localStorage.setItem(login, json);
    console.log('usuário criado com sucesso!');
}; */

function logar(e){
    event.preventDefault();

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    let usuario = localStorage.getItem(login);
    let dados = JSON.parse(usuario);

    if(usuario == null || senha == null){
        document.getElementById('login').className = "form-control erro";
        document.getElementById('login').placeholder = "Este campo não pode ficar vazio";
        document.getElementById('senha').className = "form-control erro";
        document.getElementById('senha').placeholder = "Este campo não pode ficar vazio";
    }
    else if(login !== dados.login){
        document.getElementById('login').placeholder ="Login Errado";
        document.getElementById('login').placeholder = "Verifique as Credenciais";

    }else if(senha !== dados.senha){
        document.getElementById('senha').className = "form-control erro";
        document.getElementById('senha').placeholder = "Verifique as Credenciais";

    }else if(login === dados.login && senha === dados.senha){
        window.location.replace('index.html');
    }else{
        document.getElementById('login').className = "form-control erro";
    }}
