# Assigment-to-Login-Page



This is the live demo link https://sunil123-prog.github.io/Assigment-to-Login-Page/

1. When you open the index.html file in a browser, you should see the styled login form.
2. Entering data and submitting the form will trigger the JavaScript code to validate input, show a spinner, and display a success or failure message based on the response from the API.
3. The HTML file includes the structure of the login form with fields for email and password, and a checkbox for "Remember me". It links to the CSS file for styling and the JavaScript file for functionality.
4. The CSS file styles the form and its elements, including responsive design for different screen sizes.
5.  The JavaScript file includes functions for validating the email, toggling password visibility, saving checkbox state to localStorage, and handling form submission by making a POST request to a placeholder API.
6. when you click email field you have to give valid email address.In this field you must use '@' symbol otherwise you will get error like enter valid email address, For eg:raju@gmail.com.
7. Password Field also you have to enter at least 6 characters long otherwise it will get error. eg: 123456 or suresh like this pattern you have to follow.
8. I added remember me checkbox also.
9. I added Bonus Features:
    - Show/hide password functionality.
    - Remember me checkbox.
    - Loading spinner during the API call.
10. It initiates a POST request to a specified URL with the user's credentials. It then processes the server's response: if successful, it informs the user of a successful login; if there is an error, it informs the user that the login failed. The spinner provides visual feedback while the request is being processed, and it is hidden once the process completes, regardless of the outcome.
11. When you submit the details email and password if internet is connect the message will displays Login succesful , if internet is not connect login will fails.
12. The .catch block ensures that if there is an error during the fetch request, the user is informed of the failure through a message and a change in text color. Additionally, the spinner is hidden to signal that the processing has stopped.
13. One more thing is when internet connection is there that time the message will displays Successful otherwise not connected internet the message will fails because when internet connection doesn't support the API will not work.

Example for Login:
  * raju@gmail.com
  * 123456
    -After that you can Submit it can show response message from API.
