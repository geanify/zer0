import { Component } from "./Component"
import { StateSingleton } from "./State"

const comp = new Component()
new StateSingleton([comp])

document.querySelector<HTMLDivElement>('#app')!.innerHTML = comp.onRender()