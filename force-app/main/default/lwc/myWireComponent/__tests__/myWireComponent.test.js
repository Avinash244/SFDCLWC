import { createElement } from 'lwc';
import MyWireComponent from 'c/myWireComponent';
import {registerApexTestWireAdapter} from '@salesforce/sfdx-lwc-jest'
import getContactLists from '@salesforce/apex/ContactController20.getContactLists';
const getContactListNoRecod=require('./data/getContactListNoRecod.json')
const mockgetContactList=require('./data/getContactLists.json')
const getContactListAdapter=registerApexTestWireAdapter(getContactLists)

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
        jest.clearAllMocks()
    })
    test('render correct records', ()=>{
        const element = document.querySelector('c-my-wire-component')
        getContactListAdapter.emit(mockgetContactList)
        return Promise.resolve().then(()=>{
            const pElement = element.shadowRoot.querySelectorAll('p')
            expect(pElement.length).toBe(mockgetContactList.length)
            expect(pElement[0].textContent).toBe(mockgetContactList[0].Name)

        })
       // const text=element.shadowRoot.querySelector('p')
       // console.log('text>>'+JSON.stringify(text))
       // expect(text.textContent).toBe('Hello, World!')
    })
    test('records no item when no records are available', ()=>{
        const element = document.querySelector('c-my-wire-component')
        getContactListAdapter.emit(getContactListNoRecod)
        return Promise.resolve().then(()=>{
            const pElement = element.shadowRoot.querySelectorAll('p')
            expect(pElement.length).toBe(getContactListNoRecod.length)
           // expect(pElement[0].textContent).toBe(mockgetContactList[0].Name)

        })
    })
    test('get contact list @wire error', ()=>{
        const element = document.querySelector('c-my-wire-component')
        getContactListAdapter.error()
        return Promise.resolve().then(()=>{
            const errorElement = element.shadowRoot.querySelector('.error')
            expect(errorElement.textContent).not.toBeNull()
           // expect(pElement[0].textContent).toBe(mockgetContactList[0].Name)

        })
    })
/*
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
        

    })*/
})
