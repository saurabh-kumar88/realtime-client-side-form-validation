Description : This is very simple client side form validation project, purely written in vanilla javascript, html and css, Forms are very essential part for any web appliction to get user data, and provide it to server
for validation, generally forms are validated on server side, i.e when user entered all its inputs then only it can be processed by the remote server, and this make sure to protect system from udesired data to be sended to database, but if user make some mistakes unintentionally, he/she must have to fill that entire form again right from start, this thing feels very irretating.

So what if our forms get validated on client side, and warn user while he type wrong characters, what if our
for constatnly tells user that what typed is against form input rules or correct.. and if filled out entire form,
it shows no error and ready to be submitted, imagine how much round-trip time can be saved and we got a excellent
user experince.

But developers should not rely on client side form validation, because javascript, html are clearly visible at clinet side, so some potetial threat can be created, by by-passing or manupilation javascipt code.
so some sort of server side validation is a must.

This is demo project needs huges improvements, there is code duplication every where... may be we should use class and oop programing to make code more maintable and extendale.

for more info : https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
Originally my work is based on this repo : https://github.com/ireade/form-validation-realtime/blob/gh-pages/script.js

1. Clone this repo : git clone (copy the link )

2. Create dir on your local machine, name it whatever you want

3. cd to your folder

4. git init --> git clone https://github.com/saurabh-kumar88/realtime-client-side-form-validation.git

5. open this folder with vscode make sure u have live server extension installed in it (otherwise u have to keep reloding html page to see chages each time u make any modification)

6. open index.html and click Go Live button or ctl + shift + p and select open with live server
