public class gitComponentContriller {
    @AuraEnabled
        public static Boolean insertContact(string ContactName) {
         Account oAccount = new Account(Name=ContactName);
         Boolean issuccessful=false;
         try{
            Database.insert (oAccount,true);
            issuccessful=true;
            return issuccessful;
         }catch (Exception oEx) {
            return issuccessful;
         }
        }
        @AuraEnabled
        public static Boolean insertContact1(List<string> accNameList){
            List<Account> accList=new List<Account>();
        if(!accNameList.isEmpty()){
            for(String contactName:accNameList){
            accList.add(new Account(Name =contactName));
            }
        }
        Boolean isSuccessful=false;
         try{
            if(!accList.isEmpty()){
            insert accList;
            }
            isSuccessful=true;
            return isSuccessful;
         }catch (Exception oEx) {
            return issuccessful;
         }
        }
    }
    
