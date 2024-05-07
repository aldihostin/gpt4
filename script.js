document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', searchAnswer);
});

async function searchAnswer() {
  const question = document.getElementById('question').value;
  const answerDiv = document.getElementById('answer');
  
  try {
    const response = await fetch(`https://aemt.me/gemini?text=${encodeURIComponent(question)}`);
  const json = response.json()
    const data = json.result;
    
    answerDiv.innerText = json.result;
  } catch (error) {
    console.error(error);
    answerDiv.innerText = 'Terjadi kesalahan .';
  }
}
