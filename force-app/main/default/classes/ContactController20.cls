public inherited sharing class ContactController20 {
    public ContactController20() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactLists(){
        return [select name from Contact];
    }
}
