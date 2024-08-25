function sendData() {
  const dataValue = document.getElementById('dataInput').value;

  let responeProb = fetch('http://127.0.0.1:5000/api/data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: dataValue })
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById('response').innerText = `Serwer odpowiedział: ${data.message}`;
      klops = new responseFromData(data)
      klops.alertsFromRes()
  })
  .catch(error => console.error('Błąd:', error));
}

class responseFromData{
    constructor(res){
        this.message = res.message
        this.status = res.status
    }
    alertsFromRes(){
        alert(this.message)
        alert(this.status)
    }
}

