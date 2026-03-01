import express from 'express';

const host = '0.0.0.0';
const porta = 3000;

const app = express();
app.use(express.urlencoded({extended: true}));
var listaTimes = [];

app.get('/', (req, res) => {
    res.send
        (`
         <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>
        <body>
            <div style="height:400px" class="w-100 d-flex justify-content-center align-items-center flex-column">
                <div class="alert alert-primary text-center w-100" role="alert">
                    Bem vindo! Vamos cadastrar seu time
                </div>
                <div>

                    <a href="/times">                
                        <button type="button" class="btn btn-secondary btn-sm">Continuar</button>
                    </a>
                </div>
            </div>

        </body>
        </html>
        
    `)
})
app.get('/times', (req, res) => {
    res.send
        (`
         <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>
        <body>
<section class="intro">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card">
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2">Formulario de Registro de Time  </h3>

              <form method="POST" action="/times">

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="text" id="nome" name="nome" class="form-control" />
                      <label class="form-label" for="Nome">Nome Popular</label>
                    </div>

                  </div>
                    <div class="col-md-6 mb-4">

                        <div class="form-outline">
                        <input type="text" id="sociedade" name="sociedade" class="form-control" />
                        <label class="form-label" for="nome de registro">Nome de Registro</label>
                        </div>

                    </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <div class="form-outline datepicker">
                      <input
                        type="text"
                        class="form-control"
                        id="nascimento"
                        name="nascimento"
                      />
                      <label for="nascimento time" class="form-label">Nascimento do Time</label>
                    </div>

                  </div>
                  <div class="col-md-6 mb-4">

                    <h6 class="mb-2 pb-1">Genero dos jogadores: </h6>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="jogadores"
                        id="femininogenero"
                        value="masculino"
                      />
                      <label class="form-check-label" for="feminino">Feminino</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="jogadores"
                        id="masculinogenero"
                        value="feminino"
                      />
                      <label class="form-check-label" for="masculino">Masculino</label>
                    </div>

                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="email" id="email" name="email" class="form-control" />
                      <label class="form-label" for="emailAddress">Email do Time</label>
                    </div>

                  </div>
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="tel" id="numero" name="numero" class="form-control" />
                      <label class="form-label" for="phoneNumber">Telefone para contato</label>
                    </div>

                  </div>
                </div>

                <div class="row">
                  <div class="col-12">

                    <h6 class="mb-3">Escolha divisão</h6>

                   <div class="row pb-3">
                <label class="sr-only" for="apelido">Divisão</label>
                    <select class="custom-select aria-label="Seleção da divisão do time" id="divisao" name="divisao">
                        <option selected>Selecione a divisão</option>
                        <option value="profissional">Profissional</option>
                        <option value="semiamador">Semi-Amador</option>
                        <option value="amador">Amador</option>

                    </select>

                </div>

                    <div class="mt-4">
                      <input class="btn btn-warning btn-lg" type="submit" value="Cadastrar" />
                    </div>

                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>    
        </body>
        </html>
    `)
    res.end()

})

app.post("/times", (req, res) => {

  
    const nome = req.body.nome;
    const sociedade = req.body.sociedade;
    const nascimento = req.body.nascimento;
    const jogadores = req.body.jogadores;
    const email = req.body.email;
    const numero = req.body.numero;
    const divisao = req.body.divisao;

    listaTimes.push({
        "nome": nome,
        "sociedade": sociedade,
        "nascimento": nascimento,
        "jogadores": jogadores,
        "email": email,
        "numero": numero,
        "divisao": divisao,
    })
    res.redirect("/listatimes");
})

app.get("/listatimes", (req, res) => {
    res.write(`<html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>
        <body>
            <div class="container mt-5">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome Popular</th>
                        <th scope="col">Nome Social</th>
                        <th scope="col">Nascimento</th>
                        <th scope="col">Jogadores</th>
                        <th scope="col">Email</th>
                        <   th scope="col">Numero</>
                        <th scope="col">Divisão</th>


                    </tr>
                </thead>
                <tbody>
            `);

    for (let i = 0; i < listaTimes.length; i++) {
        const time = listaTimes[i];
        res.write
        (`
            <tr>
                <th scope="row">${i+1}</th>
                <td>${time.nome}</td>
                <td>${time.sociedade}</td>
                <td>${time.nascimento}</td>
                <td>${time.jogadores}</td>
                <td>${time.email}</td>
                <td>${time.numero}</td>
                <td>${time.divisao}</td>
                
            </tr>
        `)
    }

    res.write(`
            </tbody>
        </table>
        <a href="/times" class="btn btn-primary">Continuar cadastrando</a>
        </div>

        </body>
    </html>
                `);
    res.end();
})


app.listen(porta, host, () => {
    console.log(`Servidor roadando em http://${host}:${porta}`);
})