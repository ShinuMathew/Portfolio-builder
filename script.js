var text = [
    "Backend development",
    "Mobile development",
    "UI development",
    "Test Automation",
    "Devops"
]

var typeZone = document.querySelector(".animate")

text.forEach(txt => {
    let txtArr = txt.split('');
    txtArr.forEach(t => {
        setInterval(() => {
            // typeZone.textContent += t
            console.log(t)
        }, 1000)
    })
    console.log(txt)
})

// for(let i = )