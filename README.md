# Off-chain Data Storage Server

- [Getting Started](#Getting-Started)
- [Other Scripts](#Other-Scripts)
- [REST API](#rest-api)
  - [Add User with Certification](#Add-User-with-Certification)
  - [Get User by ID](#Get-User-by-ID)
  - [Get Certification by User ID](#Get-Certification-by-User-ID)
  - [Add Document by User ID](#Add-Document-by-User-ID)
  - [Get Documents by User ID](#Get-Documents-by-User-ID)
  - [Get Documents by Hash](#Get-Documents-by-Hash)
  - Unfinished...

# Getting Started

**_\*Note that cd to source/db_server first_**

**Install:**

```
npm install
```

**Init DB:**

```
npm run db-init
```

**Run server:**

```
npm start
```

# Other Scripts

**_\*Use to reset and update the db with lastest server version, ori db data will be wiped out_**

**Reset DB:**

```
npm run db-reset
```

# REST API

Off-chain data storage APIs, DB server running on http://localhost:5000

## **Add User with Certification**

add a single user data registered by given certifier.

- **`POST` /api/user/:certifier**

- **URL Params:**

  - **Required:** `certifier=[text]`
  - **Example:** `certifier = "some certifier..."`

- **Request Body:**
  ```json
  {
    "id_address": "0x00000000000001",
    "name": "RanchFarm AU",
    "type": "Producer",
    "location": "Sydney, NSW",
    "certifier": "some certifier"
  }
  ```
- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    {
      "Message": "Add user 0x00000000000001 with Certification 1 successfully"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Add user failed, may need rollback for certification table...",
      "Error": "...some errors..."
    }
    ```

## **Get User by ID**

get a single user data by given user id_address.

- **`GET` /api/user/:id_address**

- **URL Params:**

  - **Required:** `id_address=[text]`
  - **Example:** `id_address = "0x00000000000001"`

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    {
      "id_address": "0x00000000000001",
      "name": "RanchFarm AU",
      "type": "Producer",
      "location": "Sydney, NSW"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Unable to get user 0x00000000000001",
      "Error": "...some errors..."
    }
    ```

  OR

  - **Code:** 404 <br />
  - **Content:**
    ```json
    {
      "Message": "No record of user 0x00000000000001"
    }
    ```

## **Get Certification by User ID**

get a single certification data for a user with given user id_address.

- **`GET` /api/user/:id_address/certification**

- **URL Params:**

  - **Required:** `id_address=[text]`
  - **Example:** `id_address = "0x00000000000001"`

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    {
      "id": "1",
      "certifier": "some certifier"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Unable to get certification with user 0x00000000000001",
      "Error": "...some errors..."
    }
    ```

  OR

  - **Code:** 404 <br />
  - **Content:**
    ```json
    {
      "Message": "No record of user 0x00000000000001"
    }
    ```

  OR

  - **Code:** 404 <br />
  - **Content:**
    ```json
    {
      "Message": "No record of certification 1 with user 0x00000000000001"
    }
    ```

## **Add Document by User ID**

add a single document data of a user certification with the given user id_address.

- **`POST` /api/user/:id_address/document**

- **URL Params:**

  - **Required:** `id_address=[text]`
  - **Example:** `id_address = "0x00000000000001"`

- **Request Body:**

  ```json
  {
    "hash_value": "SAJD890213H78...",
    "document": "...binary data...."
  }
  ```

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    {
      "Message": "Add document with user 0x00000000000001 successfully"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Unable to add document with user 0x00000000000001",
      "Error": "...some errors..."
    }
    ```

  OR

  - **Code:** 404 <br />
  - **Content:**
    ```json
    {
      "Message": "No record of user 0x00000000000001"
    }
    ```

  OR

  - **Code:** 404 <br />
  - **Content:**
    ```json
    {
      "Message": "No record of certification 1 with user 0x00000000000001"
    }
    ```

## **Get Documents by User ID**

get all documents data of a user with given id_address.

- **`GET` /api/user/:id_address/document**

- **URL Params:**

  - **Required:** `id_address=[text]`
  - **Example:** `id_address = "0x00000000000001"`

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    [
      {
        "hash_value": "ASDH382HDAUSIHD92...",
        "document": "...binary data....",
        "certification_id": 1
      },
      {
        "hash_value": "LS913278DHAS8DH78...",
        "document": "...binary data....",
        "certification_id": 1
      }
    ]
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Unable to get document with user 0x00000000000001",
      "Error": "...some errors..."
    }
    ```

  OR

  - **Code:** 404 <br />
  - **Content:**
    ```json
    {
      "Message": "No record of user 0x00000000000001"
    }
    ```

  OR

  - **Code:** 404 <br />
  - **Content:**
    ```json
    {
      "Message": "No record of certification 1 with user 0x00000000000001"
    }
    ```

## **Get Documents by Hash**

get a single documents by document hash_value.

- **`GET` /api/document/:hash_value**

- **URL Params:**

  - **Required:** `hash_value=[text]`
  - **Example:** `hash_value = "LS913278DHAS8DH78..."`

**Success Response:**

- **Code:** 200 <br />
- **Content:**

  ```json
  {
    "hash_value": "LS913278DHAS8DH78...",
    "document": "...binary data....",
    "certification_id": 1
  }
  ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Unable to get document LS913278DHAS8DH78...",
      "Error": "...some errors..."
    }
    ```

  OR

  - **Code:** 404 <br />
  - **Content:**
    ```json
    {
      "Message": "No record of document LS913278DHAS8DH78..."
    }
    ```
