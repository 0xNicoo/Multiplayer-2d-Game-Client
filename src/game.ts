import Render from "./entities/components/render";
import Entity from "./entities/entity";
import GameEngine from "./gameEngine";
import PlayerRender from "./render/player-render";

export default class Game {
  gameEngine: GameEngine;

  constructor(ctx: CanvasRenderingContext2D) {
    this.gameEngine = new GameEngine(ctx);
    this.gameEngine.start();


    const testEntity = new Entity();
    const playerRender = new PlayerRender()
    const renderComponent = new Render(playerRender);
    testEntity.addComponent(renderComponent);
    this.gameEngine.addEntity(testEntity);
  }
}

/*import { Camera, Renderer, Scene } from "three";
import Player from "./entities/player";
import { Position } from "./entities/atributes/position";
import PlayerRender from "./render/playerRender";

export default class Game{
    scene: Scene;
    private camera: Camera;
    player: Player;
    players: PlayerRender[] = [];
    constructor(scene: Scene, camera: Camera) {
        this.scene = scene;
        this.camera = camera;
        this.player = new Player('000',{x:0, y:0}, "rgb(255,255,255)");
      }
    
    
    setPlayerId(playerId: string): void{
      this.player.id = playerId;
    }

    setPlayers(players: Player[]): void{
      players.forEach((p) => {
        const newPlayerRender = new PlayerRender(p);
        this.players.push(newPlayerRender);
        this.scene.add(newPlayerRender.figure);
      })
    }

    deletePlayerFromGame(playerId: string) {
      for(let i = 0; i < this.players.length; i++){
        if(this.players[i].player.id == playerId){
          this.scene.remove(this.players[i].figure)
          this.players.splice(i, 1);
        }
      }
    }

    addOtherPlayerToGame(player: Player): void{
      if(this.player.id != player.id){
        const newPlayerRender = new PlayerRender(player);
        this.players.push(newPlayerRender)
        this.scene.add(newPlayerRender.figure);
      }
    }

    gameUpdatePosition(positions: {[playerId: string]: Position} ){
      Object.keys(positions).forEach((playerId) => {
        const playerIndex = this.players.findIndex((playerRender) => playerRender.player.id === playerId)
        if(playerIndex != -1){
          this.players[playerIndex].updatePosition(positions[playerId]);
        }
      })
    }
}*/