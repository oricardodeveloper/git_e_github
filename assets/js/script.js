var currentNumberWrapper = document.getElementById("currentNumber")
const INCREMENT = document.getElementById("increment")
const DECREMENT = document.getElementById("decrement")

let count = 0;

INCREMENT.addEventListener("click", () =>{
    count++;
    count = (count < 10) ? currentNumber + count : count; 
    document.getElementById('currentNumber').innerHTML = count;
})

DECREMENT.addEventListener("click",
    function decrement() {
        count--;
        if (count >= -10) {
            currentNumberWrapper.innerHTML = count;
        } 

        if (count < 0){
            currentNumberWrapper.classList.add("negative")
        }
    }
)