function Node(val) {
  return {
    value: val,
    left: null,
    right: null,
    isThisLocked: false,
    isThisParentLocked: false,
  }
}
let root = Node(7)
let node_9 = Node(9)
let node_11 = Node(11)
let node_6 = Node(6)
let node_8 = Node(8)
let node_4 = Node(4)
let node_2 = Node(2)
// right
root.right = node_9
node_9.right = node_11
node_6.right = node_8
// left
root.left = node_6
node_6.right = node_8
node_6.left = node_4
node_4.left = node_2

function lockNode(root, targetNodeValue) {
  let stack = [root]
  while (stack.length) {
    let curr = stack.pop()
    if(curr.value === targetNodeValue) {
      if(!curr.isThisParentLocked && !curr.isThisLocked) {
        let isChildLocked = false
        if(curr.left) isThisLocked = curr.left.isThisLocked? true : false
        if(curr.right) isThisLocked = curr.right.isThisLocked? true : isChildLocked
        if(isChildLocked) return "You can not do that, check child nodes..."
        
        curr.isThisLocked = true
        if(curr.left) curr.left.isThisLocked = true
        if(curr.right) curr.right.isThisLocked = true
        return (`Node: ${curr.value} is locked.`)
      }
    }
    if(curr.left) stack.push(curr.left)
    if(curr.right) stack.push(curr.right) 
  }
  return `Can not lock Node: ${targetNodeValue}, check locked nodes.`
}
function unlockNode(root, targetNodeValue) {
  let stack = [root]
  while (stack.length) {
    let curr = stack.pop()
    if(curr.value === targetNodeValue) {
      if(!curr.isThisLocked) {
        return `Node: ${targetNodeValue} is already unlocked...`
      }
      return `Node: ${targetNodeValue} is unlocked.`
    }
    if(curr.left) stack.push(curr.left)
    if(curr.right) stack.push(curr.right) 
  }
  return `Can not find Node: ${targetNodeValue}`
}
console.log(lockNode(root, 11))
console.log(lockNode(root, 4))
console.log(lockNode(root, 8))
console.log(unlockNode(root, 11))
