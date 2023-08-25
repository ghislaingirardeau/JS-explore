process.nextTick(() => {
  console.log("next Tick");
});
Promise.resolve().then(() => console.log("from promise"));
