const divElement = document.createElement("div")

divElement.className = "red"

divElement.setAttribute("id","red")
divElement.setAttribute("title","read more")

const container = document.querySelector(".to-do")

const h2Element = container.querySelector(".h2")

// const a = container.appendChild(divElement)
const a = container.append(divElement, "appendChild","helo")

console.log(a)