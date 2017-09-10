export const getCards = () => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function() {
      resolve(JSON.parse(this.responseText));
    });
    oReq.open("GET", "/card");
    oReq.send();
  });
};

export const addNewCard = (card) => {
  return new Promise((resolve, reject) => {
    // via: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name;

    // Turn the data object into an array of URL-encoded key/value pairs.
    for(name in card) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(card[name]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "/card/new", true);
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.addEventListener('load', function() {
      resolve(JSON.parse(this.responseText));
    });
    oReq.send(urlEncodedData);
  });
};

export const changeCard = (card) => {
  return new Promise((resolve, reject) => {
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name;

    // Turn the data object into an array of URL-encoded key/value pairs.
    for(name in card) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(card[name]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    var oReq = new XMLHttpRequest();
    oReq.open("PUT", "/card/" + card.id, true);
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.addEventListener('load', function() {
      resolve(JSON.parse(this.responseText));
    });
    oReq.send(urlEncodedData);
  });
};

export const removeCard = (card) => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.open("DELETE", "/card/" + card.id, true);
    oReq.addEventListener('load', function() {
      resolve(JSON.parse(this.responseText));
    });
    oReq.send();
  });
};