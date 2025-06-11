class Button extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode : 'closed'})
        const element = document.createElement('button')
        const style = {
            backgroundColor : 'var(--blue)',
            color : 'var(--base)',
            fontFamily : 'Inter',
            fontWeight : '600',
            fontSize : '0.9rem',
            border : 0,
            borderRadius : '8px',
            padding : '8px 32px 8px 32px'
        }

        Object.assign(element.style,style)
        element.innerHTML = this.innerHTML
        shadow.appendChild(element)
    }
}

customElements.define('ui-button',Button)