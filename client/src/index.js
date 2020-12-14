window.onload = () => {
  console.log('Hello world!');

  async function fetchData() {
    console.log('fetching data');
    const res = await axios.get('http://localhost:5000');
    console.log(res.data);
  }

  const btn = document.getElementById('btn-test');
  btn.addEventListener('click', fetchData);
};
