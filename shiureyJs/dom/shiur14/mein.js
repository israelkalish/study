function detectCollision(objects, point) {
    const {x: pointX, y: pointY} =point
    for (let i = 0; i < objects.length; i++) {
      let {x,y,width,height} = objects[i];
      console.log(objects[i])
      if (
        pointX >= x &&
        pointX <= x + width &&
        pointY >= y &&
        pointY <= y + height
      )
        return objects[i];
    }
  }
  
  const myObjects = []
  myObjects.push({ x: 10, y: 20, width: 30, height: 30 }),
  myObjects.push({ ...myObjects[0] }),
  myObjects[1][`x`]=-40
  myObjects.push({ x: 0, y: 0, width: 10, height: 5 }),
  
  console.log(detectCollision(myObjects,{x:10,y:20}))
