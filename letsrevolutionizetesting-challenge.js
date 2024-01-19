const SolveChallenge = async () => {
  let url = "https://letsrevolutionizetesting.com/challenge";

  try {
    while (url !== undefined) {
      const { follow, message } = await fetchResult(url)
  
      url = follow; 
  
      // assume follow always return url, otherwise need to validate if this is url
      if (url === undefined) {  
        return message
      }
    }
  } catch (error) {
    console.log(error);
  }
}


const fetchResult = async (url) => {
  const headers = {
    headers: { Accept: "application/json" },
  };
  const response = await fetch(url, headers)
  const data = await response.json();

  return data
}
