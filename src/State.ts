import { Component } from "./Component";


export class StateSingleton {

    private stateMap = new Map<number, object>();
    private components : Component[]

    constructor(components : Component[]) {
        this.components = components;

        this.generateStates()
    }

    generateStates = () => {
        this.components.forEach(comp => {
            this.createState(comp.id);
            comp.updateState(this.getState(comp.id));
            comp.updateStateSetter((newState: object)=>{this.updateState(comp.id, newState)})
        })
    }


    createState = (id: number) => {
        this.updateState(id, {})
    }

    updateState = (id: number, newState: object) => {
        this.stateMap.set(id, newState)
        console.log(this.stateMap)
    }

    getState = (id: number) : object => {
        return this.stateMap.get(id)!
    }


}