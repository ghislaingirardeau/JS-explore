console.log("start");

// FONCTION SYNCHRONE
// js attends mes sans rien faire, ce qui bloque le code
/* const waitSync = (duration) => {
  const t = Date.now();
  while (Date.now() - t < duration) {}
};
waitSync(2000); */

// PROMESSE
const promiseA = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x) {
        resolve({ results: "La promesse A est résolu" });
      } else {
        reject({ results: "La promesse A est rejeté" });
      }
    }, 1000);
  });
};

const promiseB = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x) {
        resolve({ results: "La promesse B est résolu" });
      } else {
        reject({ results: "La promesse B est rejeté" });
      }
    }, 2000);
  });
};

const asyncPromise = async () => {
  try {
    await promiseA(true);
    console.log("PromiseA completed");
    let a = await promiseB(true);
    console.log(a);
    // return 10 made return a new promise
  } catch (error) {
    console.log(error);
  } finally {
    console.log("end the process");
  }
};
asyncPromise();

// WITH THEN
// on peut enchainer les promesses
// return renvoie une nouvelle promesse que l'on peut résoudre avec un autre then()
/* promiseA(true)
  .then((response) => {
    console.log(response.results);
    promiseB(false)
      .then((responseB) => {
        let a = responseB.results;
        return a;
      })
      .then((res) => console.log("Ma dernière promesse: " + res))
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  }); */

// WITH PROMISE ALL
// Si une seule des promise est rejeté, alors affiche seulement le reject
/*   Promise.all([promiseA(true), promiseB(true)]).then(
    (values) => {
      console.log(values);
    },
    (error) => {
      console.log(error);
    }
  ); */

// WITH PROMISE ALLSETTLED = renvoie toutes les promesses même celles rejeté
/* Promise.allSettled([promiseA(true), promiseB(true)]).then(
  (values) => {
    console.log(values);
  },
  (error) => {
    console.log(error);
  }
); */

// PROMISE ALL
/* var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "un");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "deux");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, { res: "trois" });
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "quatre");
});
var p5 = new Promise((resolve, reject) => {
  reject("rejet");
});

Promise.all([p1, p2, p3, p4, p5]).then(
  (values) => {
    console.log(values);
  },
  (error) => {
    console.log(error);
  }
); */

// FETCH
/* const responseFetch = async (params) => {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let json = await res.json();
  console.log(json);
};
responseFetch(); */

console.log("end");
