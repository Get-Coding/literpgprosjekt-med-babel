export const Model = {
    CurrentChallenger: null,
    ChallengerIndex: 0,
  
    Player: {
      name: "Peter",
      health: 20,
      attack: 20,
      defence: 20,
      luck: 2
    },
  
    damagePlayer(damage_amount) {
      this.Player.health -= damage_amount;
    },
  
    Challengers: [
      {
        name: "Potter Peter",
        warcry: "String it up bby",
        health: 100,
        attack: 20,
        defence: 20,
        luck: 30,
        alive: true
      },
  
      {
        name: "MegaMan",
        warcry: "Take this you robot",
        health: 100,
        attack: 20,
        defence: 20,
        luck: 30,
        alive: true
      },
  
      {
        name: "Saucy The Joustboy",
        warcry: "I will string you up and down",
        health: 40,
        attack: 23,
        defence: 10,
        luck: 30,
        alive: true
      }
    ],
  
    start() {
      this.CurrentChallenger = this.Challengers[0];
    },
  
    getCurrentChallenger() {
      return this.CurrentChallenger;
    },
  
    getNextChallenger() {
      if (this.ChallengerIndex > this.Challengers.length - 1) return null;
      return this.Challengers[this.ChallengerIndex];
    },
  
    damageChallenger(Challenger, damage_amount) {
      let defence = Math.random(Challenger.defence * 5) + 1;
      defence = Math.floor(defence);
  
      let damage = damage_amount - defence;
      Challenger.health -= damage;
  
      if (Challenger.health < 0) Challenger.alive = false;
    }
  };
  
  export default Model;
  