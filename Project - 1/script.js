let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#image")

main.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 1
    })
})

image.addEventListener("mouseenter",()=>{
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale: 2,
        backgroundColor: "#ffffff46"
    })
})
image.addEventListener("mouseleave",()=>{
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor: "#ffffff"
    })
})
