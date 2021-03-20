
export default function swDev() {
    let  swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker
      .register(swUrl)
      .then(response => {
        console.error('Response Service Worker:', response);
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }
  