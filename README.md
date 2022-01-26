# fakecommerce-checkout-api

## Cart

### GET - `/carts`

#### Headers
`X-USER-ID: <USER_ID>`


#### RESPONSE

##### HTTP Code: `200 - OK`

```json
{
    "items": [
        {
            "product_id":"c53acb91-04cf-4eab-adfe-bf940e0197c1",
            "price": 2.45,
            "quantity": 10
        },
        {
            "product_id":"e2b8158d-d211-4237-a2df-bffd6256cc3a",
            "price": 2,
            "quantity": 1
        }
    ],
    "total": 26.5
}
```

### PUT - `/carts/add/:product_id`

#### Headers
`X-USER-ID: <USER_ID>`


#### RESPONSE

##### HTTP Code: `200 - OK`

```json
{
    "items": [
        {
            "product_id":"c53acb91-04cf-4eab-adfe-bf940e0197c1",
            "price": 2.45,
            "quantity": 10
        },
        {
            "product_id":"e2b8158d-d211-4237-a2df-bffd6256cc3a",
            "price": 2,
            "quantity": 1
        }
    ],
    "total": 26.5
}
```


### PUT - `/carts/remove/:product_id`

#### Headers
`X-USER-ID: <USER_ID>`


#### RESPONSE

##### HTTP Code: `200 - OK`

```json
{
    "items": [
        {
            "product_id":"c53acb91-04cf-4eab-adfe-bf940e0197c1",
            "price": 2.45,
            "quantity": 10
        },
        {
            "product_id":"e2b8158d-d211-4237-a2df-bffd6256cc3a",
            "price": 2,
            "quantity": 1
        }
    ],
    "total": 26.5
}
```

### PUT - `/carts/flush`

#### Headers
`X-USER-ID: <USER_ID>`


#### RESPONSE

##### HTTP Code: `204 - No Content`

### POST - `/carts/checkout`

#### Headers
`X-USER-ID: <USER_ID>`

`success`: 

##### HTTP Code: `200 - OK`

```json
{
    "order_id": "46acb98b-9452-4306-906b-1a74e22e0a30"
}
```

`not enough balance?`: 

##### HTTP Code: `422 - Unprocessable Entity`


## Order

### GET - `/orders`

#### Headers
`X-USER-ID: <USER_ID>`


#### RESPONSE

##### HTTP Code: `200 - OK`

```json
[
    {
        "id":"c53acb91-04cf-4eab-adfe-bf940e0197c1",
        "total": 134.30,
        "created_at": "2022-01-26 13:21Z",
    }
]
```


### GET - `/orders/:id`

#### Headers
`X-USER-ID: <USER_ID>`


#### RESPONSE

##### HTTP Code: `200 - OK`

```json
[
    {
        "id": "c53acb91-04cf-4eab-adfe-bf940e0197c1",
        "items": [
            {
                "product_id": "c53acb91-04cf-4eab-adfe-bf940e0197c1",
                "price": 2.45,
                "quantity": 10
            },
            {
                "product_id": "e2b8158d-d211-4237-a2df-bffd6256cc3a",
                "price": 2,
                "quantity": 1
            }
        ],
        "created_at": "2022-01-26 13:21Z",
        "total": 26.50,
    }
]
```
