function randint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let computador = randint(0, 3)
  console.log(computador)