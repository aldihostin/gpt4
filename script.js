async function searchAnswer() {
  const question = document.getElementById('question').value;
  const answerDiv = document.getElementById('answer');
  
  try {
    const response = await fetch(`/gpt4?text=${encodeURIComponent(question)}`);
    const json = await response.json();
    const answer = json.result;
    
    answerDiv.innerText = answer;
  } catch (error) {
    console.error(error);
    answerDiv.innerText = 'Terjadi kesalahan saat mencari jawaban.';
  }
}
