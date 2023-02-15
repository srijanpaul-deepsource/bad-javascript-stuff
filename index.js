export const getDomainName = (hostName = 'https://ancestrystage.com/') => {
  const re = /\.([^.]+?)$/;
  return re.exec(hostName)[1];
};

