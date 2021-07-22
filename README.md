# REST API
- [REST API](#rest-api)
    - [Add User](#Add-User)
    - [Get User by ID](#Get-User-by-ID)
    - [Delete User by ID](#Delete-User-by-ID)
    - [Get Users](#Get-Users)

**Add User**
----
  add a single user data.

* **URL**

  `POST` /api/user

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ Message : "User 0x00000000000001 added" }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ Message: "Add user failed", Error : "...some errors..." }`
    
    
    
    

**Get User by ID**
----
  get a single user data by given id.

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
    
    
    
    
    
**Delete User by ID** 
----
  delete a single user data by given id.

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
    
    
    
**Get Users**
----
  add all users.

* **URL**

  `GET` /api/user

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
       ```json
       [
          {
            "id_address": "0x00000000000001",
            "name": "RanchFarm AU",
            "type": "Producer",
            "location": "Sydney, NSW"
          },
          {
            "id_address": "0x00000000000002",
            "name": "BeefFactory",
            "type": "Processor",
            "location": "Sydney, NSW"
          } 
      ]
      ```
 
* **Error Response:**

  * **Code:** 500 <br />
  * **Content:** 
        ```javascript
        { 
            Message: "Unable to retrieve users", 
            Error : "...some errors..." 
        }
        ```
    
        
