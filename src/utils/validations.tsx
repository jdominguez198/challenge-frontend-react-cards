const validateUrl = (text: string) => {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

  return pattern.test(text);
}

const validateField = (value: string, type: string[]) => {
  if (type.includes('required') && value === '') {
    return false;
  }

  if (type.includes('minText') && (value && value.length < 3)) {
    return false;
  }

  if (type.includes('url') && (value && !validateUrl(value))) {
    return false;
  }

  return true;
}

export default validateField;
