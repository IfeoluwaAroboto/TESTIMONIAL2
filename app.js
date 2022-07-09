let personName = document.querySelector(".name")
let job = document.getElementById("job")
let message = document.querySelector(".text")
let prevBtn = document.querySelector(".prev-btn")
let nextBtn = document.querySelector(".next-btn")
let img = document.querySelector(".image")

let reviews =[ {id:1,
    PersonName: "Tanya Sinclar",
    job: "UX ENGINEER",
    img: "/images/image-tanya.jpg",
    message: `"I have been intrested in coding for a while but never taken the jump,until now. couldn't recommend this course enough. I am now in the job of my dreams  so excited about the future "`
    },
    { id:2,
        PersonName: "John Tarkpor",
        job: "FONT-END DEVELOPER",
        img: "/images/image-john.jpg",
        message: `" If you want to lay the best foundation possible I would recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about  starting up as a professional developer. ” `
        }
    ]
     console.log(reviews)
     let firstItem = 0
window.addEventListener ("DOMContentLoaded", function (){
    showPerson()})

function showPerson () {
    const item = reviews [firstItem]
    img.src = item.img
    personName.textContent = item.PersonName
    job.textContent = item.job
    message.textContent = item.message
}
console.log(reviews.length)


nextBtn.addEventListener ("click", function () {
    firstItem++
    if (firstItem > reviews.length -1){
        firstItem = 0}
    showPerson()
})

prevBtn.addEventListener ("click", function () {
    firstItem-- 
    if (firstItem < 0 ){
        firstItem = reviews.length -1;
    }
    showPerson()
    
})
window.addEventListener ("DOMContentLoaded", function (){
    showPerson()})
