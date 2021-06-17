export const usersList = {
  "items": [
    {
      "id": "1",
      "type": "rich",
      "placeholder": "I'am rich",
      "richValue": 1000,
      "required:": true,
      "minLength": 3,
      "maxLength": 15
    },
    {
      "id": "2",
      "type": "normal",
      "required:": true,
      "placeholder": "I'am normal",
      "minLength": 8,
      "maxLength": 64,
      "normalValue": 200
    },
    {
      "id": "3",
      "type": "poor",
      "required:": false,
      "placeholder": "I'am poor",
      "minDate": "1900-01-01",
      "maxDate": "2020-01-01",
      "poorValue": 50
    },
    {
      "id": "4",
      "type": "nothing",
      "required:": false,
      "placeholder": "I'am nothing",
      "nothingValue": 0,
      "options": [
        "male",
        "female"
      ]
    },
    {
      "id": "5",
      "type": "rich",
      "placeholder": "I'am rich",
      "richValue": 1000,
      "required:": true,
      "minLength": 3,
      "maxLength": 15
    },
  ]
}