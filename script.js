document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', searchAnswer);
});

async function searchAnswer() {
  const question = document.getElementById('question').value;
  const answerDiv = document.getElementById('answer');
  
  try {
    const response = await fetch(`/openai?text=${encodeURIComponent(question)}`);
    const json = await response.json();
    const answer = json.result;
    
    if (json.status) {
    
    answerDiv.innerText = answer;
    } else {
    answerDiv.innerText = 'tidak dapat menyelesaikan';
    }
  } catch (error) {
    console.error(error);
    answerDiv.innerText = 'Terjadi kesalahan .';
  }
}
