function PrintHello() {
    console.log("hello");
}

export default function Button() {
    return (
        <div>
            <button onClick={PrintHello}>click me</button>
        </div>
    );
}