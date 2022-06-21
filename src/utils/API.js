import axios from 'axios';

const GetLocation = async (loca) => {
  try {
    return await axios.get(`https://geocode.maps.co/search?q=${loca}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
export default GetLocation;
