function PrintHello() {
    console.log("hello");
}

function PrintBye() {
    console.log("bye");
}

function DoubleClick() {
  console.log("you clicked double");
}

export default function Button() {
    return (
        <div>
            <button onClick={PrintHello}>click me</button>
            <p onMouseOver={PrintBye}>this para is for event demo</p>
            <button onDoubleClick={DoubleClick}>click double</button>
        </div>
    );
}