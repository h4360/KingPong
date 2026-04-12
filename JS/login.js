document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = form.email.value;
        const senha = form.senha.value;

        const res = await fetch("https://sheetdb.io/api/v1/wfxuy0l16ulox");
        const json = await res.json();

        console.log("RESPOSTA DA API:", json);

        // garante que sempre seja array
        const usuarios = json.data || [];

        const user = usuarios.find(
            u => u.email === email && u.senha === senha
        );

        if (user) {
            localStorage.setItem("usuarioLogado", JSON.stringify(user));
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("mensagemErro").innerHTML =
                "<div class='erro'>Email ou senha incorretos</div>";
        }
    });
});