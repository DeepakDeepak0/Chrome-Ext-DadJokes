


fetch('https://icanhazdadjoke.com/slack')
    .then((response) => response.json())
    .then(data => {
    const Text = data.attachments[0].text;
    const jokeHeader = document.querySelector('#joke-header');
    jokeHeader.innerHTML = Text;
    }
);
