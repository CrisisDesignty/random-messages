const messages = [
    "santi",
    "ana",
    "Nicolas",
    "Diana",
    "Coraline",
    "Ricardo",
    "Pedro",
    "Laura"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message)
};

module.exports = { randomMsg };
