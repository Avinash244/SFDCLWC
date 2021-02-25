import { createElement } from 'lwc';

import MyConditionalRendering from 'c/myConditionalRendering';

describe('c-my-conditional-rendering  suite',()=>{
    beforeEach(()=>{
        console.log('before earch test case')
        const element = createElement('c-my-conditional-rendering', {
            is: MyConditionalRendering
          })
          document.body.appendChild(element)

    })
    afterEach(()=>{
        console.log('after earch test case')
    })
    test('dont show the password', ()=>{
        const element=document.querySelector('c-my-conditional-rendering')
        const passwordElement=element.shadowRoot.querySelector('.userInfo');
        console.log('passwordElement>>'+JSON.stringify(passwordElement))
        expect(passwordElement.textContent).toBe('My password is ***********')
    })
    test('show user password when checkbox is checked', ()=>{
        const element=document.querySelector('c-my-conditional-rendering')
        const inputElement=element.shadowRoot.querySelector('lightning-input');
        inputElement.checked=true
        inputElement.dispatchEvent(new CustomEvent('change'))
        //console.log('passwordElement>>'+JSON.stringify(passwordElement))
       // expect(passwordElement.textContent).toBe('My password is ***********')
    })
    return Promise.resolve().then(()=>{
        const passwordElement=element.shadowRoot.querySelector('.userInfo')
        console.log('passwordElement>>'+JSON.stringify(passwordElement))
        expect(passwordElement.textContent).toBe('My password is AvinashAvid')
    })
})
