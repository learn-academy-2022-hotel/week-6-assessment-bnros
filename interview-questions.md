# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I am not sure how to go about fixing this mistake.

Researched answer: If I forgot to add the foreign key, I can start fixing this mistake by generating a new migration to add the foreign key. Once this has been done, I can modify the migration file by adding data into your table. Once that is done, I should rub the migration, and update the new models to reflect the new associations with the names of the tables and columns. The foreign key will be named cohort_id, and will be in the student model.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes of Show, Edit, Destroy, and Update must always be passed params because they point to specific data called by a key id number.

Researched answer: As listed above, asides from show, the RESTful routes of edit, destroy, and update are the ones that always needs to be passed params. This is due to the fact that with these three, they operate on very specific resources, and they need to know which resource needs to be acted on, which is indicated by the ID paramaeter. In short, generally speaking RESTful routes that modify (create, update, and destroy) will require parameters, whereas routes that retrieve (index and show) will not.

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generate commands are:
1. $ rails generate model -- this command is what we've used most thus far, and it created a model as the name implies, and the associated migration file.
2. $ rails generate controller -- also, as the name implies, this generate command will create a controller.
3.  $ rails generate migration - this generate command will create a database migration file.

Researched answer: Upon doing additional research, I learned that there are other additional rails generator commands that are even more useful! In addition to the ones I listed above, I learned that there is also a $ rails generate scaffold command - this command does a lot of the heavy lifting and creates full CRUD resources, and also the model, controller, views, and migrations. Can be extremely useful in upcoming projects! Besides this, there is also $ rails generate mailer, which creates a mailer (enables apps to send and receive emails)

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

The action above will use "index". This will display all the students in the db.

action: "POST" location: /students

The action above will use "create". This will allow a new student to be added,

action: "GET" location: /students/new

The action above will use "new". THis will display a form for new student data to be inputted.

action: "GET" location: /students/2

The action above will use "show". This will display information corresponding to the student with the id number of 2.

action: "GET" location: /students/2/edit

The actionn above will use "edit". This will display a form to update information for the student with the id number of 2.

action: "PATCH" location: /students/2

The action above will use "update". This will take the new, updated student information above, and replace the existing student data of the student with the key id number of 2.

action: "DELETE" location: /students/2
The action above will use "destroy". This will delete student data information of the student with the key id number of 2 out of the db.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I want to be able to see all my tasks on my to do list.
2. As a user, I want to be able to mark my tasks as complete and update it.
3. As a user, I want to be able to add a new task onto my to-do list
4. As a user, I want to be able to edit existing tasks.
5. As a user, I want to be able to remove a task.
6. As a user, I want to be able to be able to organize my tasks by date and priority.
7. As a user, I want to be able to create additional to-do list for tasks.
8. As a user I want to be able to track progress.
9. As a user I want to able to add notes about the task.
10. As a user, I want to see a user friendly interface.