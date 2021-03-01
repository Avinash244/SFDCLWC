public inherited sharing class AccountController2 {
    public AccountController2() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountById(Id accId){
        return [select id,name,Industry,AnnualRevenue,Website from Account where Id =:accId];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsList(){
        return [select id,name,Industry,AnnualRevenue,Website from Account where AnnualRevenue!=null  limit :100];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts2(String name){
        return [select id,name,Industry,AnnualRevenue,Website from Account where name =:name limit :100];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [select id,name from contact limit :100];
    }
}
