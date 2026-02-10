// 🔥 SUPABASE
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://tsbsytfnsyuyivnchdmn.supabase.co";
const supabaseKey = "sb_publishable_TaJmcuzjU4f0ZzfTl3dkpg_in7LT8zd";

const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", async () => {
    const lista = document.getElementById("listaCadastros");
    const filtro = document.getElementById("filtro");

    if (!lista) return;

    async function carregarCadastros() {
        lista.innerHTML = "Carregando...";

        const { data, error } = await supabase
            .from("dados")
            .select("*")
            .order("nome", { ascending: true });

        if (error) {
            console.error(error);
            lista.innerHTML = "Erro ao carregar.";
            return;
        }
 lista.innerHTML = "";

    data.forEach(d => {
        // CPF mascarado: mostra só os 3 primeiros dígitos
        const cpfParcial = d.cpf ? d.cpf.substring(0, 3) + "****" : "";

        // Endereço não é exibido
        const item = document.createElement("div");
        item.className = "cardCadastro";
        item.innerHTML = `
            <strong>${d.nome}</strong><br>
            🪪 ${cpfParcial}
        `;
        lista.appendChild(item);
    });
    }

    // 🔎 FILTRO POR NOME
filtro.addEventListener("input", async () => {
    const texto = filtro.value.toLowerCase();

    const { data, error } = await supabase
        .from("dados")
        .select("*")
        .ilike("nome", `%${texto}%`);

    if (error) {
        console.error(error);
        return;
    }

})
    carregarCadastros();
})