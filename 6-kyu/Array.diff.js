function arrayDiff(a, b) {
  for (let i = 0; i < a.length && i < b.length; i++) {
    if (a.includes(b[i])) {
      const isLargeNumber = (element) => element === b[i];
      let sp = a.findIndex(isLargeNumber);
      a.splice(sp, 1);
      console.log(a);
    }
  }
}
