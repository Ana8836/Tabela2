import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://tsbsytfnsyuyivnchdmn.supabase.co";
const supabaseKey = "sb_publishable_TaJmcuzjU4f0ZzfTl3dkpg_in7LT8zd";

const supabase = createClient(supabaseUrl, supabaseKey);

/* =========================
   DADOS (SUPABASE)
========================= */
function carregarDados() {
    document.getElementById("imagemFrame").srcdoc = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial; margin: 20px; }
            label { font-weight: bold; display:block; margin-top:10px; }
            input, textarea {
                width:100%;
                padding:8px;
                margin-top:4px;
                border-radius:6px;
                border:1px solid #ccc;
            }
            button {
                margin-top:15px;
                padding:12px;
                width:100%;
                background:#333;
                color:white;
                border:none;
                border-radius:8px;
                font-weight:bold;
                cursor:pointer;
            }
            #mensagem {
                margin-top:15px;
                font-weight:bold;
            }
        </style>
    </head>
    <body>
        <h2>Dados</h2>

        <form id="formDados">
            <label>Nome</label>
            <input id="nome" required>

            <label>Data de Nascimento</label>
            <input type="date" id="nascimento" required>

            <label>CPF</label>
            <input id="cpf" required>

            <label>Endereço</label>
            <textarea id="endereco" rows="3" required></textarea>

            <button type="submit">Enviar</button>
            <div id="mensagem"></div>
        </form>

        <script type="module">
            import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

            const supabase = createClient(
                "${supabaseUrl}",
                "${supabaseKey}"
            );

            document.getElementById("formDados").onsubmit = async (e) => {
                e.preventDefault();

                const dados = {
                    nome: nome.value,
                    nascimento: nascimento.value,
                    cpf: cpf.value,
                    endereco: endereco.value
                };

                const { error } = await supabase
                    .from("dados")
                    .insert([dados]);

                document.getElementById("mensagem").innerText =
                    error ? error.message : "Dados enviados com sucesso!";

                if (!error) e.target.reset();
            };
        </script>
    </body>
    </html>
    `;
}

/* =========================
   BIOGRAFIAS
========================= */
const biografias = {
  raul: {
    img: "img/raul.jpg",
    nome: "Raul Seixas",
    texto: `
      Raul Santos Seixas (Salvador, 28 de junho de 1945 – São Paulo, 21 de agosto de 1989) é considerado o <b>Pai do Rock Brasileiro</b>.
      Desde jovem, Raul demonstrou interesse por música e filosofia, estudando rock’n’roll, música nordestina, psicologia e ocultismo, elementos que marcariam seu estilo único.
      Ao longo de 26 anos de carreira, lançou 17 discos de estúdio e dezenas de singles, incluindo clássicos como <i>Metamorfose Ambulante</i>, <i>Ouro de Tolo</i> e <i>Sociedade Alternativa</i>.
      Conhecido por suas letras filosóficas, contestadoras e irreverentes, Raul explorava temas como liberdade, espiritualidade, crítica social e comportamento humano.
      Sua parceria com Paulo Coelho resultou em músicas profundamente místicas e poéticas, que se tornaram referências da cultura brasileira.
      Mesmo enfrentando censura, crises financeiras e problemas pessoais, Raul manteve sua autenticidade e inovação musical.
      Seu legado continua influenciando gerações e simboliza a liberdade artística e a rebeldia cultural.
    `
  },

  rita: {
    img: "img/rita.jpg",
    nome: "Rita Lee",
    texto: `
      Rita Lee Jones (1947–2023), conhecida como a <b>Rainha do Rock Brasileiro</b>, iniciou sua carreira com a icônica banda Os Mutantes,
      revolucionando a música nacional ao misturar rock psicodélico, tropicalismo e experimentações sonoras.
      Em carreira solo, lançou álbuns clássicos como <i>Fruto Proibido</i>, <i>Rita Lee</i> e <i>Entradas e Bandeiras</i>,
      com sucessos como <b>Lança Perfume</b>, <b>Mania de Você</b> e <b>Ovelha Negra</b>.
      Rita destacou-se pela irreverência, ousadia e defesa da liberdade artística, abrindo caminhos para mulheres no rock brasileiro.
      Também atuou em televisão, teatro e literatura, sendo reconhecida por seu humor, carisma e personalidade forte.
      Sua trajetória é marcada por inovação, atitude e enorme contribuição para a cultura pop brasileira.
    `
  },

  djavan: {
    img: "img/djavan.jpg",
    nome: "Djavan",
    texto: `
      Djavan Caetano Viana (Maceió, 1949) é um dos maiores nomes da música brasileira,
      conhecido por misturar MPB, jazz, funk, soul e ritmos africanos.
      Começou a tocar violão ainda jovem e rapidamente se destacou pela sofisticação harmônica de suas composições.
      Lançou mais de 20 álbuns, incluindo <i>Ária</i>, <i>Luz</i>, <i>Alumbramento</i> e <i>Coisa de Acender</i>,
      conquistando reconhecimento nacional e internacional.
      Suas letras poéticas abordam amor, espiritualidade, natureza e reflexões sociais.
      Djavan é referência musical por sua técnica vocal, arranjos complexos e capacidade de inovação constante.
    `
  },

  elis: {
    img: "img/elis.jpg",
    nome: "Elis Regina",
    texto: `
      Elis Regina Carvalho Costa (Porto Alegre, 1945 – 1982), apelidada de <b>Pimentinha</b>,
      é considerada uma das maiores cantoras brasileiras de todos os tempos.
      Desde criança demonstrou talento vocal, participando de programas de rádio e televisão.
      Tornou-se eternizada por interpretações marcantes como <b>Arrastão</b>, <b>Como Nossos Pais</b>,
      <b>O Bêbado e a Equilibrista</b> e <b>O Mundo é um Moinho</b>.
      Trabalhou com grandes nomes da MPB como Tom Jobim, Chico Buarque, Milton Nascimento e Gilberto Gil.
      Sua intensidade, técnica impecável e emoção nas interpretações fizeram dela um ícone da música brasileira.
      Mesmo com sua morte precoce, seu legado permanece vivo e influente até hoje.
    `
  }
};

function carregarBiografia(artista) {
    const bio = biografias[artista];
    if (!bio) return;

    document.getElementById("imagemFrame").srcdoc = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <style>
            body {
                margin: 0;
                font-family: Arial;
                padding: 20px;
            }
            .container {
                display: flex;
                align-items: flex-start;
                gap: 20px;
                flex-wrap: wrap;
            }
            img {
                width: 260px;
                max-width: 100%;
                border-radius: 12px;
                box-shadow: 0 0 12px rgb(255, 255, 255);
            }
            .text {
                flex: 1;
            }
            p {
                text-align: justify;
                line-height: 1.7;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <img src="${bio.img}" alt="${bio.nome}">
            <div class="text">
                <h2>${bio.nome}</h2>
                <p>${bio.texto}</p>
            </div>
        </div>
    </body>
    </html>
    `;
}


/* =========================
   QR CODE
========================= */
function carregarQRCode() {
    const url = "https://example.com";
    document.getElementById("imagemFrame").srcdoc = `
        <img src="=${encodeURIComponent(url)}">
    `;
}

/* =========================
   EXPOR PARA O HTML
========================= */
window.carregarDados = carregarDados;
window.carregarBiografia = carregarBiografia;
window.carregarQRCode = carregarQRCode;

/* =========================
   DOM
========================= */
document.addEventListener("DOMContentLoaded", () => {
    // nada aqui por enquanto
});
