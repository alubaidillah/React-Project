

function Button(){

let count = 0;

    const handleClick = (e) => e.target.textContent = "Wadaw 😒"

    return(<button onDoubleClick={handleClick}>Click aku dong 😉</button>);

}

export default Button