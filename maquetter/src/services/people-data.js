const getData = async () => {
  const rawData = await fetch(
    "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5"
  );
  return rawData.json();
};

export default getData;