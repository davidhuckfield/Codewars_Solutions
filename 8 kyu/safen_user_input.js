// link : https://www.codewars.com/kata/56bcaedfcf6b7f2125001118

function htmlspecialchars(formData) {
    formData = formData.replace(/&/g, "&amp;");
    formData = formData.replace(/</g, "&lt;");
    formData = formData.replace(/>/g, "&gt;");
    formData = formData.replace(/"/g, '&quot;');
    
    return formData;
  }