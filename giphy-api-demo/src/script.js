const img = document.querySelector('img');
generateImage();
    
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  generateImage();
})

async function generateImage() {
  try {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=ZZOwgGEMXkUJLe2q1C0yhESYDGYhrOrI&s=cats&weirdness=10', { mode: 'cors' });
    const results = await response.json();
    img.removeAttribute('src');
    img.setAttribute('src', results['data']['images']['original']['url']);
  } catch (error) {
    console.log('An error occured: ', error);
  }
}