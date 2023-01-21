function updateCounter(){
    //fetch("https://9lxs0rml3c.execute-api.us-west-2.amazonaws.com/Prod/visitor-count/")
    fetch("https://88wb61u276.execute-api.us-east-1.amazonaws.com/prod/visitor-count/")
      .then(response => response.text())
      .then((body) => {
        var obj = JSON.parse(body);
        document.getElementById("counter").innerHTML=obj.visitorCount
      })
      .catch(function(error) {
        console.log(error);
      });
    }
