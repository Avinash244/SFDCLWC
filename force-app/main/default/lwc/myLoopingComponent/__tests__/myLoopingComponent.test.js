import { createElement } from 'lwc';

import MyLoopingComponent from 'c/myLoopingComponent';

const EXPECTED=[
    "Nikhil",
    "John",
    "Mike"
];
describe('c-my-looping-component  suite',()=>{
    beforeEach(()=>{
        console.log('before earch test case')
        const element = createElement('c-my-looping-component', {
            is: MyLoopingComponent
          })
          document.body.appendChild(element)
    })
    afterEach(()=>{
        console.log('after earch test case')
    })
    test('check the user list length', ()=>{
        const element=document.querySelector('c-my-looping-component')
        const userDetails=element.shadowRoot.querySelectorAll('.forEachList>li');
        console.log('userDetails>>'+JSON.stringify(userDetails))
        expect(userDetails.length).toBe(3)
    })
    test('display user list in specific order', ()=>{
        const element=document.querySelector('c-my-looping-component')
        const userDetails=Array.from(element.shadowRoot.querySelectorAll('.forEachList>li'))
        const userList=userDetails.map(li=>li.textContent)

        console.log('userDetails>>'+JSON.stringify(userDetails))
        console.log('userList>>'+JSON.stringify(userList))
        console.log('EXPECTED>>'+JSON.stringify(EXPECTED))
        expect(userList.length).toBe(3)
        expect(userList).toEqual(EXPECTED)
        
    })
    /*test('display First And Last text in  the iterator loop', ()=>{
        const element=document.querySelector('c-my-looping-component')
        const firstDiv=element.shadowRoot.querySelectorAll('.iteratorList>li:first-child>div:first-child')
        console.log('firstDiv>>'+JSON.stringify(firstDiv))
        console.log('firstDiv.innerHTML>>'+JSON.stringify(firstDiv.innerHTML))
        expect(firstDiv.textContent).toBe('Start of List')
        const lastDiv=element.shadowRoot.querySelectorAll('.iteratorList>li:last-child>div:last-child')
        console.log('lastDiv>>'+JSON.stringify(lastDiv))
        expect(lastDiv.textContent).toBe('End of List')
        
    })*/
})
