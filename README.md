# Off-chain Data Storage Server

- [Getting Started](#Getting-Started)
- [REST API](#rest-api)
  - [Add User with Certification](#Add-User-with-Certification)
  - [Get User by ID](#Get-User-by-ID)
  - [Get Certification by User ID](#Get-Certification-by-User-ID)
  - [Add Document by User ID](#Add-Documents-by-User-ID)
  - [Get Documents by User ID](#Get-Documents-by-User-ID)
  - [Get Documents by Hash](#Get-Documents-by-Hash)
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

## **Add User with Certification**

add a single user data.

- **`POST` /api/user/:certifier**

- **URL Params:**

  - **Required:** `certifier=[some certifier]`

- **Request Body:**
  ```json
  {
    "id_address": "0x00000000000001",
    "name": "RanchFarm AU",
    "type": "Producer",
    "location": "Sydney, NSW"
    "certifier": "some certifier"
  }
  ```

## **Get User by ID**

get a single user data by given id.

- **`GET` /api/user/:id_address**

- **URL Params:**

  - **Required:** `id_address =[0x00000000000001]`

## **Get Certification by User ID**

get a single certification data by given id.

- **`GET` /api/user/:id_address/certification**

- **URL Params:**

  - **Required:** `id_address=[Integer]`

## **Add Document by User ID**

add a single document data by user id_address.

- **`POST` /api/user/:id_address/document**

- **URL Params:**

  - **Required:** `id_address=[Integer]`

- **Request Body:**
  ```json
  {
    "hash_value" : "SAJD890213H78...",
    "document" : "...legal doc signed by ...."
  }
  ```

## **Get Documents by User ID**

get a single documents data by user id_address.

- **`GET` /api/user/:id_address/document**

- **URL Params:**

  - **Required:** `id_address=[Integer]`

## **Get Documents by Hash**

get a single documents by document hash_value.

- **`GET` /api/document/:hash_value**

- **URL Params:**

  - **Required:** `id_address=[Integer]`
