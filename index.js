const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const jokes = [
  {
    id: 1,
    title: "Joke 1",
    description:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 2,
    title: "Joke 2",
    description:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  },
  {
    id: 3,
    title: "Joke 3",
    description:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 4,
    title: "Joke 4",
    description:
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  },
  {
    id: 5,
    title: "Joke 5",
    description:
      "Why don’t skeletons fight each other? They don’t have the guts.",
  },
  {
    id: 6,
    title: "Joke 5",
    description:
      "I'm reading a book on anti-gravity. It's impossible to put down!",
  },
  {
    id: 7,
    title: "Joke 5",
    description: "I used to be a baker, but I couldn't make enough dough.",
  },
];

app.get("/joke", (req, res) => {
  const joke = jokes.find((t) => t.id == req.query.id);
  res.json({
    joke,
  });
});

app.get("/jokes", (req, res) => {
  const randomJokes = [];
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      randomJokes.push(jokes[i]);
    }
  }
  res.json({
    jokes: randomJokes,
  });
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send({
    total: total,
    interest: interest,
  });
});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10),
  });
});

app.listen(8080);
