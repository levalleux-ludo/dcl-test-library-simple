import * as ui from '@dcl/ui-scene-utils';
import * as crypto from '@dcl/crypto-scene-utils';

import { UICommit } from 'llx-test-library-2';

ui.displayAnnouncement(crypto.contract.mainnet.MANAToken, 5, Color4.Red(), 100, false)
ui.displayAnnouncement('Hello', 5, Color4.Red(), 100, false)



/// --- Spawn a cube ---
const cube = new Entity()
// add a transform to the entity
cube.addComponent(new Transform({ position: new Vector3(8, 1, 8) }))
// add a shape to the entity
cube.addComponent(new BoxShape())
// add the entity to the engine
engine.addEntity(cube)

const canvas = new UICanvas();
const uicommit = new UICommit(
  canvas,
  {
    image: {
      texture: new Texture("images/rubiks-cube.jpeg"),
      width: 401,
      height: 380
    },
    title: "Rubik's Cube",
    id: '151'
  }
);

cube.addComponent(new OnClick(() => {
  uicommit.show();
}))
