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
            fontSize : '1rem',
            border : 0,
            borderRadius : '8px',
            padding : '8px 32px 8px 32px',
            letterSpacing : '0.05em'
        }

        Object.assign(element.style,style)
        element.innerHTML = this.innerHTML
        shadow.appendChild(element)
    }
}

customElements.define('ui-button',Button)