/*describe('some functionality',()=>{
    beforeEach(()=>{
        console.log('before earch test case')
    })
    afterEach(()=>{
        console.log('after earch test case')
    })
    test('add 1 + 2 equals to 3', ()=>{
        const num=1+2;
        expect(num).toBe(3);
    })
})*/
import {createElement} from 'lwc'
import hellowWorld22 from 'c/hellowWorld22'

describe('c-hellow-world22 test suite',()=>{
    beforeEach(()=>{
        console.log('before earch test case')
    })
    afterEach(()=>{
        console.log('after earch test case')
    })
    test('display first greeting', ()=>{

        const element = createElement('c-hellow-world22', {
            is: hellowWorld22
          })
    
        document.body.appendChild(element)
        const firstDiv=element.shadowRoot.querySelector('div.first')

        console.log('firstDiv>>'+JSON.stringify(firstDiv));
        expect(firstDiv.textContent).toBe('Hellow, World!')
        /*const num=1+2;
        expect(num).toBe(3);*/
    })
    test('display second greeting', ()=>{

        const element = createElement('c-hellow-world22', {
            is: hellowWorld22
          })
    
        document.body.appendChild(element)
        const secondDiv=element.shadowRoot.querySelector('div.second')

        console.log('secondDiv>>'+JSON.stringify(secondDiv));
        expect(secondDiv.textContent).toBe('My World!')
        /*const num=1+2;
        expect(num).toBe(3);*/
    })
    
})