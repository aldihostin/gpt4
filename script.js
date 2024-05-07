document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', searchAnswer);
});

async function searchAnswer() {
  const question = document.getElementById('question').value;
  const answerDiv = document.getElementById('answer');
  
  try {
    const response = await fetch(`/openai?text=${encodeURIComponent(question)}`);
  const kocak = response.result;
    answerDiv.innerText : kocak;
  } catch (error) {
    console.error(error);
    answerDiv.innerText = 'Terjadi kesalahan .';
  }
}
