const getData = async (number) => {
  console.log("Number", number);
  const rawData = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${number}`
  );
  return rawData.json();
};

export default getData;