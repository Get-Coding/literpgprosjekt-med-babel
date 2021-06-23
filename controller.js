import View from "./view.js";
import Model from "./model.js";

import { AttackPhrases } from "./combat.js";

const Controller = {
  start() {
    View.start();
    View.onAttack = this.Attack;
    View.onMove = this.Move;

    Model.start();
    this.DisplayStatus();

    this.IntroduceChallenger();
  },

  IntroduceChallenger() {
    let challenger = Model.getCurrentChallenger();

    View.addText("The first challenger is: ");
    View.addText(challenger.name);
  },

  Attack() {
    let randomIndex = Math.random() * AttackPhrases.length;
    randomIndex = Math.floor(randomIndex);
    let currentPhrase = AttackPhrases[randomIndex];

    let currentAttack =
      Model.Player.attack * Math.random() * Model.Player.luck + 1;
    currentAttack = Math.floor(currentAttack);

    Model.damageChallenger(Model.getCurrentChallenger(), currentAttack);

    View.addText("You " + currentPhrase + " dealing:", "color:blue;");
    View.addText(currentAttack + " damage", "color:red;");

    // Vi mister this når vi binder funkjonene til knappene i View
    Controller.DisplayStatus();
  },

  DisplayStatus() {
    View.addText(` Player health is: ${Model.Player.health} <br>`);

    if (Model.getCurrentChallenger().health > 0) {
      View.addText(
        ` Challenger health is: ${Model.getCurrentChallenger().health} <br>`,
        "color:red;"
      );
    } else {
      View.addText("Challenger is dead");
    }
  },

  Move() {}
};

export default Controller;
