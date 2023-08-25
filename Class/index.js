class User {
  constructor(name, lastName) {
    (this._name = name), (this._lastName = lastName);
    this.fullNameEx1 = () => {
      return this._name + " " + this._lastName;
    };
  }

  fullNameEx2() {
    return this._name + " " + this._lastName;
  }
  setTitle(title) {
    console.log(title);
  }
  async returnSomething() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${this.fullNameEx2()} is the best super hero`);
      }, 2000);
    });
  }
}

//! commun to all class created
User.prototype.role = {
  name: "admin",
  id: 1,
};

const user1 = new User("toto", "spiderman");
const user2 = new User("alex", "superman");

console.log(user1);
console.log(user2);
console.log(user2.fullNameEx1());
console.log(user2.fullNameEx2());

//! si on change le proto sur une des class, il change pour tous le monde
user1.role.id = 4;
console.log(user1.role.id);
console.log(user2.role.id);

//? CLASS EXTENDS
class superUser extends User {
  constructor(name, lastName) {
    super(name, lastName); //* pour utiliser le constructor de la class User
    this.age;
    //! call this.setTitle when it's created
    this.setTitle("SUPERHERO");
  }
  //* method qui n'apprait que pour cette class
  setAge(a) {
    this.age = a;
  }
}

const user3 = new superUser("user3", "batman");
user3.setAge(24);
console.log(await user3.returnSomething());

//? Exemple utilisation de class et extends

class AbstractView {
  constructor(titre) {
    this.titre = titre;
  }
  setSousTitre(soustitre) {
    console.log(soustitre);
  }
}

class ViewAbout extends AbstractView {
  constructor(titre) {
    super(titre);
    //* Va se lancer à la création d'une nouvelle instance
    this.setSousTitre(`${this.titre} is load`);
  }
}

class ViewHome extends AbstractView {
  constructor(titre) {
    super(titre);
    //* Va se lancer à la création d'une nouvelle instance
    this.setSousTitre(`${this.titre} is load`);
  }
}

const home = new ViewHome("Home page");
const about = new ViewAbout("About page");
console.log(home, about);
