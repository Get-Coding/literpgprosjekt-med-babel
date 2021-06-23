import "./styles.css";
import Contoller from "./controller.js";

const View = {
  Value: "Defeat the horde! <br> <br>",

  start() {
    this.draw();
  },

  clearScreen() {
    this.Value = "";
    this.draw();
  },

  addText(value, color = "color: green;") {
    this.Value += ` > <span style="${color}"> ${value} </span> <br>`;
    this.draw();
  },

  draw() {
    let ViewText = this.Value;

    document.getElementById("app").innerHTML = `
    <div id="view" class="view">
      ${ViewText}
    </div>

    <div class="btn_group">
    <button id="atk_btn">Attack</button>
    <button id="move_btn">Move Forward</button>
  </div>`;

    let attack_btn = document.getElementById("atk_btn");
    let move_btn = document.getElementById("move_btn");

    attack_btn.onclick = Contoller.Attack;
    move_btn.onclick = Contoller.Move;

    let viewHandle = document.getElementById("view");
    viewHandle.scrollTop = viewHandle.scrollHeight - viewHandle.clientHeight;
  }
};

export default View;
