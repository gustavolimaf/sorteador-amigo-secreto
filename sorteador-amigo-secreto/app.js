document.getElementById("sortearBtn").addEventListener("click", function () {
    const input = document.getElementById("namesInput").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = ""; 

    let names = input.split(/[\n,]+/).map(name => name.trim()).filter(name => name.length > 0);
  
    if (names.length === 0) {
      resultDiv.textContent = "Por favor, insira pelo menos um nome válido.";
      resultDiv.style.color = "red";
      return;
    }

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/;
    let validNames = names.filter(name => regex.test(name));
  
    if (validNames.length === 0) {
      resultDiv.textContent = "Nenhum nome válido encontrado. Verifique se não há números ou caracteres especiais.";
      resultDiv.style.color = "red";
      return;
    }

    const randomIndex = Math.floor(Math.random() * validNames.length);
    const chosenName = validNames[randomIndex];
  
    resultDiv.textContent = "Nome sorteado: " + chosenName;
    resultDiv.style.color = "#00FF00";
  });
  