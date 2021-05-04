process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = function() {
  let ms = 100;
  let stage = 0;
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
      if (stage === 0) process.stdout.write('\r/   ');
      if (stage === 1) process.stdout.write('\r-   ');
      if (stage === 2) process.stdout.write('\r\\   ');
      stage += 1;
    }, ms += 200);
  }
};

spinner();