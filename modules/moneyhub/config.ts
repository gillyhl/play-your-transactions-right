import { ApiClientConfig } from "@mft/moneyhub-api-client"

const config: ApiClientConfig = {
  resourceServerUrl: "https://api.moneyhub.co.uk/v2.0",
  identityServiceUrl: "https://identity.moneyhub.co.uk/oidc",
  accountConnectUrl: "https://bank-chooser.moneyhub.co.uk/account-connect.js",
  client: {
    client_id: "979abdab-fd64-42e6-abd2-ee74542f3493",
    client_secret: "4b8be8e0-fe14-4899-bebb-819f35cca519",
    token_endpoint_auth_method: "private_key_jwt",
    id_token_signed_response_alg: "RS256",
    request_object_signing_alg: "RS256",
    redirect_uri: "http://localhost:3000/callback",
    response_type: "code",
    "keys": [
      {
        "kty": "RSA",
        "kid": "eaQHEWFPfJexsV7ac5eRZBzfK8yoZYo6gJH7HnC3OPI",
        "use": "sig",
        "e": "AQAB",
        "n": "1wr70ryhkv0fvhOLLT6H5yrZVeuTTo6GaX0TIccoC9KXxbM0osQL6UFsdCxRD5XckMLjd2lgpxGDlGGB7AEvKyDxRnzT-E9m-6Jvnr7dYeZR9DI9X7jcA9G4YROVB0aAEDtpAEI0rvuOZyYrSEVzOxwMn2g855bPREATL7rQmP9SoJ9VyAdXfNOO7XjpbjoweurH5hSNRAUn9B7wAER24H-iQRfhUciI85BtaOXObXfZfLzJQMshF9PjBRXMA49BLbzvyFpl6RSao2wm1BUqIfny95UUSfNAhMa7uvhrmbvs4lbVYxuxtoq84bF_XwNJB4gzPn4WczydvMGW1RJ5Hw",
        "d": "YuxGk9b6bOfMZmAPMi0Fz63CdOf9x7GA254R4wP-xBGIiAW8PPP6lr7l6TtJvuWtpVpB0XjEYZaI9QU2Ax84V5q74zUhPaUpNrCusFQU-yg8ox1JZnNfotIjA2VCtSoVV2I9F0VdfvFxvLmuR3zLWXG5zMri2ZZimn7vVJGXzAkv-97W4TvYidJHqwGYgdUDNmKn226k6EQe_yzcSrIwW2Iu1GX18SGPXmD14IrXVlF6s4wlfws4XYnqfiQM7nXrV2UUOwru-HmShSj57qWx9TNjuitINefn6-TTNCCaFkLA5nQMGrSJkopRBW2aW5nAiWk3TfYXygNBqgLduYjtAQ",
        "p": "-H1X-zCiXGClW0woPkaBBGHLT2sM1TWcYt3OzrxZyMj6YG6kUfe1sf0Azg9FMIvKMtqM2p4-YTJxw3x-pa5byudsLsyX7sT5q2_n4PMpddH1y370StvNYqLNvthDAsiLSB6OtAlxTOGkfOxl2Axr1Hg3jcDdYUKCTEtwsu5_AGE",
        "q": "3YrZsGNnV-yjcFmaRsqK1YZF5p0k_pzI95mo68Xh9Xl9fn86gvZJUQlgEXZbOcZLg-C6XibFv8ml2cRzUt_knLZ3gxAUCLktJghiarNgM6jb9v0jDy-U_Lmu0HNEwpksXv0kU1vEGoW55O6drsjta-fZUZF8Yi1W3n3g-atZ6X8",
        "dp": "Bt3X144hfnIBP8Ob_RSPriJRrvEjWqTvnF_KvjXAOWcsXAvSqJ0yvSdjpU4QuGW0gbE-YTAsQx1UvXUsPsHRsYqxl515uVRiHdWqz7GIfMP_ic8JSyRFyar8CoEJYQNPrf-CLAFyyxAVLoqNyemV9ToZNuaUd4KR_S-8foVOpyE",
        "dq": "k9ewVETR11wk6bnx-aH6qmnTxgVCheNtPca-crD4jM9JjxwqmPDwlnKyOJUKZfDNvjE_TcuEFevkkQHHkBu3vVkLQlx9ciDZX1MjEl-oKHFccWQWfHDddRYY8iSqU07SzIUUM8i-gpCRMJSIh_awcl0jqopzPjVRjmLkuti9xNM",
        "qi": "ll_AVUvGaaXbWwG0BPAvx1DC68e_In9pY6-umijGNmUzXR2HS9EJkErTQvbwrcc6mVbKctetDb7uKqiYWLE375CetHzXnipWFIBp8go2NgEMmoaMM0jquYakXUIxB0P0wPJNxxRhWk9p1f1bG1K4y_p2QpVcybetpJDSEt3jx4I"
      }
    ],
  },
}

export default config
