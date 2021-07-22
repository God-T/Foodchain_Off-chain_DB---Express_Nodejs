# REST API
- [REST API](#rest-api)
    - [addUser](#addUser)
    - [getUserbyID](#getUserbyID)
    - [deleteUserbyID](#deleteUserbyID)
    - [getUsers](#getUsers)

**addUser**
----
  add a user.

* **URL**

  `POST` /api/user

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ Message : "User 0x00000000000001 added" }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ Message: "Add user failed", Error : "...some errors..." }`
    
    
    
    

**getUserbyID**
----
  get user data by given id.

* **URL**

  `GET` /api/user/:id
  
*  **URL Params**

   **Required:**
 
   `id=[0x00000000000001]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                   "id_address": "0x00000000000001",
                   "name": "RanchFarm AU",
                   "type": "Producer",
                   "location": "Sydney, NSW"
                  }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ Message: "Unable to get user 0x00000000000001", Error : "...some errors..." }` 

  OR

  * **Code:** 404 <br />
    **Content:** `{ Message : "No record of user 0x00000000000001" }`
    
    
    
    
    
**deleteUserbyID** 
----
  delete user data by given id.

* **URL**

  `DELETE` /api/user/:id
  
*  **URL Params**

   **Required:**
 
   `id=[0x00000000000001]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    Message: "Delete user 0x00000000000001 successfully"
                  }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ Message: "Unable to delete user 0x00000000000001", Error : "...some errors..." }` 

  OR

  * **Code:** 404 <br />
    **Content:** `{ Message : "No record of user 0x00000000000001" }`    
    
    
    
    
