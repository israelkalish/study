let data
let listItems
const numbers = ['blue','red','green','aqua'];
const showUser = async () => {
    try{
        const response = await fetch('https://reqres.in/api/users')
        data = await response.json()
        console.log(response)
        console.log(data.data[0].avatar)
        return data.data[0].avatar
    } catch(err){
        console.log(err)
    }
}
showUser ()

// const SimpleElement = React.createElement('div',{onClick: () => alert('Hi!!')},'Click Me!');

// const Button = () => <button onClick={() => {
//     console.log(Input)
//     alert(Input['value'])
// }}>Click Me!</button>

const Button = () => <button onClick={() => {
    document.body.style.background=prompt('תבחר צבע חדש')
    // setTimeout(() => {
    // listItems.push(Color(prompt('תבחר צבע חדש')))
    // console.log(listItems)
    // Mint = () => <div>{Ul()}{()=> <ul>{listItems}</ul>}</div>
    // console.log(Mint)
    // ReactDOM.render(<Mint/>, document.getElementById('app'));
    // }, 1000);
}}>Click Me!</button>

const Img = () => <img alt="אין לי מושג למה אני לא מצליח לטעון את התמונה" width= "65px" height= "65px" onClick={() => {
    alert(<img src={data.data[0].avatar}></img>)
}}></img>

const Color = (number) =>
<li><button onClick={() => {
    document.body.style.background= number;
}}>{number}</button></li>

let NumberList =()=> {
    listItems = numbers.map(Color);
    return (
        <ul>{listItems}</ul>
    );
}

const Ul = () => <ul>{Button()}{Input()}{Img()}</ul>
const Input = () => <input ></input>
let Mint = () => <div>{Ul()}{NumberList()}</div>

ReactDOM.render(<Mint/>, document.getElementById('app'));
