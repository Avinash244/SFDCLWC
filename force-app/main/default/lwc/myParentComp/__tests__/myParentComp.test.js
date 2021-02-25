import { createElement } from 'lwc';

import MyParentComp from 'c/myParentComp';

const USER_RESULT='Nikhil';
describe('c-my-parent-comp  component testing',()=>{
    beforeEach(()=>{
        console.log('before earch test case')
        const element = createElement('c-my-parent-comp', {
            is: MyParentComp
          })
          document.body.appendChild(element)
    })
    afterEach(()=>{
        console.log('after earch test case')
    })
    test('render child component', ()=>{
        const element=document.querySelector('c-my-parent-comp')
        console.log('element>>'+JSON.stringify(element))
        const childCompElem=element.shadowRoot.querySelectorAll('c-my-child-comp');
        console.log('childCompElem>>'+JSON.stringify(childCompElem))
        expect(childCompElem.length).toBe(1)
    })
    
    test('set user data  property correctly', ()=>{
        const element=document.querySelector('c-my-parent-comp')
        console.log('element>>'+JSON.stringify(element))
        const childCompElem=element.shadowRoot.querySelector('c-my-child-comp');
        console.log('childCompElem>>'+JSON.stringify(childCompElem))
        expect(childCompElem.userDetail.Name).toBe(USER_RESULT)
    })
   /* test('display user list in specific order', ()=>{
        const element=document.querySelector('c-my-looping-component')
        const userDetails=Array.from(element.shadowRoot.querySelectorAll('.forEachList>li'))
        const userList=userDetails.map(li=>li.textContent)

        console.log('userDetails>>'+JSON.stringify(userDetails))
        console.log('userList>>'+JSON.stringify(userList))
        console.log('EXPECTED>>'+JSON.stringify(EXPECTED))
        expect(userList.length).toBe(3)
        expect(userList).toEqual(EXPECTED)
        
    })*/

})
