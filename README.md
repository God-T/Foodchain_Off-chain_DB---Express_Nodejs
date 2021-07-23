# Off-chain Data Storage Server

- [Getting Started](#Getting-Started)
- [REST API](#rest-api)
  - [Add Certification](#Add-Certification)
  - [Get Certification by ID](#Get-Certification-by-ID)
  - [Add User](#Add-User)
  - [Get User by ID](#Get-User-by-ID)
  - [Delete User by ID](#Delete-User-by-ID)
  - [Update User by ID](#Update-User-by-ID)
  - [Get Users](#Get-Users)
  - Unfinished...

# Getting Started

**Install:**

```
npm install
```

**Init DB:**

```
npm run db-init
```

**Reset DB:**

```
npm run db-reset
```

**Run server:**

```
npm start
```

# REST API

Off-chain data storage APIs, DB server running on http://localhost:5000

## **Add Certification**

add a single certification data.

- **`POST` /api/certification**

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    {
      "Message": "Certification added",
      "certification_id": "1"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Add certification failed",
      "Error": "...some errors..."
    }
    ```

## **Get Certification by ID**

get a single certification data by given id.

- **`GET` /api/certification/:id**

- **URL Params:**

  - **Required:** `id=[Integer]`

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    {
      "id": "1",
      "certifier": "Hotpot Team"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Unable to get certification 1",
      "Error": "...some errors..."
    }
    ```

  OR

  - **Code:** 404 <br />
  - **Content:**
    ```json
    {
      "Message": "No record of certification 0x00000000000001"
    }
    ```

## **Add User**

add a single user data.

- **`POST` /api/certification/:id/user**

- **URL Params:**

  - **Required:** `id=[Integer]`

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    {
      "Message": "User 0x00000000000001 added"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Add user failed",
      "Error": "...some errors..."
    }
    ```

## **Get User by ID**

get a single user data by given id.

- **`GET` /api/user/:id**

- **URL Params:**

  - **Required:** `id=[0x00000000000001]`

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

## **Delete User by ID**

delete a single user data by given id.

- **`DEL` /api/user/:id**

- **URL Params:**

  - **Required:** `id=[0x00000000000001]`

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    {
      "Message": "Delete user 0x00000000000001 successfully"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**

    ```json
    {
      "Message": "Unable to delete user 0x00000000000001",
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

## **Update User by ID**

update a single user data by given id.

- **`PTCH` /api/user/:id**

- **URL Params:**

  - **Required:** `id=[0x00000000000001]`

- **Body Params:**

  - **Optional:**
    ```json
    {
      "columns to update": "...updated value..."
    }
    ```

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
    ```json
    {
      "Message": "Update user 0x00000000000001 successfully"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**

    ```json
    {
      "Message": "Unable to update user 0x00000000000001",
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

## **Get Users**

add all users.

- **`GET` /api/user**

- **Success Response:**

  - **Code:** 200 <br />
  - **Content:**
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

- **Error Response:**

  - **Code:** 500 <br />
  - **Content:**
    ```json
    {
      "Message": "Unable to retrieve users",
      "Error": "...some errors..."
    }
    ```
