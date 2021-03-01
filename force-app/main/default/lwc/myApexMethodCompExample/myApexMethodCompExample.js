import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController2.getAccountsList'
export default class MyApexMethodCompExample extends LightningElement {
    accounts;
    error;
    loadAccounts(){
        getAccountList().then(result=>{
            this.accounts=result
            console.log('this.accounts>>'+JSON.stringify(this.accounts))
            this.error=null
        }).catch(error=>{
            this.error=error
            this.accounts=null
        })
    }

}