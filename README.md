# notesapp
React + Django

This projects uses react front end with django Rest Framework API calls for managing notes

I have implemented django templating in the same project for session experience.

go to static and run 
npm install to install all the modules to make changes to the react front end 

also run below command for hot reload: 

npm run listen

Projects uses django's webpack loader to render the latest JS bundle for the file.

Running the project:

create a virtualenv and install all the dependencies as:

  pip install -r requirements.txt
  
  migrate the project:
  
  python manage.py migrate
  python manage.py makemigrations # for any left migrations
  
  python manage.py runserver
  
react front end would be available on 
  http://127.0.0.1:8000/react/
