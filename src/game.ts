import * as ui from '@dcl/ui-scene-utils'

ui.displayAnnouncement('Ouch!', 5, Color4.Red(), 100, false)

/// --- Spawn a cube ---
const cube = new Entity()
// add a transform to the entity
cube.addComponent(new Transform({ position: new Vector3(8, 1, 8) }))
// add a shape to the entity
cube.addComponent(new BoxShape())
// add the entity to the engine
engine.addEntity(cube)
