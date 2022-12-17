const fibonacci = limit => {
    let container =[0,1]
    let sum = 1
    
    while (sum <= limit) {
        container.push(sum)
        sum = container[container.length-1] + container[container.length-2]
    }
    return container
    
  }
  
  console.log(fibonacci(21));