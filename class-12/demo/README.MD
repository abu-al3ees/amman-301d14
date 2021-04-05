# DEMO GOALS

- Create a CRUD APP, where you will only be adding a new task, displaying all the active tasks, and getting each task details.

1.Create a route that will direct to the homepage where all the tasks will be displayed.
    - Get the inserted data from the tasks table.
    - Display such data in the index.ejs template

2.Create a route that will direct the user to a form where they can add their tasks.
    - This form will send the data to the server as POST method to another route called add.
    - This data will be stored in the tasks table.
    - The use will be redirected to the homepage, where we will see the added task.

3.Create a route where if you provided in the URL of the ID task, you will get that task details in a separate page
    - Provide in the hyperlink for each task the ID of the task.
    - Open up the details page in a new tab.

4.I want the code to be modular and clear, and not have repeating pieces of code.
    - Introduce the Include tag.
