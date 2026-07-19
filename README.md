# MS Reynaldi Adidarma - Backend Technical Test

## Deployment

The backend service has been successfully deployed and is available at:

**Base URL**

https://ms-reynaldiadidarma-betest-production.up.railway.app/

---

## Authentication

This API is protected using **Bearer Token Authentication**.

Before accessing protected endpoints, obtain an access token from the authentication endpoint below.

**Token Endpoint**

```http
POST /api/auth/token
```

**Full URL**

https://ms-reynaldiadidarma-betest-production.up.railway.app/api/auth/token

### Request

```bash
curl --location 'https://ms-reynaldiadidarma-betest-production.up.railway.app/api/auth/token' \
--header 'Content-Type: application/json' \
--data '{
    "userName": "admin",
    "password": "password"
}'
```

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiaWF0IjoxNzg0NDMzNTEzLCJleHAiOjE3ODQ0MzcxMTN9.fAw2OC_hkgXVW9R9pH_XqF9Jx8tjaVi6SO0htrI04qk"
}
```

---

## Using the Access Token

Include the returned JWT token in the `Authorization` header for all protected API requests.

### Example

```http
Authorization: Bearer <your-jwt-token>
```

or using cURL:

```bash
curl --location 'https://ms-reynaldiadidarma-betest-production.up.railway.app/api/user' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your-jwt-token>'
```

---

## Notes

- Replace `<your-jwt-token>` with the JWT returned from the authentication endpoint.
- All protected endpoints require a valid Bearer Token.
- The service is hosted on Railway and can be accessed through the deployment URL above.

Thank you for reviewing my submission.
