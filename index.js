// Your code here
function saturdayFun(target = "roller-skate") {
    console.log(`This Saturday, I want to ${target}`)
}

saturdayFun("eat pudding.")
saturdayFun()

let mondayWork = function(target = "go to the office") {
    console.log(`This Monday, I will ${target}.`)
}

mondayWork("go to wrigly")
mondayWork()

let wrapAdjective = function(style = "*") {
    return function(adjective = "special") {
        `You are ${style}${adjective}${style}!`
    }
}
