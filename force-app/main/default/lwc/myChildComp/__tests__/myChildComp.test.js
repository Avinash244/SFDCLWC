import { createElement } from 'lwc';

import MyChildComp from 'c/myChildComp';
const USER_DATA={
    Name:'Nikhil',
    Id:'1'
};
const MESSAGE='No user data available';
const USER_RESULT='Nikhil';
describe('c-my-child-comp   testing of my child component',()=>{
    beforeEach(()=>{
        console.log('before earch test case')
        
    })
    afterEach(()=>{
        console.log('after earch test case')
    })
    test('render name based on public property', ()=>{
        const element = createElement('c-my-child-comp', {
            is: MyChildComp
          })
          
        element.userDetail=USER_DATA
        document.body.appendChild(element)
        console.log('element>>'+JSON.stringify(element))
        const divElement=element.shadowRoot.querySelector('.userName');
        console.log('divElement>>'+JSON.stringify(divElement))
        expect(divElement.textContent).toBe(USER_DATA.Name)
    })
    
    test('render message if  userDetails not available', ()=>{
        const element = createElement('c-my-child-comp', {
            is: MyChildComp
          })
        document.body.appendChild(element)
        console.log('element>>'+JSON.stringify(element))
        const pEle=element.shadowRoot.querySelector('p');
        console.log('pEle>>'+JSON.stringify(pEle))
        expect(pEle.textContent).toBe(MESSAGE)
    })

})
