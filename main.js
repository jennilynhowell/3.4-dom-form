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

    var formField = document.createElement('input');
    formField.setAttribute('type', formData[i].type);
    formField.setAttribute('id', formData[i].id);
    formField.placeholder = formData[i].label;
    console.log(formField);
    formNode.appendChild(formField);

//=====================HOW TO GET THIS TO PULL OPTIONS ARRAY??
    if (formData[i].type === 'select'){
      var selectBox = document.getElementById('user-language');

      for (var p = 0; p < (formData[i].options).length; p++) {
        var optionsList = document.createElement('option');
        optionsList.textContent = 'HELLO';
        // optionsList.setAttribute('label', (formData[i].options).label);
        optionsList.value = (formData[i].options).value;
        selectBox.appendChild(optionsList);
      }
    }

  };

  // var selectBox = document.getElementById('user-language');
  //   for (var p = 0; p < (selectBox.options).length; p++) {
  //     var optionsList = document.createElement('option');
  //     optionsList.value = (selectBox.options).value;
  //     selectBox.appendChild(optionsList);
  //   }




// }());
