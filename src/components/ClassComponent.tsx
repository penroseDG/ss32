import React ,{Component }from "react";
interface Props{};
interface State{
    count : number; 
}
export default class Class extends Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {
            count : 0
        }
    }
    render() {
        return (
            <div>
               <button onClick ={stop}>Stop</button>
            </div>
        );
    }
};