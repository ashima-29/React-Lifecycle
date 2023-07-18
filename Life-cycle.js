import React from "react";

export default class Lifecycle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            value:8,
        };
        this.changeState=this.changeState.bind(this);
    }

CS=()=>
{
    let ans = this.state.value + 2;
    console.log(ans);
    this.state.value = ans; 
}
render()
{
    return(<><div>Hi fellow</div>
    <p>{this.state.value}</p>
    <button onClick={this.changeState}>Change State</button>
    <button onClick={this.CS}>CS</button></>);

}

 changeState= () =>
{
    console.log("printted");
    this.setState({value: +2});
   
console.log(this.state.value);
}

}
