// (function(){
//   'use strict';

  var formData = [
    {
      "type": "text",
      "label": "First Name",
      "id": "user-first-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "text",
      "label": "Last Name",
      "id": "user-last-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "email",
      "label": "Email Address",
      "id": "user-email",
      "icon": "fa-envelope",
      "options": []
    },
    {
      "type": "text",
      "label": "Current website url",
      "id": "user-website",
      "icon": "fa-globe",
      "options": []
    },
    {
      "type": "select",
      "label": "Select Language",
      "id": "user-language",
      "icon": "",
      "options": [
        {
          "label": "English",
          "value": "EN"
        },
        {
          "label": "French",
          "value": "FR"
        },
        {
          "label": "Spanish",
          "value": "SP"
        },
        {
          "label": "Chinese",
          "value": "CH"
        },
        {
          "label": "Japanese",
          "value": "JP"
        }
      ]
    },
    {
      "type": "textarea",
      "label": "Your Comment",
      "id": "user-comment",
      "icon": "fa-comments",
      "options": []
    },
    {
      "type": "tel",
      "label": "Mobil Number",
      "id": "user-mobile",
      "icon": "fa-mobile-phone",
      "options": []
    },
    {
      "type": "tel",
      "label": "Home Number",
      "id": "user-phone",
      "icon": "fa-phone",
      "options": []
    }
  ];

  var formNode = document.getElementById('signupForm');

  var formHeader = document.createElement('h1');
  formNode.appendChild(formHeader);
  formHeader.textContent = "Sign Up For My Web App";

  for (var i = 0; i < formData.length; i++) {

    var labelDiv = document.createElement('label')
    labelDiv.setAttribute('for', formData[i].type)
    console.log(labelDiv);
    formNode.appendChild(labelDiv);

    if (formData[i].type === 'text'|| formData[i].type === 'email' || formData[i].type === 'tel') {
      var formField = document.createElement('input');
      formField.setAttribute('type', formData[i].type);
      formField.setAttribute('id', formData[i].id);
      formField.placeholder = formData[i].label;
      console.log(formField);
      formNode.appendChild(formField);
    }

    if (formData[i].type === 'select') {
      var selectField = document.createElement('select');
      selectField.setAttribute('type', formData[i].type);
      selectField.setAttribute('id', formData[i].id);
      console.log(selectField);
      formNode.appendChild(selectField);

      for (var p = 0; p < (formData[4].options).length; p++) {
        var optionsList = document.createElement('option');
        optionsList.textContent = (formData[4].options[p].label);
        optionsList.value = (formData[4].options[p].value);
        selectField.appendChild(optionsList);
      }
    }

    if (formData[i].type === 'textarea') {
      var textField = document.createElement('textarea');
      textField.setAttribute('type', formData[i].type);
      textField.setAttribute('id', formData[i].id);
      textField.placeholder = formData[i].label;
      console.log(textField);
      formNode.appendChild(textField);
    }


  };

  var submitButton = document.createElement('button');
  submitButton.setAttribute('id', 'submitButton');
  submitButton.textContent = 'Submit Form';
  console.log(submitButton);
  formNode.appendChild(submitButton);





// }());
