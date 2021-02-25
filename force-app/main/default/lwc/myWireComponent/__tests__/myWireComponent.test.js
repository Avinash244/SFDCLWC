import { createElement } from 'lwc';
import MyWireComponent from 'c/myWireComponent';
import {registerApexTestWireAdapter} from '@salesforce/sfdx-lwc-jest'
const getContactList=require('./data/getContactLists.json')
registerApexTestWireAdapter(getContactList)

describe('c-my-wire-component  testing',()=>{
    beforeEach(()=>{
        console.log('before earch test case')
        const element = createElement('c-my-wire-component', {
            is: MyWireComponent
          })
          document.body.appendChild(element)
    })
    afterEach(()=>{
        console.log('after earch test case')
    })
    test('Test default  greet value should be Hello, World!', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const text=element.shadowRoot.querySelector('p')
        console.log('text>>'+JSON.stringify(text))
        expect(text.textContent).toBe('Hello, World!')
    })
    test('Test default  greet value should not be Hello, Nikhil!', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const text=element.shadowRoot.querySelector('p');
        console.log('text>>'+JSON.stringify(text))
        expect(text.textContent).not.toBe('Hello, Nikhil!')
    })
    test('Test input change event value', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const inputText=element.shadowRoot.querySelector('lightning-input');
        console.log('inputText>>'+JSON.stringify(inputText))
        inputText.value='Salesforce'
        inputText.dispatchEvent(new CustomEvent('change'))
        const text=element.shadowRoot.querySelector('p');
        return Promise.resolve().then(()=>{
            expect(text.textContent).toBe('Hello, Salesforce!')
        })
        

    })
})
