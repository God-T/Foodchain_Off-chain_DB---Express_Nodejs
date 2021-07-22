# Foodchain_Off-chain_DB---Express_Nodejs

- [REST API](#rest-api)
    - [addUser](#addUser)
    - [getUserbyID](#getUserbyID)
    - [deleteUserbyID](#deleteUserbyID)
    - [getUsers](#getUsers)


# REST API

**addUser**
----
  add a user.

* **URL**

  `GET` /api/user

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ Message : "User 0x00000000000000 added" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ Message: "Add user failed", Error : "...some errors..." }`

