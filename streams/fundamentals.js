import { Readable } from "node:stream";

// This is a manually writen read stream that will print a number from 1 to 100 one by one in 1 sec

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i) + "_");

        this.push(buf);
      }
    }, 1000);
  }
}

new OneToHundredStream().pipe(process.stdout);
