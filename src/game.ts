
/// --- Spawn a cube ---
const cube = new Entity()
// add a transform to the entity
cube.addComponent(new Transform({ position: new Vector3(8, 1, 8) }))
// add a shape to the entity
cube.addComponent(new BoxShape())
// add the entity to the engine
engine.addEntity(cube)
