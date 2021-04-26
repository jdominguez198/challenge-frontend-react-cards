const loadScript = function(url: string) {
  if (!document || !document.body) {
    return false;
  }

  const script = document.createElement('script');

  script.defer = true;
  script.src = url;
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  document.body.appendChild(script);

  return true;
};

export default loadScript;
