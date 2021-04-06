# DEMO GOALS

## CREATE/ READ

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

***

## UPDATE/ DELETE

- We will need to add new routes, UPDATE to update the tasks, and DELETE to delete the tasks.

  - Use method-override for this one.

5.I want to be able to Update tasks info including the status property.

    - Create a form in the view details task page where it will contain all of the information about the task, and route that task to an put route method named /tasks/update/:task_id
    - In the server JS, handle the put request with a callback function where it will update the task info in the DB and redirect the user to the updated task details page.

6.I want to be able to DELETE tasks that I am done with from either the index.ejs or the task details page.

    - Create a from that will delete a task based on its ID
    - Create a route that will handle the DELETE method request and a call back function that will DELETE the task from the DB and redirect the user back to the index page after the task has been deleted.
