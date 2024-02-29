import { idGenerator } from "./EnumGenerator";


export class Component {

    id : number;
    state : any = {}
    private stateSetter : (obj: object) => void = ()=>{}
    private shouldMount = true;
    private shouldUpdate = false;

    constructor() {
        this.id = idGenerator()
    }

    updateStateSetter = (stateSetter : (obj: object) => void) => {

        this.stateSetter = stateSetter.bind(this);
    }

    updateState = (state : object) => {
        this.state = state;
    }

    componentDidMount = () => {
        console.log('here')
        this.setState({id: "da"})
    }

    componentDidUpdate = () => {
        console.log('here2')
    }

    onComponentDidMount = () => {
        if(this.shouldMount) {
            this.shouldMount = false;
            setTimeout(()=>{
                this.componentDidMount()
            }, 0)
        }
    }

    onComponentDidUpdate = () => {
        if(this.shouldUpdate) {
            this.shouldUpdate = false;
            setTimeout(()=>{
                this.componentDidUpdate()
            }, 0)
        }
    }

    selfUpdate = () => {
        try{
            document.getElementById(`${this.id}`)!.parentElement!.innerHTML = this.onRender()
        }
        catch(e) {
            console.error(e)
        }
    }

    setState = (newState: object) => {
        console.log(newState)
        this.state={...this.state, ...newState}
        this.stateSetter(this.state)
        this.shouldUpdate = true;
        this.selfUpdate()
    }

    onRender = () => {
        this.onComponentDidMount();
        this.onComponentDidUpdate();
        return this.render();
    }

    render = () => {
        return `<div id="${this.id}">${this.state.id}</div>`
    }
}