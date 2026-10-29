const express = require('express');
const app = express();

app.use(express.json());

// Rota principal da API de estudos
app.post('/api/estudo', (req, res) => {
  const { topico, idioma, nivel } = req.body;

  // Resposta simulada com o quiz gerado
  res.json({
    sucesso: true,
    topico: topico || "Geral",
    idioma: idioma || "pt",
    nivel: nivel || "secundario",
    quiz: [
      {
        pergunta: `Qual é o conceito principal relacionado com ${topico || "o estudo"}?`,
        opcoes: [
          "A) Fundamento teórico básico",
          "B) Aplicação prática avançada",
          "C) Análise histórica e estrutural",
          "D) Nenhuma das anteriores"
        ],
        resposta_correta: "A",
        explicacao: `Esta questão aborda os princípios fundamentais de ${topico || "estudo"} para o nível académico selecionado.`
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
