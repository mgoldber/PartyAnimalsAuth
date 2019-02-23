# Venues

## Get All  

Get all of the venues

**URL** : `/v1/venue/`

**Method** : `GET`

**Permissions required** : Yes

**Data constraints**

No data needs to be provided. Can be empty body

**Data example**

```json
{
}
```

#### Success Response

**Content example**

```json
[
  {
    "geometry": {
      "type": "Point",
      "coordinates": []
    },
    "reviews": [
      "REVIEW_ID"
    ],
    "animals": [
      "ANIMAL_ID"
    ],
    "_id": "ID",
    "__v": 4,
    "name": "VENUE NAME HERE",
    "image": "IMAGE_URL",
    "venuetype": "VENUE_TYPE"
  }
]
```

#### Error Responses

**Condition** : If error is returned from the mongo query, will be returned in response.


## Get By ID

Get a single venue by ID

**URL** : `/v1/venue/:id`

**Method** : `GET`

**Permissions required** : Yes

**Data constraints**

The ID of the venue that is being retrieved must be provided.

**Data example**

```json
{
  "id": "VENUE_ID"
}
```

#### Success Response

**Content example**
```json
{
  "geometry": {
    "type": "Point",
    "coordinates": []
  },
  "reviews": [
    "REVIEW_ID"
  ],
  "animals": [
    "ANIMAL_ID"
  ],
  "_id": "ID",
  "__v": 4,
  "name": "VENUE NAME HERE",
  "image": "IMAGE_URL",
  "venuetype": "VENUE_TYPE"
}
```

#### Error Responses

**Condition** : If error is returned from the mongo query, will be returned in response.

# Animal

## Get Animals by Venue ID

Get animals by venue ID

**URL** : `/v1/venue/animals/:id`

**Method** : `GET`

**Permissions required** : Yes

**Data constraints**

The ID of the venue that is being retrieved must be provided.

**Data example**

```json
{
  "id": "VENUE_ID"
}
```

#### Success Response

**Content example**
```json
[
    {
      "_id": "ANIMAL_ID",
      "name": "ANIMAL_NAME",
      "type": "ANIMAL_TYPE",
      "image": "IMAGE_URL",
      "dance": "ANIMAL_FAVOURITE_DANCE",
      "venue": "VENUE_ID",
      "__v": "VERSION"
    }
]
