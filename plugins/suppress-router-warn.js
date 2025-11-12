defineNuxtPlugin(() => {
  const oldWarn = console.warn;
  console.warn = (...args) => {
    if (args[0].includes("[Vue Router warn]") && args[1].includes("/~/assets")) return;
    oldWarn(...args);
  };
});
