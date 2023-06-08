# Interactive Kids Game Website

Backend: app.py and store.py files. Python with flask.
Frontend: All files in foodapp folder. Reactjs.


# To run this project, be in the PMMC folder and use command "cd frontend && npm run build && cd .. && python3 app.py", then click the output url.

Requirements
Functional Requirements:
- Descriptive Title: 
Use cases

![image](https://github.com/yylmax/PMPC/assets/78946877/b64c9e47-3138-4ae9-a06c-bfa55a0a36f7)

Use cases:
Login/Register: For registration: The user fills in the required registration information, such as username, password, and email. The system validates the information and creates a new user account in the database.  For login:  The user enters their username and password. The system verifies the entered credentials against the stored user accounts in the database. If the credentials are valid, the system logs the user in and redirects them to the game interface. If the credentials are invalid, the system displays an error message and prompts the user to enter valid credentials.

Customize Game Settings: This use case represents the functionality for users to customize their game settings, such as game difficulty, game theme, or sound settings.

Player starts the game: This use case represents the action of a player starting a new game session in the Marine Mammal Mania matching game web. It includes steps such as displaying game instructions, generating a set of matching game cards, and starting the game timer.
Player plays the game: This use case represents the player's interactions during the game session. It includes actions such as flipping over cards to reveal the images, selecting the name of matching cards, and tracking the player's progress and score.
Hint System: This use case represents the functionality of a hint system that provides assistance to players during the game by revealing the location of matching pictures. The user selects the "Hint" or "Help" option during the game. The user can use this information to make a match or continue playing the game. The system deducts the hint points or game currency from the user's account. The user can choose to use more hints or continue playing without hints.

Player submits an answer: This use case represents the player submitting an answer with the correct name and the animal picture. It includes steps such as verifying if the selected picture forms a valid match, updating the score and game status, and checking if the game is over.
Admin manages mammals: This use case represents the actions of an admin user managing the mammal information in the Marine Mammal Mania  game web. It includes actions such as adding new mammal information, editing existing mammal information, and deleting mammal information.
Admin adds a mammal: This use case represents the admin user adding a new mammal to the game. It includes steps such as entering mammal information such as name, image, and sound, validating the input, and updating the mammal database.

Admin edits mammals: This use case represents the admin user editing existing mammal information in the game. It includes steps such as selecting a mammal to edit, modifying the mammal information, validating the input, and updating the mammal database.

Admin deletes a mammal: This use case represents the admin user deleting a mammal from the game. It includes steps such as selecting a mammal to delete, confirming the deletion, and updating the mammal database.

Report Issue. This use case represents the functionality for users to report issues, such as bugs or technical problems, encountered in the game system. The system displays a form or interface for the user to provide details of the issue encountered.The user fills in the required information, such as issue description, error message, and screenshot (if applicable).

- Author(s): [Scarlett Zhu, Alethia Jin]
- Date Created: [4/24/2023]
- Last Updated: [4/24/2023, first version]
- Status: Active



Software Design
UML with module description
 l[iangchun uml.png](https://drive.google.com/file/d/1g7ExoadMaVA1SQzPVbTzE3ls6-yuK_N9/view?usp=sharing)
- Author(s): Liangchun Ma
- Descriptive Title: UML
- Date Created: [5/31/2023]
- Last Updated: [5/31/2023]
- Status:  Active




