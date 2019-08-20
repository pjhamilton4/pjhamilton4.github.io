function displayEmail() {
   var username = "pjhamilton4";

   var hostname = "gmail.com";

   var linktext = username + "@" + hostname;

   document.write("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
}