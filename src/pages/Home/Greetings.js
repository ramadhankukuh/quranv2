import React from 'react';

class Greetings extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let greeting;

    if (hours >= 0 && hours < 10) {
      greeting = 'Selamat Pagi';
    } else if (hours >= 10 && hours < 15) {
      greeting = 'Selamat Siang';
    } else if (hours >= 15 && hours < 18) {
      greeting = 'Selamat Sore';
    } else {
      greeting = 'Selamat Malam';
    }

    return <h1>Assalamualaikum, {greeting}</h1>;
  }
}

export default Greetings;
