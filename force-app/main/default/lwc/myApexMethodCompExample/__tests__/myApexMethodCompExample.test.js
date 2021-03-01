import { createElement } from 'lwc';
import MyApexMethodCompExample from 'c/myApexMethodCompExample';
import {registerApexTestWireAdapter} from '@salesforce/sfdx-lwc-jest'
import getContactLists from '@salesforce/apex/ContactController20.getContactLists';
import getAccountsList from '@salesforce/apex/AccountController2.getAccountsList';
const APEX_ACCOUNTLIST_SUCCESS=require('./data/accounts.json')
const APEX_ACCOUNTLIST_ERROR=require('./data/accountsError.json')
const getContactListAdapter=registerApexTestWireAdapter(getContactLists)

jest.mock('@salesforce/apex/AccountController2.getAccountsList',()=>({
    default:jest.fn()
}),
{virtual:true}
)

describe('testing imperative apex method',()=>{
    beforeEach(()=>{
        console.log('before earch test case')
        const element = createElement('c-my-apex-method-comp-example', {
            is: MyApexMethodCompExample
          })
          document.body.appendChild(element)
    })
    afterEach(()=>{
        console.log('after earch test case')
        jest.clearAllMocks()
    })
    test('renders accounts returned from imperative  apex call', ()=>{
        getAccountsList.mockResolvedValue(APEX_ACCOUNTLIST_SUCCESS)
        const element = document.querySelector('c-my-apex-method-comp-example')
        const buttonElement = element.shadowRoot.querySelector('lightning-button')
        buttonElement.click()
        return new Promise(setImmediate).then(()=>{
            const detailElements=element.shadowRoot.querySelectorAll('p.accountName')
            expect(detailElements.length).toBe(APEX_ACCOUNTLIST_SUCCESS.length)
            expect(detailElements[0].textContent).toBe(APEX_ACCOUNTLIST_SUCCESS[0].Name)
            expect(detailElements[1].textContent).toBe(APEX_ACCOUNTLIST_SUCCESS[1].Name)
            expect(detailElements[2].textContent).toBe(APEX_ACCOUNTLIST_SUCCESS[2].Name)
        })
    })
    test('renders the error  when apex   returned an error ', ()=>{
        getAccountsList.mockRejectedValue(APEX_ACCOUNTLIST_ERROR)
        const element = document.querySelector('c-my-apex-method-comp-example')
        const buttonElement = element.shadowRoot.querySelector('lightning-button')
        buttonElement.click()
        return new Promise(setImmediate).then(()=>{
            const errorElement=element.shadowRoot.querySelector('.error')
            expect(errorElement).not.toBeNull()
        })
    })
    /*test('records no item when no records are available', ()=>{
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
*/
})
